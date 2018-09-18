![Gatsby Starter Mate logo](./media/gatsby-starter-mate-logo.svg)

[![Greenkeeper badge](https://badges.greenkeeper.io/EmaSuriano/gatsby-starter-mate.svg)](https://greenkeeper.io/)
[![Travis badge](https://api.travis-ci.org/EmaSuriano/gatsby-starter-mate.svg)](https://travis-ci.org/EmaSuriano/gatsby-starter-mate)
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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
