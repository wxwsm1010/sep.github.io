from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter


ROOT = Path("/Users/wmh/Documents/新网页1")
OUTPUT_DIR = ROOT / "home_media"

HOME_MEDIA_SOURCES = {
    "hero-automatic": ROOT / "切片机总目录/全自动切片机/SS-A350B/SS-A350B-1.jpg",
    "hero-semi": ROOT / "切片机总目录/半自动切片机/SS-350B/SS-350B-1.jpg",
    "hero-vertical": ROOT / "切片机总目录/立式切片机/SS-F350C1/SS-F350C1-1.jpg",
    "hero-overview": ROOT / "切片机总目录/全自动切片机/SS-A300C/SS-A300C-1.jpg",
    "hero-smart": ROOT / "切片机总目录/智能机/SS-F350H/SS-F350H-1.jpg",
    "solution-central-kitchen": ROOT / "切片机总目录/全自动切片机/SS-A350/SS-A350-1.jpg",
    "solution-meat": ROOT / "切片机总目录/半自动切片机/SS-250C SS-300C/SS-250C SS-300C-1.jpg",
    "solution-fresh-cut": ROOT / "切片机总目录/立式切片机/SS-F350C/SS-F350C-1.jpg",
    "solution-prepared-food": ROOT / "切片机总目录/智能机/SS-F350H/SS-F350H-2.jpg",
}

WHITE_THRESHOLD = 244
MAX_CHANNEL_DIFF = 18


def is_background_like(rgb: tuple[int, int, int]) -> bool:
    r, g, b = rgb
    return min(r, g, b) >= WHITE_THRESHOLD and max(r, g, b) - min(r, g, b) <= MAX_CHANNEL_DIFF


def build_mask(image: Image.Image) -> Image.Image:
    width, height = image.size
    pixels = image.load()
    mask = Image.new("L", (width, height), 255)
    mask_pixels = mask.load()
    visited = [[False] * width for _ in range(height)]
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if visited[y][x]:
            continue
        visited[y][x] = True

        if not is_background_like(pixels[x, y][:3]):
            continue

        mask_pixels[x, y] = 0

        if x > 0:
            queue.append((x - 1, y))
        if x < width - 1:
            queue.append((x + 1, y))
        if y > 0:
            queue.append((x, y - 1))
        if y < height - 1:
            queue.append((x, y + 1))

    return mask.filter(ImageFilter.GaussianBlur(radius=0.9))


def export_cutout(source: Path, output: Path) -> None:
    image = Image.open(source).convert("RGBA")
    mask = build_mask(image)
    image.putalpha(mask)
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output)


def main() -> None:
    for name, source in HOME_MEDIA_SOURCES.items():
        export_cutout(source, OUTPUT_DIR / f"{name}.png")
    print(f"built {len(HOME_MEDIA_SOURCES)} home media files in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
