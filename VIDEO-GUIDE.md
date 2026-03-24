# How to Add Demo Videos to the Website

Videos and their descriptions are driven by **`demos.json`**. When you load the website, the "Demo Videos & Previous Work" section is filled from that file.

---

## 1. Add your video files

**If you use Vite** (`npm run dev` / `npm run build`):

- Put demo videos in **`public/videos/`**, e.g.:
  - `public/videos/demo1.mp4`
  - `public/videos/table-scan.mp4`

**If you use another server** (e.g. Python) from the project root:

- Put videos in a **`videos`** folder next to `index.html` (e.g. `videos/demo1.mp4`).

Use **MP4 (H.264)** for best browser support.

---

## 2. Edit `demos.json`

**If you use Vite:** open **`public/demos.json`**.

**Otherwise:** open **`demos.json`** in the project root.

Add or edit entries. Each demo is an object with:

| Field         | Required | Description |
|---------------|----------|-------------|
| `title`       | Yes      | Short title shown above the video. |
| `description` | Yes      | One or two sentences describing the demo. |
| `videoUrl`    | Yes      | Path to your video file (e.g. `videos/demo1.mp4`) or a YouTube/Vimeo link. |
| `thumbnailUrl`| No       | Optional poster image for local MP4s (e.g. `videos/demo1-poster.jpg`). |

### Example – local video

Use paths relative to the site root (e.g. `videos/…`). With Vite, files in `public/videos/` are served at `/videos/…`.

```json
{
  "title": "Multi-table OCR demo",
  "description": "Simultaneous recognition across three tables with solver output.",
  "videoUrl": "videos/multi-table-demo.mp4",
  "thumbnailUrl": "videos/multi-table-poster.jpg"
}
```

### Example – YouTube

```json
{
  "title": "Poker OCR overview",
  "description": "Short overview of the system.",
  "videoUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
}
```

### Example – Vimeo

```json
{
  "title": "Hand history export",
  "description": "Export to solver-ready format.",
  "videoUrl": "https://vimeo.com/123456789"
}
```

---

## 3. Full `demos.json` example

```json
[
  {
    "title": "Poker table OCR – real-time recognition",
    "description": "Live demo of table scanning, stack and pot detection.",
    "videoUrl": "videos/demo1.mp4"
  },
  {
    "title": "YouTube demo",
    "description": "Overview on YouTube.",
    "videoUrl": "https://www.youtube.com/watch?v=abc123"
  }
]
```

---

## 4. See it on the site

- **Vite:** Run `npm run dev`; edit **`public/demos.json`** and add files to **`public/videos/`**. Refresh the page to see updates.
- **Other servers:** Run from the project root so `demos.json` and `videos/` are served. Don’t open `index.html` as `file://` for local videos.
- After saving `demos.json`, refresh the page; the "Demo Videos & Previous Work" section updates automatically.

---

## Summary

1. Put MP4s in a **`videos`** folder.
2. Edit **`demos.json`** with `title`, `description`, and `videoUrl` (file path or YouTube/Vimeo URL).
3. Serve the project with a local server and reload the page to see new demos.
