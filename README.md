# Anna Portfolio — Vite + GitHub Pages

This project is prepared for deployment to GitHub Pages using GitHub Actions.

## Local setup

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

## Deploy on GitHub Pages

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to the `main` branch.
5. GitHub Actions will build and deploy the `dist` folder automatically.

## Important edits before publishing

- Replace `your.email@example.com` inside `src/Portfolio.tsx`.
- Replace the placeholder LinkedIn URL.
- Update the visible name `Anna K.` if needed.
- Review the legal text before publishing.

## Notes

- `base: './'` in `vite.config.ts` keeps assets working on GitHub Pages project sites.
- The page uses Tailwind via CDN in `index.html`.
