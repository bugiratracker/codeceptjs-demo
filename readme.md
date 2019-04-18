# CodeceptJS Demo Tests

Let's see how you can build end to end tests for your project with [CodeceptJS](https://codecept.io). 
This project should be taken as an example. Learn how to work with:

* Puppeteer testing
* Various locator strategies
* API data management
* Auto login
* Data generation with faker
* autoRetry plugin

## Install and run

```
npm install
```


Create `.env` file [from template](https://gist.github.com/DavertMik/b6fed3199454571785c38e060dd5304e).

*Be aware, that you use a free shared account for demo purpose, it can be chaged or disabled in any moment*.

Execute tests

```
npx run codeceptjs run --debug --profile show
```


## Testing Hints

* We use `ApiDataFactory` to create tickets via API
* We use `bootstrap` to inject data into container
* We use dynamic config and [profiles](https://codecept.io/configuration#profile) to run tests in headless/window mode 
* We use `autoLogin` plugin
* We use `.env` to store sensitive data

---

## What is Bugira Bugtracker?


We test our friendly project: [Bugira Bugtracker](https://www.bugira.com). It's a single page application written in Rails & EmberJS. It allows users to send bugreports via embeddable widget, collecting all session information. The first bugreporter that sends bug for you!

---

Get better bugreports with [Bugira Bugtracker](https://bugira.com)

[![](https://www.bugira.com/assets/images/icons/logo.svg)](https://bugira.com)

