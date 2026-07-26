# Updating the résumé on the site

The site serves `SairamReddy-Resume.pdf` from this folder. To publish a new version:

1. Update `SairamReddy-Resume.docx` in the parent folder (`Sairam Portfolio/`).
2. In Word: **File → Save As → PDF**, save it here, overwriting
   `SairamReddy-Resume.pdf`. Keep the filename exactly the same — the site
   links to it by name, so nothing else needs changing.
3. Push:

```powershell
cd "C:\Users\saira\OneDrive\Desktop\Sairam Portfolio\abaasairam-ai.github.io"
git add -A
git commit -m "Update resume"
git push
```

The link appears in two places, both pointing at that one file:
- the "Résumé" button in the hero
- "Résumé (PDF)" in the footer

**Why PDF, not .docx** — a PDF opens in the browser on any device, keeps its
formatting, and can't be accidentally edited by whoever downloads it. A .docx
downloads as a file the reader has to open in Word, which loses you people.
