# Advertisement Management

[![Greenkeeper badge](https://badges.greenkeeper.io/PeterNgTr/ads_web_protractor.svg)](https://greenkeeper.io/)

Following are automation tests for the given user stories.
 * Write using Gherkin scenarios. - Done
 * Use protractor to execute your tests. - Done
 * Use BrowserStack to execute tests. - WIP

In this release, following user stories are covered:
 * As a user, when I'm on the list view, I want to able to create new advertisements. - Done
 * As a user, when I'm on the list view, I would like to click on an entry in the list to edit it. - WIP
 * As a user, when I'm on the advertisement form view, I must provide a price with a proper format. - WIP
 * As a user, when I'm on the advertisement form view, I must have a name. - WIP
 * As a user, when I'm on the advertisement form view, the save button is not active as long the form is not valid. - WIP
 * As a user, after I create a new advertisement, I should see the created entry in the list. - Done
 * As a user, after I update an advertisement, I should see the updated entry in the list. - WIP
 * As a user, when I'm on the list view and some one creates or updates an entry, I should receive proper information over WebSockets and see the live changes on my list. - WIP
 * As a user, when I'm on the list view, I can sort the list entries by name, in ascending and descending order. - WIP

Known issues:
 Trying manually, those two functions doesn't work.
  * As a user, when I create or edit an advertisement, I can press enter to submit the form.
  * As a user, when I create or edit an advertisement, I can press close the form by pressing escape.

Protractor is used to execute those automation tests and follows Page Object pattern.

We could add more TCs by adding related TCs to *.feature files. 
For instance, you have 10 TCs related to Advertisements Management feature, just simply add them to Advertisements Management.feature file.

###*Project Layout*

* features/*.feature : cucumber features
* features/step_definitions/*.js : generic steps that apply to all features
* features/support/env.js : environment configurations
* features/support/hook.js : initializes scenarios, tears down scenarios
* features/pages : the pages which are related to automation tests

###*Prerequisites*

* Download and install NodeJS [here](https://nodejs.org/en/)
* After navigating to ads_web_protractor/ directory

```
npm install
```

###*Running Features*

To run a specific feature, for instance: Advertisements Management.feature, you can either:

. *Using terminal: after navigating to ads_web_protractor/ directory*
```
protractor conf.js
```