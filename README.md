## Getting Started

First, run npm install:

```bash
npm run install
```

## Getting Started

Second, run the development server:

```bash
npm run dev
```

This should run 'hugo server' and have tailwind watch for any changes.

Open [http://localhost:1313](http://localhost:1313) with your browser to see the result.

## Adding a page

To add a new blog post run the following command below.

```bash
hugo new content posts/my-first-post.md
```

TODO List:
[x] - Git ignore .dist for tailwind and have pipelines run a build instead. (Currently we just commit directly)
[x] - Mobile responsive
[x] - Actually add real blog posts
[x] - Create / design a better look for the markup that wraps each blog post
