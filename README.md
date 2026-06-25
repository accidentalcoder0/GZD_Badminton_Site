# Smash City Badminton Club — Website

This is a fully static site: plain HTML and CSS, no JavaScript, no Google Sheets, no CMS. Every piece of content lives directly in the HTML files. Updating anything means editing the relevant file by hand and redeploying — there's no self-service path for the organiser; all changes go through whoever maintains the code.

## What's here
```
/
├── index.html              — homepage
├── about.html              — club story, mission, organiser
├── announcements.html      — full announcements list
├── tournaments.html        — upcoming + past tournaments (manually maintained)
├── sponsors.html           — sponsors grouped by tier
├── location.html           — venue details + map(s)
├── contact.html            — direct contact links + optional embedded form
├── README.md
├── css/
│   └── styles.css          — all styling
└── assets/
    └── images/             — logos, sponsor images, gallery photos go here
```

## How to update content
There's no data layer — every page is hand-written HTML. To change something:

- **Announcements**: edit the `.announcement-card` blocks in `index.html` (teaser) and `announcements.html` (full list). Add or remove a card by copying the existing block structure.
- **Tournaments**: edit `tournaments.html`. When a tournament's date passes, manually cut its card from the "Upcoming Tournaments" section and paste it into "Past Results," adding the result text. No automatic logic does this for you.
- **Sponsors**: edit `sponsors.html`. Each tier is a `<div class="sponsor-tier">` block containing a `<div class="sponsor-grid">` of `.sponsor-card` entries.
- **Location**: edit `location.html`. If the club plays at different venues across the year, manually move venue cards between "Where We Play Right Now" and "Other Venues" when the season changes.
- **About**: edit `about.html` directly — story, mission, and organiser bio are plain paragraphs.
- **Contact info (WhatsApp/Instagram/Email)**: this is the one thing repeated across *every* page (top contact strip + footer on all 7 pages, plus the contact cards on `contact.html`). If this changes, it needs to be updated in all of those places — there's no single source of truth for it in this static setup.

## Images
Drop logo/sponsor/gallery images into `assets/images/`, then reference them with a relative path (e.g. `assets/images/sponsor-logo.png`) in the relevant `<img>` tag, replacing the dashed `.sponsor-slot` placeholder divs.

**Currently wired in:**
- `assets/images/club-wordmark.png` — header logo (every page)
- `assets/images/club-badge.png` — footer logo (every page) + browser tab favicon
- `assets/images/VP_Logo_RS_Horizontal.png` — sponsor logo (homepage strip + Sponsors page)

If any of these filenames change, update the corresponding `<img src="...">` references across all 7 HTML files (search for the filename to find every occurrence).

## Instagram feed (homepage)
There's a placeholder section on the homepage (`<div id="instagram-feed-embed">`) ready for a live Instagram feed widget. Instagram itself only allows embedding single posts one at a time — to show a live, auto-updating feed of recent posts, use a free third-party widget:
- **Elfsight**, **LightWidget**, or **SociableKIT** all offer free tiers
- Sign up, connect the club's public Instagram account (may require a one-time login if it's a Business/Creator account), and copy the embed snippet they give you
- Paste that snippet directly inside the `<div id="instagram-feed-embed">` in `index.html`, replacing the placeholder `<p>`

This widget connection is a one-time setup and isn't affected by the rest of the site being static — once connected, the feed itself updates automatically as new posts go up.

## Contact form (Contact page)
There's a button placeholder (`<div id="contact-form-wrap">` in `contact.html`) that opens a Google Form in a new tab. Once the form exists, replace the `href="#"` on that button with the real form link.

## Hosting
Push this folder to a GitHub repo, enable GitHub Pages, then add a `CNAME` file with the custom domain once it's purchased and point the registrar's DNS at GitHub Pages.