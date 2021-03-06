# Heketi-Ui

[![Build Status](https://travis-ci.org/orachide/heketi-ui.svg?branch=master)](https://travis-ci.org/orachide/heketi-ui)

## Overview
Heketi UI is a web UI to manage [heketi](https://github.com/heketi/heketi) server. This should allow to have an overview of your [**glusterfs**](https://www.gluster.org/) cluster.

**This project is still in dev phase and is not ready for use in production**


## Run with docker

You can find the docker images here [orachide/heketi-ui](https://hub.docker.com/r/orachide/heketi-ui/)

```bash
docker run -e HEKETI_SERVER_URL="" -e HEKETI_SERVER_USER="admin" -e HEKETI_SERVER_SECRET="" -p 3000:3000 orachide/heketi-ui
```
After the container is running, you can browse to `http://localhost:3000/`

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
