"""Temporäre Sichtung der ausgewerteten PDF-Quellen."""
from pathlib import Path
import runpy
if __name__ == "__main__":
    runpy.run_path(str(Path(__file__).resolve().parent / "migration/fetch-pdf-sources.py"), run_name="__main__")
