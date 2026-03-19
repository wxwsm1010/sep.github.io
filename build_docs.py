from __future__ import annotations

import shutil
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
    "切片机总目录",
]

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
def write_nojekyll() -> None:
    (DOCS / ".nojekyll").write_text("", encoding="utf-8")


def main() -> None:
    reset_docs()
    copy_runtime_files()
    write_nojekyll()
    print(f"Built docs deployment directory at {DOCS}")


if __name__ == "__main__":
    main()
