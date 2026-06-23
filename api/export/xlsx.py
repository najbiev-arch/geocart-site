from __future__ import annotations

import json
import sys
from datetime import date, datetime
from http.server import BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import quote


sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from smeta_core import clean_filename, create_xlsx  # noqa: E402


class handler(BaseHTTPRequestHandler):
    def do_POST(self) -> None:
        try:
            length = int(self.headers.get("Content-Length") or 0)
            payload = json.loads(self.rfile.read(length).decode("utf-8") or "{}")
            meta = payload.setdefault("meta", {})
            if not meta.get("date"):
                meta["date"] = date.today().isoformat()

            body = create_xlsx(payload)
            base_name = clean_filename(meta.get("estimateNo") or "smeta")
            stamp = datetime.now().strftime("%Y%m%d_%H%M")
            filename = quote(f"{base_name}_{stamp}.xlsx")

            self.send_response(200)
            self.send_header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Content-Disposition", f"attachment; filename*=UTF-8''{filename}")
            self.end_headers()
            self.wfile.write(body)
        except Exception as exc:
            body = json.dumps({"error": str(exc)}, ensure_ascii=False).encode("utf-8")
            self.send_response(500)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
