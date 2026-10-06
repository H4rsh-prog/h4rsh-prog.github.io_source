# Copilot Instructions for this repo

## Project context
This repository is a React portfolio/resume app bootstrapped with Create React App. The app uses Bootstrap, GSAP animation, and a component-first structure under `src/Components`.

## Working conventions
- Prefer small, focused changes that match the existing app structure.
- Keep components in the same style as the project: functional React components, hooks-based state/effects, and JSX with semicolons.
- Preserve the existing naming pattern: PascalCase component files and descriptive folder names like `Views/`, `Backdrop_Components/`, and `View_Components/`.
- Keep dependencies minimal; do not add new libraries unless there is a clear need.
- Preserve the current visual system and animation behavior unless the task explicitly requests a redesign.

## Code style
- Use JS/JSX with 4-space indentation.
- Prefer double quotes for strings in JSX/JS when that matches the current codebase.
- Keep inline styling patterns consistent with current component files when editing UI.
- Avoid heavy refactors unless the task specifically requires them.

## Project structure
- `src/App.js` is the app bootstrap and global provider setup.
- `src/Components/` holds reusable UI and scene pieces.
- `src/Components/Views/` contains page/section-level views.
- `public/` is for static assets such as HTML, manifest, and robots files.

## Validation
Before finishing work:
1. Run `npm test -- --watch=false` when a change affects behavior or UI logic.
2. Run `npm run build` for a production build sanity check.
3. Keep the app consistent with the existing CRA setup and avoid introducing custom build tooling.

## Execution notes
- Use `npm start` for local development.
- Use `npm run build` for production validation.
- If a task changes a view component, inspect the adjacent components in the same folder first to match the current pattern.
