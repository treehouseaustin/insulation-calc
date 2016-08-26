# Insulation Calculator

Run `npm install` and then `npm start` to boot a static file server with live
refreshing for development purposes.

## Contributing

All files required for the landing page are located in the `/src` folder and
organized by their type. The Foundation templating engine Panini is used to
allow pages with re-usable layouts and partials.

## Publishing

The following must be done in order to publish a landing page:

- A `development` and `master` branch should be created to allow for hosting the
  production version and a development version for preview purposes.
- The `.travis.yml` file should be updated with an S3 deployment key for builds.
- An entry must be created in the `trh-router` NGINX server that proxies
  requests to the correct location in S3.
