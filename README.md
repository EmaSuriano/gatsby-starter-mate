![Gatsby Starter Mate logo](./media/gatsby-starter-mate-logo.svg)

[![Greenkeeper badge](https://badges.greenkeeper.io/EmaSuriano/gatsby-starter-mate.svg)](https://greenkeeper.io/)
[![Travis badge](https://api.travis-ci.org/EmaSuriano/gatsby-starter-mate.svg)](https://travis-ci.org/EmaSuriano/gatsby-starter-mate)
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/c8fc076b30bd493f0cfc/maintainability)](https://codeclimate.com/github/EmaSuriano/gatsby-starter-mate/maintainability)

** This starter is not ready for production yet, I'm still making some changes to the codebase ⚠️ **

If you want to keep updated, please follow me on Twitter @emasuriano.

# Gatsby Starter Portfolio: Mate

A portfolio starter for Gatsby. The target audience are developers and tech writers.

[Demo Website](https://github.com/EmaSuriano/gatsby-starter-mate)

## Why?

In case you are looking for a quick setup portfolio or upgrade your current, you have to definitely try Mate!

This starter is totally content based on [Contentful](https://contentful.com), which is basically a headless CMS where we can write the content for our page. In summary, Contentful is our Model when Gatsby with React is our View.

At the same, as this portfolio is written with Gatsby is extremely easy to add more than one source of data! For example, the demo comes with an integration of [Medium](https://medium.com) posts based on a user name.

Follow the structure of this starter! --> https://github.com/LeKoArts/gatsby-starter-portfolio-cara

## Features

- Gatsby V2
- Rebass (Styled components)
- react-reveal
- Contentful

## How to start

```bash
$ npm install gatsby-cli -g
$ gatsby new mate-portofolio https://github.com/EmaSuriano/gatsby-starter-mate
```

At this point you have the repository download with all the dependencies installed, but if you try to start by running `yarn develop` you are going to received this message in the console:

```bash
  TypeError: Expected parameter accessToken
```

This is because you didn't specify from which `Contentful` space the portfolio will take the information. So the next step is create a space in [Contentful](https://www.contentful.com/)!

After that you have to Settings --> API keys. Here you will find `Space ID` and `Content Delivery API - access token` in the `Content delivery / preview tokens`, both are really important for the next step. Also we need to create a `Personal Access Token` (which is in the tab of `Content management tokens`) and copy the access token, _save it somewhere else because you are able to see it once_.
Now we run the following command:

```bash
yarn setup
```

This CLI will request for these 3 values, and automatically starts copying all the `Content models` and `Contents` from `mate-demo-contentful`. Also, it creates a `.env` file which wil have the credentials as input for `gatsby-node.js`. For privacy reason this file is excluded from the repository, so in case you want to deploy it later you should add it as environment variables.

If everything went smooth you should see something like this in your terminal:

```text
➜  mate-portofolio yarn setup
$ node ./bin/setup.js

  To set up this project you need to provide your Space ID
  and the belonging API access tokens.
  You can find all the needed information in your Contentful space under:
  app.contentful.com -> Space Settings -> API keys
  The Content Management API Token
    will be used to import and write data to your space.
  The Content Delivery API Token
    will be used to ship published production-ready content in your Gatsby app.
  The Content Preview API Token
    will be used to show not published data in your development environment.
  Ready? Let's do it! 🎉

? Your Space ID YOUR_SPACE_ID
? Your Content Management API access token YOUR_CONTENT_MANAGEMENT_ID
? Your Content Delivery API access token YOUR_ACCESS_TOKEN
Writing config file...
Config file /Users/emanuelsuriano/Git/test/mate-portofolio/.env written
┌──────────────────────────────────────────────────┐
│ The following entities are going to be imported: │
├─────────────────────────────────┬────────────────┤
│ Content Types                   │ 3              │
├─────────────────────────────────┼────────────────┤
│ Editor Interfaces               │ 3              │
├─────────────────────────────────┼────────────────┤
│ Entries                         │ 8              │
├─────────────────────────────────┼────────────────┤
│ Assets                          │ 6              │
├─────────────────────────────────┼────────────────┤
│ Locales                         │ 1              │
├─────────────────────────────────┼────────────────┤
│ Webhooks                        │ 0              │
└─────────────────────────────────┴────────────────┘
 ✔ Validating content-file
 ✔ Initialize client (1s)
 ✔ Checking if destination space already has any content and retrieving it (2s)
 ✔ Apply transformations to source data (1s)
 ✔ Push content to destination space
   ✔ Connecting to space (1s)
   ✔ Importing Locales (1s)
   ✔ Importing Content Types (4s)
   ✔ Publishing Content Types (3s)
   ✔ Importing Editor Interfaces (3s)
   ✔ Importing Assets (7s)
   ✔ Publishing Assets (3s)
   ✔ Archiving Assets (1s)
   ✔ Importing Content Entries (1s)
   ✔ Publishing Content Entries (5s)
   ✔ Archiving Entries (1s)
   ✔ Creating Web Hooks (0s)
Finished importing all data
```

After this step we can finally run the project and see the result in http://localhost:8000/ 😃

```bash
yarn develop
```

![Landing mate page](./media/home.png)

This is the basic setup, afterwards this I'll explain how to customize the content or add more sections.

## Understanding Component Structure

Mate starter is a SPA so routing is not needed (except for 404 error). The structure for the main page is the following:

```javascript
<Layout>
  <Header />
  <Landing />
  <About />
  <Projects />
  <Writing />
  <Footer />
</Layout>
```

Basically Layout will set the theme for the application and a few general styles.

## Adding section to the starter with navigation

By default the starter comes with 4 sections: Landing, About, Projects and Writing. You can find them on `sections` folder. Basically all of them are rendering a `Section`.

In case you want to add the new section and also a navigation link in the Header, just wrapped it with `withNavigation` and when your section is going to be mounted it will automatically register a new RouteLink in the Header.
