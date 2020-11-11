# A simple implementation of a PDF generation with HTML.

This repo shows a application thats generate and send back a buffer of PDF.
The app uses handlebars to make a HTML from template.

#### How to use

1. Clone this repo

2. Download the dependencies

```
npm install
or 
yarn add
```
3. Start with 
```
npm run start
or
yarn start
```

You can change the Model and the template, and I think it will works properly.
[See here to know how to build a template engine](https://handlebarsjs.com/guide/)

### Important

>I choosed the pupperteer beacuse this lib can convert the flex box properties.
>In the HTMl template, you have to add the next atribute into styles, otherwise
>the pupperteer will not render some styles.
```css
  html {
      -webkit-print-color-adjust: exact;
    }
```
