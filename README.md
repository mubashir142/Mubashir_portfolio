# Muhammad Mubashir — Portfolio

A React, TypeScript, and Vite portfolio site.

## Run locally

```sh
npm install
npm run dev
```

## Build for production

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel

This project is configured for Vercel in `vercel.json`.

1. Push this project directory to a GitHub repository.
2. In [Vercel](https://vercel.com/), choose **Add New → Project** and import the repository.
3. If Vercel asks for a Root Directory, choose the folder containing this `package.json` (the `app` folder if you pushed the parent directory).
4. Keep the detected Vite settings: install with `npm install`, build with `npm run build`, and output from `dist`.
5. Select **Deploy**. Future pushes to the connected branch will deploy automatically.

Alternatively, from this directory, run `npx vercel` and follow the prompts to log in and deploy. Run `npx vercel --prod` when ready to publish a production deployment.
