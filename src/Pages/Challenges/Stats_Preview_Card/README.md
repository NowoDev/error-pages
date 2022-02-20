# Frontend Mentor - Stats preview card component solution

This is a solution to
the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62)
. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Image](../../../assets/screenshots/stats-card.png)
![Image](../../../assets/screenshots/stats-card-1.png)

### Links

- [Solution URL](https://github.com/nowodev/pages/tree/main/src/Pages/Challenges/Stats_Preview_Card)
- [Live Site URL](https://pages-nowodev.netlify.app/challenges/stats)

## My process

### Built with

- Vue.js
- Tailwind CSS (Flex & Grid)
- Google Fonts
- Mobile-first workflow

### What I learned

I learned how to apply a color over an image using relative and absolute positioning, and opacity

```html

<div class="relative">
  <div class="absolute w-full h-full rounded-t-xl opacity-50 bg-stats-soft-violet md:rounded-tl-none md:rounded-r-xl" />
  <img src="../../../assets/images/image-header-mobile.jpg"
       class="object-cover rounded-t-xl md:hidden"
       alt="stats card">
</div>
```

## Author

- Website - [Favour Okunowo](https://www.nowodev.netlify.app)
- Frontend Mentor - [@nowodev](https://www.frontendmentor.io/profile/nowodev)
- Twitter - [@nowodev](https://www.twitter.com/yourusername)
