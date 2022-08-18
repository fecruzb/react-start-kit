# Overview

## Installation

```
npm install
```

## Run development environment

```
npm run dev
```

## Build for production

```
npm run build
```

## Start production version

```
npm start
```

# Concepts

## 1. Pages

### Regular pages

Pages can be created inside `/pages` and it will be ready to be accessed via browser using the file name:

- `index.js` for `/`
- `about.js` for `/about`
- `posts/[id].js` for `/posts/1` or `/posts/2` etc
- `posts/index.js` for `/posts`

### Document Page

Define the base file for the HTML structure to be use for every page.

- `_document.js`

### App Page

Define a base file for the App structure, to be used for every page, it uses `Layout` to around it to make sure its applied to all pages.

- `_app.js`

## 2. Components

- `Layout.js`: React component that wraps every page to make the layout/menu reusable.

## 3. Public

Static files like images, favicons, fonts, css or anything you want to just be copied to public root.
