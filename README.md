# Funny Calendar

Generate a calendar with JavaScript then style it with CSS. Why would we stop here?

When you will work on the frontend side of a project (coding for the browsers), you will work with (UI/UX) designers. In many cases you have to understand their logic even when they just leave a `jpg` image for you. This project's goal is to get familiar with designers logics and also, to use css as a creative tool. There is no exact end of the project, just practice flex and grid and unleash your creativity.

## What are you going to learn?

- JS: using for loops
- JS: dom manipulations
- JS: event basics
- CSS Flex and Grid

## Tasks

### Create a calendar with JS

There is a data.js file (linked into index.html as well as the script.js) which contains an array (in the months variable).

Also, there are two functions `monthComponent` and `dayComponent` in the script.js file.
In the `loadEvent` function, render the months into the div with root id with the `monthComponent` function and render the days into the months with the `dayComponent` function.

It means that you'll have 12 `<section>` elements (with `month` class name) and all the sections will contain as much `<div>` elements (with `day` class name) as the month have. (e.g.: January have 31 days)

In the starter code there is an example how can you add 31st of January:

```javascript
rootElement.insertAdjacentHTML("beforeend", monthComponent("January", "jan", 31));
```

You have to update the `dayComponent` functuuion to return not just one but as much `<div>` elements (with `day` class name) as the `day` parameter.
Also, you have to update the `loadEvent` function to generate the twelve months.

1. The html document's `<body>` element contains only a `<div id="root"></div>` element. All the other HTML is added with JavaScript.
1. The (data.js file) `months` array's objects are used to render the months of a year with the `monthComponent` function.
1. The (data.js file `months` array's objects') `days` key's value is used to render the days of a month)with the `dayComponent` function.

### Create a nice UI

Use [Poppins font from Google fonts](https://fonts.google.com/specimen/Poppins) for the texts, the [Design System](https://www.behance.net/gallery/144097609/Design-System) project (from Behance) colours for the background and text colours, and the [Female Faces](https://www.behance.net/gallery/143657541/Female-Faces) project's (also from Behance) `SELECTED MOVIES` section for the visual structure.

Style it with CSS without adding more class names or ids to the HTML elements.

1. The Poppins font from Google Fonts is added to the index.html's `<head>` and to the style.css's `body` selector.
1. The Design System (Behance) project's colours used for the month `<section>`s background colours.
1. The Female Faces (Behance) project `SELECTED MOVIES` part's visual structure is used for the projects basic visual structure.

### Here comes the fun part

Read carefully about media queries and also about flexbox and grid then change the layout of every month. You can change the size and the order of the cards but not the basic style (color, fonts).

1. Every month `<section>` have different display and media query settings and ranges.
1. 6 month `<section>` have grid as display settings but all of them are styled differently. Put grid related CSS properties to the grid container element (the month section) and to the grid item elements (the day cards).
1. 5 month `<section>` have `flex` as display settings but all of them are styled differently. Put flex related CSS properties to the flex container element (the month section) and to the flex item elements (the day cards).
1. 1 month `<section>` remains block element and its day card children elements displayed as `inline-block`s but media queries used on this ones as well.

### Who laughs last, laughs best

Add a click event to all the `<div>`s with `day` class name. They should change when by click triggered on them. (eg. rotate around itself or it shows the day's name eg. Monday)

1. Clicking on a card is changing the card's look.
1. Just class name or DOM manipulation is happening in JavaScript. (No CSS styling is used in the javascript part.)

## Hints

- You don't need Live Server (or other running extensions) for this project, you can use the `node backend/server.js` command from the terminal. (The frontend folder contains all the files you should check/use.)
- After running `node backend/server.js` visit the `http://127.0.0.1:9000` to see the page.
- There is a `reset.css` file in the frontend folder as well. It's reseting all the browsers preconfigured css styles.
- There is a `data.js` file and a `script.js` file added to the `index.html` file's head tag. The first one contains the `months` variable. Because in the head of the html file the `data.js` is the first one, the following `script.js` file will see the content of this file (which is the `months` variable in this case). It is similar if you'd put this variable to the top of the `script.js` file.

## Background Materials

- [Poppins font](https://fonts.google.com/specimen/Poppins)
- [Behance: Design System Project](https://www.behance.net/gallery/144097609/Design-System)
- [Behance: Female Faces](https://www.behance.net/gallery/143657541/Female-Faces)
- [CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [CSS box-sizing property](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [CSS Layouts](https://web.archive.org/web/20210128103711/https://learnlayout.com/)
- [CSS flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [CSS Media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
- [JS DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [JS Click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- [JS Loops - you should focus on the For/For of loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
