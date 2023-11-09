# What is Next.js?

From the website:

```txt
Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
```

Project file structure

- You'll spend most of your time in the `pages/movies` and the `components` dir which will contain your movie listings react code.

How Next.js routing works

- Right now we'll focus on how pages are created in Next.js
  How tailwind works

&nbsp;

## Tailwindcss

Here's a [short explanation](https://tailwindcss.com/docs/utility-first) on how tailwindcss works.

- In short, tailwindcss creates utility classes that you can write right into your `html`.

With tailwindcss:

```html
<div
  class="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
>
  This is a small font text that changes size with the screen width.
</div>
```

CSS only:

```css
.large-font {
  font-size: 40px;
}
.small-font {
  font-size: 20px;
}

/* Larger screens (e.g., desktops or laptops) */
@media screen and (min-width: 1200px) {
  .large-font {
    font-size: 48px; /* Slightly larger font size for larger screens */
  }
  .small-font {
    font-size: 24px; /* Slightly larger font size for larger screens */
  }
}
```

```html
<h1 className="large-font">Text</h1>
<p className="small-font">Text</p>
```

## Heroicons

- Browse the icons at [heroicons.com](https://heroicons.com/)
- Find the documentation at [github.com/tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)

&nbsp;  
&nbsp;

### ...more on Next.js below

&nbsp;  
&nbsp;

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
