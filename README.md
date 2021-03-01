# Gatsby Starter: Mate

[![Build](https://github.com/EmaSuriano/gatsby-starter-mate/actions/workflows/build.yml/badge.svg)](https://github.com/EmaSuriano/gatsby-starter-mate/actions/workflows/build.yml)
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![Dependencies status](https://david-dm.org/EmaSuriano/gatsby-starter-mate.svg)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Ema-suriano/gatsby-starter-mate)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f532a32d-4fc1-441d-aa28-cdc5e2c2e79c/deploy-status)](https://app.netlify.com/sites/gatsby-starter-mate/deploys)

![Gatsby Starter Mate logo](./media/gatsby-starter-mate-logo.png)

> An accessible and fast portfolio starter for Gatsby integrated with Contentful CMS.

The target audience are Developers 💻 and Tech Writers ✍️.

### [Check the Demo ✨](https://gatsby-starter-mate.netlify.com/)

<a href="https://www.buymeacoffee.com/emasuriano" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Why? 🤔

In case you are looking for a quick setup portfolio or upgrade your current, you have to definitely try Mate!

This starter is totally content based on [Contentful](https://contentful.com), which is a headless CMS where you can write the content for your page. In summary, Contentful is the Model when Gatsby with React is the View.

At the same time, as this portfolio is written with Gatsby is extremely easy to add more than one source of data! For example, the demo comes with an integration of [Medium](https://medium.com) posts based on a user name ✌️

## Features 🛠

- [Gatsby](https://www.gatsbyjs.org/)
- [Rebass](https://rebassjs.org/): styled component system
- [React Awesome Reveal](https://github.com/dennismorello/react-awesome-reveal)
- Typescript
- CMS Integration with [Contentful](https://contentful.com)
- PWA ready
- SEO
- Responsive design
- Icons from [font-awesome](https://fontawesome.com/)
- [Netlify](https://www.netlify.com) Deployment Friendly
- Medium integration
- Social sharing (Twitter, Facebook, Google, LinkedIn)
- Google Analytics integration

## How to start ▶️

As this process needs more steps compared to other starters, I decided to made a tutorial video of how to set up your own instance of Mate. You can follow the video or jump directly to the written documentation.

<p align="center">
  <a href="https://www.youtube.com/watch?v=YviWsypJF9c">
   <img src="https://media.giphy.com/media/LQp2DrNPPUPybUwVx9/giphy.gif" alt="Watch the tutorial"/>
  </a>
</p>

If you never used Gatsby before, I highly recommend you to [Set up your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)!

To copy and install this starter run this command:

```bash
$ gatsby new mate-portfolio https://github.com/EmaSuriano/gatsby-starter-mate
```

At this point you have the repository download with all the dependencies installed, but if you try to start by running `yarn develop` you are going to received this message in the console:

```bash
  TypeError: Expected parameter accessToken
```

This is because you didn't specify from which `Contentful` space the portfolio will take the information. So the next step is create an empty space in [Contentful](https://www.contentful.com/)!

After the space is created, run the following command:

```bash
yarn setup
```

This CLI will request 3 values:

- `Space ID`
- `Content Delivery API - access token`
- `Personal Access Token`

These 3 values are inside the Settings section --> API keys.

After you provide them the CLI will automatically starts copying all the `Content models` and `Contents` from `mate-demo-contentful` to your space ✨

If everything went smooth you should see something like this in your terminal:

```text
Writing config file...
Config file /Users/my-user/Git/test/mate-portfolio/.env written
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
$ yarn start
```

## Screenshot and Design 🖼

As the starter is a SPA it only has two routes:

- `/`: main page with the sections of `Home`, `About me`, `Projects` and `Writing`.
- `/404`: error page for unexpected route.

| Section  |                 Screenshot                  |
| -------- | :-----------------------------------------: |
| Home     |   ![Home](media/screenshots/Landing.png)    |
| About me |  ![About me](media/screenshots/About.png)   |
| Projects | ![Projects](media/screenshots/Projects.png) |
| Writing  |  ![Writing](media/screenshots/Writing.png)  |
| 404      |      ![404](media/screenshots/404.png)      |

## Building your site 📦

As we are dealing with environment variables, the `.env` file is excluded from `.gitignore` file. Therefore, in order to deploy the website you have to send `SPACE_ID` and `ACCESS_TOKEN` with the `build` command.

```bash
SPACE_ID=xxxxx ACCESS_TOKEN=yyyyy yarn build
```

The result will be stored inside the `public` folder, so you can upload to your web host. I highly suggest using this starter with Netlify when you can define which command will build the project and also send the environment variables inside the website configuration.

## Adding your information 📝

All the text of this starter live inside Contentful, specifically inside the Content of `About`. In order to change it, just go to `Content` section and change the entity of About with the information you want.

![Contentful About change](./media/contentful-about-change.png)

Regarding the projects and social links the process is the same! Contentful is really easy to learn so don't be afraid of breaking everything, remember that you can restore to the start point by running `yarn setup` 😄

## Theming 🎨

Thanks to the Theme Shadowing, changing the colors of your portfolio is quite easy! You have to create a new file located at `src/gatsby-theme-mate/colors.json`.

```json
{
  "text": "#333333",
  "background": "#FFFFFF",
  "muted": "#f0e6f6",
  "primary": "#7c37ad",
  "secondary": "#ff4081"
}
```

![Original Schema](./media/theme-original.png)

### Teal Theme

```json
{
  "text": "#40514e",
  "background": "#FFFFFF",
  "muted": "#e4f9f5",
  "primary": "#11999e",
  "secondary": "#30e3ca"
}
```

![Teal Theme](./media/theme-teal.png)

### Dark Blue Theme

```json
{
  "text": "#e3e3e3",
  "background": "#1b262c",
  "muted": "#0f4c75",
  "primary": "#bbe1fa",
  "secondary": "#3282b8"
}
```

![Dark Theme](./media/theme-dark-blue.png)

Some examples I made by using palettes from [Color Hunt](https://colorhunt.co/):

## Customizing Icons (Optional) ⭐️

This project is using the icons from [Font Awesome](https://fontawesome.com/), with the implementation made by [fortawesome](https://fortawesome.com/). A good practice when dealing with icons is to load **only** the ones that the project is going to use.

Therefore not all the icons inside FA are loaded by default. In case you want to extend the icons used in your portfolio, you can create a file located at `src/gatsby-theme-mate/icons.js` with your icons. By default this is the content of the file:

```javascript
import {
  faMedium,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faEnvelope,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

export const ICONS = [
  faMedium,
  faTwitter,
  faGithub,
  faGlobe,
  faEnvelope,
  faCoffee,
];
```

Simply import the icons you want to use either `@fortawesome/free-brands-svg-icons` or `@fortawesome/free-solid-svg-icons` and export them inside the `ICONS` array. They get loaded as soon as the app starts.

## Tracking with Google Analytics (Optional) 📈

This starter has the analytics plugin inside the `gatsby-config`, so the only need to do in order to enable it is to provide the `Tracking Id` for your site (starts with `UA-`). Just set a new variable inside your `.env` file called `ANALYTICS_ID` and analytics will be turn on automatically 😄

## Contributing

In case you want to add your contribution into this project, please refer to the [Gatsby Theme repository](https://github.com/EmaSuriano/gatsby-theme-mate) so then everybody using this starter will be able to get the changes.
