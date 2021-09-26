Hey! there :wave: all!

<!-- 
intro
add npm packages add
functionality
disclosure -->

# NOTES-APP

This is a simple notesApp made with javascript, npm modules and nodejs.

## Modules Used
- npm chalk
- npm yargs

---

## Chalk MODULE :-
chalk is used to make interactive command line styling.

### Installation
```js
$ npm install chalk
```

### Usage

```js
const chalk = require('chalk');
console.log(chalk.bold.bg_red("this is a red text"));

```
click here to explore more about the [chalk module](https://www.npmjs.com/package/chalk).


---

## Yargs MODULE :- 
Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
### Installation
```js
$ npm i yargs
```
### Usage

```js
#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}
```
click here to explore more about the [Yargs Module](https://www.npmjs.com/package/yargs).

---
## Functionality :- 

for going into the directory used
```js
$ cd note-app

``` 
run the file using :-
```js
node app.js
```
## functions usage examples
```js
//adding a notesApp
node app.js add --title="title" --body="body"
// removing an existing note
node app.js remove --title="title" 
// listing the notesApp
node app.js list
// reading the body of the note
node app.js read --title="title"
```

peace to everyone :pray: