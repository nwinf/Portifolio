# Portfolio

A one-page personal portfolio. **Everything the page says comes from one file:
[`data/content.json`](data/content.json).** The HTML, CSS and JavaScript never need
to change when you want to ipdate job status, project and etc.

```
data/content.json   <- all text, jobs, projects, links  (edit this)
assets/             <- photos
index.html          <- page layout (no personal text inside)
css/style.css       <- design
js/script.js        <- loads content.json and renders it
.pages.yml          <- settings for the form editor (Pages CMS)
```

---

## Option 1 : Edit with forms in the browser (easiest)

[Pages CMS](https://pagescms.org) is a free editor that reads `.pages.yml` and gives you
forms for every section — no JSON to type.

**One-time setup**
1. Go to <https://app.pagescms.org> and **Sign in with GitHub**.
2. Allow it access to this repository.
3. Open the repository → **Portfolio content**.

**Every time after that**
1. Open **Experience (jobs)** → **Add an entry**, fill in period, title, organisation, bullets, tags.
   Drag it to the top so the newest job is first.
2. Change the old job's badge from `Current` to empty, and update the hero text/facts if needed.
3. Press **Save**. It commits to GitHub and the live site updates within about a minute.

Projects, certifications, skills, contact links and the profile photo work the same way.
To change the photo, use the image field, it uploads to `assets/`.

## Option 2 : Edit the JSON directly on GitHub

1. Open `data/content.json` on GitHub and click the pencil (✏️) icon.
2. Copy an existing entry, paste it, and change the text. Example, a new job at the top of `experience.items`:

```json
"items": [
  {
    "period": "Jan 2027 - Present",
    "role": "Software Engineer",
    "org": "Company Name, Dar es Salaam",
    "badge": "Current",
    "bullets": [
      "What you built or improved.",
      "Another achievement."
    ],
    "tags": ["Python", "Django"]
  },
  { "period": "Oct 2025 - Dec 2026", "role": "Software Developer", "...": "older job continues here" }
]
```

3. Click **Commit changes**.

**JSON rules that catch people out:** every item in a list is separated by a comma, but there is
**no comma after the last one**; all text goes in `"double quotes"`. If the page shows
*"Content could not be loaded"* after an edit, there is a typo, paste the file into
<https://jsonlint.com> to find the line.

## Hiding a section

Empty a section's list and it disappears from the page **and** the menu. For example
`"systems": { ..., "items": [] }` hides "Current systems".
Leave `"phone": ""` empty to hide the phone number.

## Option 3 : Use this portfolio for another person

1. On GitHub click **Fork** (or *Use this template*) to make a copy under their account.
2. Replace `assets/profile-cutout.png` with their photo (or upload a new file and set `hero.photo`).
3. Replace the contents of `data/content.json` with their details or, after step 1, sign in to
   Pages CMS with their GitHub and fill in the forms.
4. Delete `google0bda5fbb4f7cbbfa.html` and the `google-site-verification` meta tag in
   `index.html`, those belong to the original owner's Google Search Console.
5. Repository **Settings → Pages → Deploy from branch → main / root**. The site will be at
   `https://<username>.github.io/<repo-name>/`.

## Previewing on your own computer

Browsers block loading `content.json` when you double-click `index.html`. Start a tiny server
in the project folder instead:

```bash
python -m http.server 8000
```

then open <http://localhost:8000>.
