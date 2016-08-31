# Insulation Calculator

Retail kiosk microsite meant for display on iPad devices. The structure and
styling may not degrade on alternate browsers or screen sizes.

Run `npm install` to install development dependencies and `npm run build` or
`npm run dev` to compile assets. For best results, test in Safari with
responsive mode enabled.

## Contributing

Before contributing please review our [contribution guidelines](https://github.com/treehouseaustin/team-guidelines).

Most files for the microsite are contained in the `frontend` directory. This
includes the Angular components, controllers, and SASS styling. The `dist`
folder contains the final output with the exception of a directory for static
images and an `index.html` which hosts the main Angular component for the app.

TreeHouse code standard can be checked by running `npm run lint`.

## Publishing

The following must be done in order to publish a landing page:

- A `development` and `master` branch should be created to allow for hosting the
  production version and a development version for preview purposes.
- The Travis settings should be updated with an S3 deployment key for builds.
- When pushing commits, builds in Travis will trigger a deployment to S3 based
  on the branch being pushed.

During development, changes can be previewed here:
https://s3.amazonaws.com/trh-landing/treehouseaustin/insulation-calc/master/index.html

These are also pushed to the production domain. However, both Cloudflare and
AWS Cloudfront caches must be purged before changes are visible to the public:

https://kiosk.tree.house/insulation-calc/master/index.html
