from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter


ROOT = Path("/Users/wmh/Documents/新网页1/切片机总目录")
WHITE_THRESHOLD = 238
SOFT_THRESHOLD = 222
MAX_DIFF = 22


def is_near_white(pixel: tuple[int, int, int], threshold: int) -> bool:
    r, g, b = pixel
    return min(r, g, b) >= threshold and max(r, g, b) - min(r, g, b) <= MAX_DIFF


def remove_white_background(path: Path) -> Path:
    image = Image.open(path).convert("RGBA")
    width, height = image.size
    pixels = image.load()

    background = [[False] * width for _ in range(height)]
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if background[y][x]:
            continue

        rgb = pixels[x, y][:3]
        if not is_near_white(rgb, WHITE_THRESHOLD):
            continue

        background[y][x] = True

        if x > 0:
            queue.append((x - 1, y))
        if x < width - 1:
            queue.append((x + 1, y))
        if y > 0:
            queue.append((x, y - 1))
        if y < height - 1:
            queue.append((x, y + 1))

    alpha = Image.new("L", (width, height), 255)
    alpha_pixels = alpha.load()

    for y in range(height):
        for x in range(width):
            if background[y][x]:
                alpha_pixels[x, y] = 0
                continue

            rgb = pixels[x, y][:3]
            if is_near_white(rgb, SOFT_THRESHOLD):
                distance = 255 - min(rgb)
                alpha_pixels[x, y] = max(36, min(255, int(distance * 5.6)))

    alpha = alpha.filter(ImageFilter.GaussianBlur(radius=0.7))
    image.putalpha(alpha)

    output_path = path.with_suffix(".png")
    image.save(output_path)
    return output_path


def main() -> None:
    outputs = []
    for path in sorted(ROOT.rglob("*.jpg")):
        if path.name.startswith("."):
            continue
        outputs.append(remove_white_background(path))

    print(f"converted {len(outputs)} files")
    for output in outputs:
        print(output)


if __name__ == "__main__":
    main()
