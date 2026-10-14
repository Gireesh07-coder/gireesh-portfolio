# Gireesh S Bhajantri — Portfolio

A responsive, dark-first portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Motion for React, and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

## Verify and build

```sh
npm run lint
npm run build
npm run preview
```

## Personalize content

- Update your social links, optional email, availability indicator, resume URL, skills, and achievement categories in `src/data/profile.ts`.
- Replace `YOUR_GMAIL_ADDRESS@gmail.com` in `src/data/profile.ts` with your real email address. The contact section and footer both use that one setting to create mailto links.
- Edit project copy, stack tags, repository URLs, and demo URLs in `src/data/projects.ts`. EduHub is listed first with its live demo; only HTML, CSS, and JavaScript are stated because those are the asset types observed on the deployed page. Bootstrap, Firebase, the source repository, and implementation details still need source verification.
- Brokerage Simulator is kept as an in-progress project. When ready, update its entry in `src/data/projects.ts` with verified implementation details and links; no Brokerage UI, features, or demo are currently claimed.
- Project previews are local CSS illustrations in `src/components/ProjectCard.tsx`; no project screenshots or source repositories were available in the workspace.
- The internship's date and responsibilities are intentionally left for you to confirm in `src/App.tsx`.
- The resume button opens the configured Google Drive link in a new tab. Replace `resumeUrl` in `src/data/profile.ts` if you update the shared Drive location.
- After replacing the email placeholder in `src/data/profile.ts`, the Contact section and footer use it for `mailto:` links.
- Set `availability.enabled` to `true` and provide a truthful `availability.label` only when you want to display an availability status.
- Add verified hackathon, certification, open-source, or coding milestones by editing `achievementCategories` in `src/data/profile.ts` and the achievement section in `src/App.tsx`.

The light/dark preference is saved in browser local storage. Theme colors, responsive layouts, and reduced-motion behavior are implemented in `src/index.css`.

## Deploy

Run `npm run build` and deploy the generated `dist/` directory to a static host such as Netlify or Vercel. The site is a client-rendered static app and does not require a backend. For GitHub Pages under a repository subpath, set Vite's `base` option in `vite.config.ts` to `/<repository-name>/` before building; use `/` for a custom domain or account-root site.
