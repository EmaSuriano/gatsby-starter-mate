![Gastby Starter Mate logo](./media/gatsby-starter-mate-logo.svg)

WIP: Making the final changes to the codebase. version 1.0.0 will be released soon!

Gatsby v2 starter to create a top notch portfolio!

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
