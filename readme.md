### Development setup
To use this package you'll need to install latest [Node.js](https://nodejs.org/en/)

Then clone this repository and run the following command in the terminal or cmd in the root folder (/tekshop-design/):

```bash
npm i
```

npm is a package manager used by default with node, so this command installs all the dependencies for our project

#### Dev mode

For development purposes it is convenient to have webpack watch for our changes and update the bundle simultaneously. 
Sourcemaps also help us debug our code as it was natively used without babel transpilation, so run 

```bash
npm run dev
```

...and do your coding, webpack will handle updates

#### Production build

Simply run 

```bash
npm run build
```

Which will build the bundle once, without watching for changes or adding source maps, as we don't want to reveal
the secrets

Then go ahead and place `bundle.js` and `style.css` files anywhere you want them to be