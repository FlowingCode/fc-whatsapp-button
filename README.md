[![npm version](https://badgen.net/npm/v/@flowingcode/fc-whatsapp-button)](https://www.npmjs.com/package/@flowingcode/fc-whatsapp-button)

# @flowingcode/fc-whatsapp-button

Web Component to easily start WhatsApp conversations. It is based on [@vaadin/button](https://www.npmjs.com/package/@vaadin/button).

This component is a fork of [@open-wa/whatsapp-button](https://github.com/open-wa/whatsapp-button).

## Online demo

Online demo [here](https://fc-whatsapp-button.demos.flowingcode.com/).

## Installation

```bash
npm i @flowingcode/fc-whatsapp-button
```

## How to use
```html
<fc-whatsapp-button phone="123456" dialcode="44" text="Hello!" label="Contact Us!"></fc-whatsapp-button>
```

## How to run local demo 

1. Fork the `fc-whatsapp-button` repository and clone it locally.

2. Make sure you have [npm](https://www.npmjs.com/) installed.

3. When in the `fc-whatsapp-button` directory, run `npm install` to install dependencies.

4. Run `npm start` to open the demo.

## Testing 

```bash
npm run test
```

## Creating static demo site

1. Make sure to have executed `npm install`

2. Execute `npx -p parcel npm run buildstatic`

3. The static site will be generated in /dist

## License
For license terms, see LICENSE.txt.
