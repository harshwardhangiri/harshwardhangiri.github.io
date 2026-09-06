# Your Website Handbook

A beginner's guide to running, editing, and deploying this site. No prior web
experience assumed. There's also a nicely formatted web version of this guide —
ask for the link if you don't have it.

Your whole site lives in one folder: `D:\Projects\website`. It's a **static
site** — just plain files a browser reads. Nothing to install, no database.

---

## 1. What your website is made of

| File / folder | What it does |
| --- | --- |
| `index.html` | The **content** — every word, heading, project, link. You edit this most. |
| `styles.css` | The **look** — colours, fonts, spacing, layout. |
| `img/` | Your **images** (arm photo + two project dashboards). |
| `Harshwardhan_Giri_Goswami_CV.pdf` | Your CV, opened by the *Curriculum Vitae* button. |
| `README.md`, `GUIDE.md` | Notes for you. They don't show on the site. |

**The one idea to remember: HTML is the words, CSS is the looks.** Want to change
what the page *says*? Edit `index.html`. Change how it *looks*? Edit `styles.css`.

**Edit with a code editor**, not Word. [VS Code](https://code.visualstudio.com/)
is free and standard — open the whole `website` folder in it. Windows Notepad
works in a pinch. Never use Microsoft Word or Google Docs (they add hidden
formatting that breaks the page).

---

## 2. See it on your own computer

Open a terminal (in VS Code: **Terminal → New Terminal**) and run:

```bash
cd "D:\Projects\website"
python -m http.server 8777
```

Then open **http://127.0.0.1:8777** in your browser. That's your site, running
privately. Press `Ctrl + C` in the terminal to stop it when done.

**The edit loop:** edit a file → **save** → **refresh** the browser (`Ctrl + R`).
This is all private — nobody sees it until you deploy (section 4).

---

## 3. Edit it — the common changes

All edits are in `index.html` unless noted. The trick: **find a block that looks
like what you want, copy it, change the words.** You rarely write from scratch.

### Change any wording
Find the text and type over it. Leave the surrounding `<tags>` alone — only change
the words between `>` and `</`.

### Change a link (GitHub, LinkedIn, email)
Links look like `href="..."`. Change the address inside the quotes:

```html
<a href="https://github.com/harshwardhangiri">GitHub</a>
        ^^^^^^ change the address        ^^ and the label
```

### Add a new Update (news item)
In `<ul class="update-list">`, copy one whole `<li class="update">…</li>` block,
paste it at the top, and change the year and text:

```html
<li class="update">
  <div class="update-when"><span class="update-year">2026</span></div>
  <div class="update-content">
    <h3>Your headline goes here</h3>
    <p>A sentence or two about what happened.</p>
  </div>
</li>
```

For the small tags, add right after the year:
`<span class="update-flag flag-next">Upcoming</span>` (blue) or
`<span class="update-flag flag-now">Ongoing</span>` (green).

### Add a new Project
In `<div class="project-grid">`, copy a whole `<article class="project-card">…
</article>` block — one *with* a picture, or one *without* (like the Audio card):

```html
<article class="project-card">
  <div class="project-media"><img src="img/my-photo.jpg" alt="describe the picture" /></div>
  <div class="project-body">
    <p class="project-meta">Category · 2026</p>
    <h3>Project name</h3>
    <p>What it does, in two or three sentences.</p>
    <p class="project-tech">Python · Tool · Tool</p>
    <a class="inline-link" href="https://github.com/...">View on GitHub →</a>
  </div>
</article>
```

### Add a project image
1. Put the image in the `img` folder (e.g. `img/my-photo.jpg`). Keep it under
   ~300 KB if you can.
2. Reference it with `<img src="img/my-photo.jpg" alt="..." />`.

**Filenames matter:** lowercase, no spaces, no brackets. `drone-test.jpg` is
good; `Drone Test (final).jpg` can break online.

### Swap your CV
Replace `Harshwardhan_Giri_Goswami_CV.pdf` with your new PDF, keeping the **exact
same filename**. No code change needed.

### Change the accent colour
In `styles.css`, at the very top:

```css
:root{
  --accent:#1d5b91;      /* main colour — e.g. #7a1f2b maroon, #1f5e3a green */
  --accent-dark:#16456e; /* a slightly darker shade for hovers */
}
```

---

## 4. Put it online (first time — you do this once)

You'll host on **GitHub Pages**: free, permanent, clean address
`harshwardhangiri.github.io`.

*Words you'll see:* **GitHub** stores code online. A **repository** ("repo") is
one project's folder on GitHub. **Git** is the tool that uploads your files.
**GitHub Pages** turns the repo into a live website.

**Step 1 — Create the repo.** Sign in at [github.com](https://github.com), go to
[github.com/new](https://github.com/new). Name it **exactly**
`harshwardhangiri.github.io` (this exact name gives the clean address). Set
**Public**. Do *not* add a README. Click **Create repository**.

**Step 2 — Send your files up.** In the terminal, in the `website` folder:

```bash
cd "D:\Projects\website"
git remote add origin https://github.com/harshwardhangiri/harshwardhangiri.github.io.git
git push -u origin main
```

A GitHub sign-in window pops up the first time — approve it (normal and safe).

**Step 3 — Visit it.** Wait ~1 minute, open **https://harshwardhangiri.github.io**.
It's live for anyone. Share the link freely.

> If it asks for a password instead of the browser pop-up: GitHub needs a
> **Personal Access Token**, not your account password. Create one at *GitHub →
> Settings → Developer settings → Personal access tokens* and paste it as the
> password.

---

## 5. Update the live site later

After setup, every change is the same rhythm: **save, commit, push.** From the
`website` folder:

```bash
git add -A
git commit -m "Updated my projects section"
git push
```

The live site updates within a minute. That's the whole routine, forever.

- `add` = "include my changes"
- `commit` = "save a labelled checkpoint on my computer"
- `push` = "upload it to GitHub, which publishes it"

**No terminal?** Edit on GitHub directly: open your repo in the browser, click a
file, click the pencil ✎ icon, edit, click **Commit changes**.

---

## 6. When something goes wrong

**Local preview looks unstyled (plain text).** You opened the file directly.
View it at http://127.0.0.1:8777 with `python -m http.server` running.

**A picture doesn't show.** Check: the file is in `img/`; the `src="img/..."`
matches the filename *exactly* (including capitals); no spaces/brackets in the name.

**Pushed but the live site didn't change.** Wait 1–2 min, then hard-refresh with
`Ctrl + Shift + R`. Still stuck? Check the repo's **Actions** tab for a green tick.

**`'python' is not recognized`.** Install Python from
[python.org](https://www.python.org/downloads/) and tick "Add Python to PATH".
(Only needed for local preview, not the live site.)

**Broke something, want to undo (before committing):**

```bash
git restore .
```

**Golden rule:** change one thing, refresh, confirm. Small steps beat big rewrites.

---

## 7. Command cheat-sheet

All run from inside `D:\Projects\website`:

```bash
# preview locally, then open http://127.0.0.1:8777
python -m http.server 8777

# publish your changes to the live site
git add -A
git commit -m "describe what you changed"
git push

# see what you've changed but not yet saved
git status

# throw away uncommitted changes
git restore .
```

Preview with `http.server`, publish with `add / commit / push`, edit by copying
existing blocks. That's the whole job.
