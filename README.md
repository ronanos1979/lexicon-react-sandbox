# Lexicon React Sandbox

## Starting
This is from a few of the steps on learning react from here: https://react.dev/learn

The markup syntax is called JSX. It is like HTML but stricter. E.g. have to have <br /> cannot just have open <br> like HTML

## Run this by running in the folder

```
npm run dev
```

For testing in a sandbox try something like this: https://codesandbox.io/p/sandbox/jvdjyr?file=%2Fsrc%2FApp.js%3A4%2C1


Read up on

arrow Functions in JS
slice in JS


### Todo
Learning React fundamentals:
- useState
- components
- list rendering
- API integration (planned)


Default file is below this..

## What to do

Phase 1: Core React Basics (1–2 days)

Build these as separate components:

Counter
Button increments/decrements
Learn: useState
Toggle
Show/hide text
Learn: conditional rendering
Input box
Type → show text live
Learn: controlled components
Phase 2: Lists + Real UI (2–3 days)

Now start shaping toward your domain:

Word List
Hardcoded list of words
Render with .map()
Add Word Form
Input + button → adds to list
Learn: state updates with arrays
Delete Word
Button next to each word
Learn: immutability
Phase 3: Simulate LexiconLair (3–5 days)

Now you're getting real value:

Dictionary Lookup UI
Input word
Fake API call (or real free API later)
Show definition
Loading + Error states
Learn: async + useEffect
Folder structure (keep it simple)
src/
  App.jsx
  components/
    Counter.jsx
    WordList.jsx
    AddWordForm.jsx

Don’t over-architect yet.

How this maps to your goal (this is key)

You’re not just “learning React.”

You are:

Building a frontend for LexiconLair
Creating something you can talk about in interviews
Showing full-stack thinking



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
