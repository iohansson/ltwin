## Note

Hi! Had quite a bit of fun with the challenge. Thought about trying out [Astro](https://astro.build) but then changed my mind and went with the new Nuxt. It's my first time with Nuxt 3 ;)

Spent a bit more time to add some nice things. So now this app has a view switcher (table/grid), a theme switcher (dark/light), and a pagination.

Deployed it to Netlify as well but something went wrong with the production build, don't have time to debug Nuxt right now, sorry. I hope running the dev server to look at the app would suffice. You'll need a [Protocols](https://apidoc.protocols.io/#authentication) access token though :( There's a `.env.local.default` file in the repo, just rename it to .`env.local` and insert your token there.

I might dig into what went wrong with the production build meanwhile, so if you feel lazy about getting the access token, you might wanna wait until I fix the deployed version.

Tell me what you think :)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn run dev
```

## Production

Build the application for production:

```bash
yarn run build
```

Locally preview production build:

```bash
yarn run preview
```

