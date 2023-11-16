# What is Next.js?

> ⚠️ Warning - This project requires Node version 18.7 or greater.

From [nextjs.org/](https://nextjs.org/):

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.

Project file structure

- You'll spend most of your time in the `pages/movies` and the `components` dir which will contain your movie listings react code.
- You're also going to use the Nextjs Image component. There's an example of it in the movies file. Here's a [https://nextjs.org/docs/pages/api-reference/components/image](link) to the documentation for it as well.

How Next.js routing works

- Right now we'll focus on how pages are created in Next.js
  How tailwind works

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to clone the repository using codespaces

Click the "Code" dropdown button (usually green, located near the top right of the repository page).
In the dropdown, you'll see an option for "Open with Codespaces." Click on it.
Create a New Codespace:

If no Codespaces have been created for this repository in your account, you'll have the option to create a new one.
Click on “New codespace” at the bottom of the panel.
This will start the process of creating a cloud-based development environment for that repository.
Configure the Codespace (if necessary):

Depending on the repository, you might have options to configure the Codespace, like selecting the branch, machine type, or configuration settings.
After configuration, GitHub will set up the environment, which can take a few moments.
Access the Codespace:

Once set up, you'll be taken to a VS Code-like environment in your browser, loaded with the repository's code.
You can now edit, run, and commit changes to the repository directly from this environment.
Working with the Repository:

You can work with the repository as if it was cloned on your local machine. Any changes you make can be committed and pushed back to the repository on GitHub.
