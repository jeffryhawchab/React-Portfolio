<h1 align="center">Welcome to portfolio 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/portfolio" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/portfolio.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is a personal portfolio built with React and powered by Vite for fast development and build processes. The design is styled using TailwindCSS, allowing for a sleek, responsive, and modern interface. The portfolio showcases my projects, skills, and background, optimized for performance and accessibility.

### ✨ [Demo](jeffreyhawchab.vercel.app)

## setup the project
```sh
git clone https://github.com/jeffryhawchab/React-Portfolio.git
```

```sh
cd React-Portfolio
```
```sh
npm install
```
```sh
npm run dev
```

## Editing the Portfolio

To customize your portfolio, navigate to the `src/components` directory. You can edit various components to update the content, styles, and layout of your portfolio as needed.

### Customizing the Contact Us Screen
1. **Open the Contact Us Component:**
   Locate the `Contact.jsx` file in the `src/components` directory.

2. **Replace the FormCarry URL:**
   In the `handleSubmit` function, update the URL in the `fetch` call to point to your desired form handling service. For example:
   ```javascript
   const response = await fetch('https://your-custom-url.com/api/contact',
    ```

   ### Adjust the GitHub Chart: In the Project section, replace the current GitHub chart URL with the following:
     ```bash
       https://ghchart.rshah.org/008000/yourusername
    ```
   


## Author

👤 **jeffreyhawchab**

* Website: jeffreyhawchab.vercel.app
* Github: [@jeffryhawchab](https://github.com/jeffryhawchab)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
