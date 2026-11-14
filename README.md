# Subtle Art Companion

An unofficial visual companion to *The Subtle Art of Not Giving a F\*ck* by Mark Manson: every big idea as one drawing with a short caption, so a quick scroll brings the book back. Not affiliated with the author or publisher.

Live at https://subtleart.bittobyte.qzz.io

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173 (or double-click `DEV.bat`). Links like `#ch03` go straight to a chapter; `#saved` opens the visuals you saved.

## Where things live

- `src/data/chapters.ts`: the chapters and, for each, its list of visuals (name, caption, text alternative)
- `src/visuals/kit/`: the shared drawing parts (`Svg`, `Arrow`, `Label`, `Block`), the frame around a drawing (`Figure`) and their styles
- `src/visuals/ch01/` and so on: one component per drawing
- `src/lib/`: the localStorage stores (progress, saved visuals) and the hash routing
- `src/styles/tokens.css`: colours, fonts and the type scale
- `_v1/`: the earlier notes version, kept for reference. It is not built or shipped.

## Drawing rules

- Canvas of 400 by 300 units, lines 6 units thick, square ends, flat fills.
- Three tones: off-white for the drawing, grey for what does not matter, orange for the one point.
- A caption is 20 words at most. If an idea needs more, redraw it.
- Every drawing has a name and a description for people who cannot see it.

## Your data

Progress and saved visuals are kept in this browser only (`localStorage`).
