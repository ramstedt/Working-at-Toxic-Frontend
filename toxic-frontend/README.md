This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Installation

cd in to the toxic-frontend folder and run:

```bash
npm install
```

Create a .env file in the root of toxic-frontend and copy the keys in env.example.
Visit [developer.themoviedb.org](https://developer.themoviedb.org) and sign up to generate your API keys.
Then run the project locally by running the command:

```bash
npm run dev
```

The project will launch at [http://localhost:3000](http://localhost:3000) per default.

## Time estimation

- Initial setup of framework: 10 minutes.
- Hook up the API to the framework and create the first fetches: 30-60 minutes.
- Search bar functionality: 1 hour.
- Landing page + styling: 45 minutes.
- TV show detailed page: 30 minutes.
- Testing and polish: 1 hour.
- Documentation: 30 minutes.

## Thought process

- I decided to go for the official API as it will be slightly more of a challenge where I can display my knowledge in how to handle external data and the usage of environment keys.
- I was tempted to use TypeScript but because of time constraints I opted for regular JavaScript instead.
- I was also tempted to use Tailwind but decided to go for module.css instead, to display my knowledge of Next.js as a framework.
- I got stuck on the sorting because I did not realise at first that the search feature of the API needed a title as a mandatory string, and could not handle dates. I really wanted to be able to sort by either name, language, or both. I eventually came up with a solution where I combined search and discover.

## Suggestions for future improvements

- Allow users to add shows to lists, such as "favourites" or "watch list", and allow users to write reviews on TV shows or even specific episodes. This could be implemented using a database to store data and logins.
- Image gallery for every show.
- Links to services where the user can watch the show.
