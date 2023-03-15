This is a [Next.js](https://nextjs.org/) project.
[MongoDB](https://www.mongodb.com) is used as a database.
[Tailwind](https://tailwindcss.com/) is used as a style framework.

## Getting Started

First, start the project run docker-compose inside the /docker directory. This command will start a Docker container using MongoDB as the database and making the initial seed of the data-seed.json file.

Second, run the development server in directory /app:

```bash

npm install
npm run  dev
# or
yarn dev
# or
pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

API routes can be accessed on [http://localhost:3000/api/jobs/get](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/[entity]/get.js`.
