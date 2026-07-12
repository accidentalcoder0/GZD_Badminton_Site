# GZD Badminton Club — Website

Official website for GZD Badminton Club, Manchester. Built as a fully static site (plain HTML and CSS, no JavaScript frameworks, no CMS) and hosted on GitHub Pages.

## Pages

| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Hero, announcements teaser, tournament teaser, sponsors, partners, location, Instagram feed |
| About | `about.html` | Club story, milestones, mission, organiser bio |
| Announcements | `announcements.html` | Full announcements list |
| Tournaments | `tournaments.html` | Upcoming tournament + past results |
| Leagues | `leagues.html` | League play info, play grades guide |
| Sponsors | `sponsors.html` | VP Racket Sports, Uplift Physio |
| Partnerships | `partnerships.html` | British Heart Foundation, Manchester ANC |
| Location | `location.html` | Current and seasonal venues with maps |
| Contact | `contact.html` | WhatsApp, Instagram, Email |

## Structure

```
/
├── index.html
├── about.html
├── announcements.html
├── tournaments.html
├── leagues.html
├── sponsors.html
├── partnerships.html
├── location.html
├── contact.html
├── css/
│   └── styles.css
└── assets/
    ├── GZD_Play_Grades_Guide.pdf
    └── images/
        ├── club-wordmark.png       — header logo (all pages)
        ├── club-badge.png          — footer logo + favicon (all pages)
        ├── VP_Logo_RS_Horizontal.png
        ├── Uplift_physio_logo.webp
        ├── BHF-logo-desktop.svg
        └── Manchester_ANC_logo.jpg
```

## Updating content

Everything is hand-written HTML. There is no CMS or database. To update content, edit the relevant `.html` file directly and push.

Common tasks:

- **New announcement** - add an `.announcement-card` block in `announcements.html` and update the teaser card in `index.html`
- **New tournament** - add a card to the Upcoming section in `tournaments.html` and mirror it in `index.html`; once the date passes, move it to Past Results and add the result
- **Registration opens** - in `tournaments.html`, swap the grey `<span>` button for an active `<a>` tag linking to the registration form
- **Location changes** - in `location.html`, move venue cards between "Where We Play Right Now" and "Other Venues" sections manually when the season changes
- **New sponsor/partner** - add a `.sponsor-card` block in `sponsors.html` or `partnerships.html` and add the logo to `assets/images/`
- **Contact info changes** - WhatsApp, Instagram, and email appear in the contact strip and footer on every page; search for the old value across all HTML files and replace

## Hosting

Hosted on GitHub Pages. The site is served from the `main` branch root.

To connect a custom domain once purchased:
1. Add a `CNAME` file to the repo root containing just the domain name (e.g. `gzdbadminton.co.uk`)
2. Add the required DNS records at the registrar (see the Domain Setup Guide)
3. Enable HTTPS in repo Settings - Pages

## Pending (waiting on organiser)

- Transparent VP Racket Sports logo
- Tournament result photos (to replace "Photos coming soon" placeholders in `tournaments.html`)
- British Heart Foundation and Manchester ANC partner details/blurbs
- Google Form link for Contact page query form (once created, add to `contact.html`)
- Elfsight Instagram widget monthly view limit - organiser to review if needed