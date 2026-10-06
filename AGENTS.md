# AGENTS.md

## Repository overview
This repo is a React portfolio/resume application built with Create React App. It uses Bootstrap, GSAP, and component-based sections for the user interface.

## Commands
- Start locally: `npm start`
- Run tests: `npm test -- --watch=false`
- Production build: `npm run build`

## Architecture
- `src/App.js` is the top-level app bootstrap and global context setup.
- `src/Components/` contains reusable UI and animation building blocks.
- `src/Components/Views/` contains the section-level pages/views.
- `public/` stores static site files.

## Editing expectations
- Match the current project style: functional React components, hook-based state/effects, and 4-space indentation.
- Keep changes minimal and consistent with the existing component structure.
- Use the current naming conventions: `PascalCase` for files and descriptive directory names.
- Do not add new frameworks or build systems unless the task clearly requires them.

## Quality bar
- Prefer changes that preserve the portfolio app’s current visual identity and animations.
- Validate behavior with the test runner when modifying logic.
- Run `npm run build` before considering work complete.
