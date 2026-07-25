# abaasairam-ai.github.io

Personal portfolio site — live at **https://abaasairam-ai.github.io**

Static HTML, no build step, no framework. Served by GitHub Pages.

```
index.html                        the site
universal-chunker/chunker.html    live demo — drag-and-drop document chunker
.nojekyll                         serve files as-is, skip Jekyll processing
```

## Updating it

Edit the file, then:

```bash
git add -A
git commit -m "update"
git push
```

Changes appear in under a minute.

## Note on the tools

Anything under a tool folder runs **entirely in the visitor's browser** — no
uploads, no backend. Files dropped into the chunker never leave the machine
they're opened on. That's deliberate: these are meant to be usable on real
documents without a privacy conversation first.
