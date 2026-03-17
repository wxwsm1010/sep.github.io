from __future__ import annotations

import shutil
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
DOCS = ROOT / "docs"

FILES = [
    "index.html",
    "styles.css",
    "script.js",
    "content.js",
    "admin.html",
    "admin.css",
    "admin.js",
    "page.html",
    "page.css",
    "page.js",
    "products.html",
    "products.css",
    "products.js",
    "product-detail.html",
    "product-detail.css",
    "product-detail.js",
    "product-catalog.js",
]

DIRS = [
    "home_media",
    "scene_media",
    "brochure_pages",
    "pdf_pages",
]

CATALOG_FILE = ROOT / "product-catalog.js"
CATALOG_ASSET_DIR = ROOT / "切片机总目录"


def reset_docs() -> None:
    if DOCS.exists():
        shutil.rmtree(DOCS)
    DOCS.mkdir(parents=True, exist_ok=True)


def copy_runtime_files() -> None:
    for rel in FILES:
        source = ROOT / rel
        target = DOCS / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)

    for rel in DIRS:
        source = ROOT / rel
        target = DOCS / rel
        shutil.copytree(source, target, ignore=shutil.ignore_patterns(".DS_Store", ".WeDrive"))


def copy_catalog_assets() -> None:
    text = CATALOG_FILE.read_text(encoding="utf-8")
    folders = re.findall(r'folder:\s*"\./切片机总目录/([^"]+)"', text)
    images = re.findall(r'"([^"]+\.png)"', text)

    for folder in folders:
        source_folder = CATALOG_ASSET_DIR / folder
        target_folder = DOCS / "切片机总目录" / folder
        target_folder.mkdir(parents=True, exist_ok=True)
        for image in images:
            source_image = source_folder / image
            if source_image.exists():
                shutil.copy2(source_image, target_folder / image)


def write_nojekyll() -> None:
    (DOCS / ".nojekyll").write_text("", encoding="utf-8")


def main() -> None:
    reset_docs()
    copy_runtime_files()
    copy_catalog_assets()
    write_nojekyll()
    print(f"Built docs deployment directory at {DOCS}")


if __name__ == "__main__":
    main()
