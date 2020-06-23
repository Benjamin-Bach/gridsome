---
title: Animate SVG via JS
tags:
  - SVG
  - JS
  - ECV
teaser: Un premier <ul><li>un</li><li>deux</li></ul>article sur un "générateur d'animation svg", développé dans
  le cadre d'un workshop proposé à des étudiants en design afin de leur faire
  découvrir les animations svg...
subfolder: /
date: 2020-06-19T09:59:14.841Z
---
[GitHub Repo](https://github.com/Benjamin-Bach/ECVWorkShop-AnimateSVG)

# ECVWorkShop-AnimateSVG

![](/uploads/400x400.png)

This project is dedicated to serve as background during the ecv workshop (2020). It tends to facilitate the use of SVG animations, native or through CSS.

## How to use

Work with start.html, play with samples html files.

### SVG part

Declare an element svg in html file. Create a first path, rect, polygon or any shape and asign it an id.

```html
<rect id="myRect1" x="0" y="0" width="100" height="200" fill="red" />
```

Then, after this shape, create a g (group) element and asign it a data-name attribute. Inside this group, declare your first animation an set the begin attribute to indefinite. (You can use animateMotion too, see the sample-2.html)

```html
<rect id="myRect1" x="0" y="0" width="100" height="200" fill="red" />

<g data-name="step1">
  <animate
    xlink:href="#myRect1"
    attributeName="height"
    to="400"
    dur="3s"
    fill="freeze"
    begin="indefinite"
  />
</g>
```

The js script linked will automatically create a button and a new click event wich begin this animation. You can reitarate, each new group will generate a new button.

```html
<rect id="myRect1" x="0" y="0" width="100" height="200" fill="red" />

<g data-name="step1">
  <animate
    xlink:href="#myRect1"
    attributeName="height"
    to="400"
    dur="3s"
    fill="freeze"
    begin="indefinite"
  />
</g>

<g data-name="an other step">
  <animate
    xlink:href="#myRect1"
    attributeName="height"
    to="800"
    dur="1s"
    fill="freeze"
    begin="indefinite"
  />
</g>
```

You can declare several animation inside the same group, they all will be played on the click if begin attribute is set to indefinite.

```html
<rect id="myRect1" x="0" y="0" width="100" height="200" fill="red" />

<g data-name="step1">
  <animate
    xlink:href="#myRect1"
    attributeName="height"
    to="400"
    dur="3s"
    fill="freeze"
    begin="indefinite"
  />
</g>

<g data-name="an other step">
  <animate
    xlink:href="#myRect1"
    attributeName="height"
    to="800"
    dur="1s"
    fill="freeze"
    begin="indefinite"
  />
  <animate
    xlink:href="#myRect1"
    attributeName="width"
    to="300"
    dur="2s"
    fill="freeze"
    begin="indefinite"
  />
</g>
```

You can use multiple shapes and link animation to them.

```html
<rect id="myRect1" x="0" y="0" width="100" height="200" fill="red" />
<path id="myPath1" d="M 0, 0 L 0, 0 L 200, 300 L 100, 300 Z" stroke="purple" fill="transparent"/>

<g data-name="step1">
  <animate
    xlink:href="#myRect1"
    attributeName="height"
    to="400"
    dur="3s"
    fill="freeze"
    begin="indefinite"
  />
  <animate
    xlink:href="#myPath1"
    attributeName="d"
    to="M 50, 50 L 140, 80 L 250, 340 L 100, 300 Z"
    dur="3s"
    fill="freeze"
    begin="indefinite"
  />
</g>

<g data-name="an other step">
  <animate
    xlink:href="#myRect1"
    attributeName="height"
    to="800"
    dur="1s"
    fill="freeze"
    begin="indefinite"
  />
  <animate
    xlink:href="#myRect1"
    attributeName="width"
    to="300"
    dur="2s"
    fill="freeze"
    begin="indefinite"
  />
</g>
```

You can play with the begin attribute and sync your animation as your want.

```html
<rect id="myRect1" x="0" y="0" width="100" height="200" fill="red" />
<path id="myPath1" d="M 0, 0 L 0, 0 L 200, 300 L 100, 300 Z" stroke="purple" fill="transparent"/>

<g data-name="step1">
  <animate
    id="firstAnimRect"
    xlink:href="#myRect1"
    attributeName="height"
    to="400"
    dur="3s"
    fill="freeze"
    begin="indefinite"
  />
  <animate
    xlink:href="#myPath1"
    attributeName="d"
    to="M 50, 50 L 140, 80 L 250, 340 L 100, 300 Z"
    dur="3s"
    fill="freeze"
    begin="firstAnimRect.end + 2s"
  />
</g>

<g data-name="an other step">
  <animate
    id="secondAnimRect"
    xlink:href="#myRect1"
    attributeName="height"
    to="800"
    dur="4s"
    fill="freeze"
    begin="indefinite"
  />
  <animate
    xlink:href="#myRect1"
    attributeName="width"
    to="300"
    dur="2s"
    fill="freeze"
    begin="secondAnimRect.end - 500ms"
  />
</g>
```

### CSS part

Each click set the body class has data-name attribute animation value, so your can use CSS transition and animation too.

### JS part

You can use the animationBegin() and animationEnd() functions in app.js. They are callback functions which can use e, stepName, anim has argument. e is the click event, stepName is the name of the step played, anim is the animation object.