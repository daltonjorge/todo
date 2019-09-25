# Welcome to todo 👋

> A simple  CLI todo app based on https://github.com/ZeroX-DG/checkme project.

![Prerequisite](https://img.shields.io/badge/node-%3E%3D8.0.0-blue.svg)
[![Version](https://img.shields.io/npm/v/todo.svg)](https://npmjs.org/package/todo)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Codecov](https://codecov.io/gh/daltonjorge/todo/branch/master/graph/badge.svg)](https://codecov.io/gh/daltonjorge/todo)
[![GitHub](https://img.shields.io/github/license/daltonjorge/todo)](https://github.com/daltonjorge/todo/blob/master/LICENSE)

<!-- toc -->
* [Prerequisites](#prerequisites)
* [Install](#install)
* [Run tests](#usage)
* [Usage](#usage)
* [Commands](#commands)
* [Author](#author)
<!-- tocstop -->

# Prerequisites
<!-- prerequisites -->
- node >=8.0.0
<!-- prerequisitesstop -->

# Install
<!-- install -->
```sh
npm install
```
<!-- installstop -->

# Run tests
<!-- run_tests -->
```sh
npm run test
```
<!-- run_tests -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g todo
$ todo COMMAND
running command...
$ todo (-v|--version|version)
todo/0.0.0 linux-x64 node-v10.16.3
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`todo add [TASK]`](#todo-add-task)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list`](#todo-list)
* [`todo mark`](#todo-mark)
* [`todo remove [INDEX]`](#todo-remove-index)
* [`todo teste`](#todo-teste)

## `todo add [TASK]`

Add new task

```
USAGE
  $ todo add [TASK]

OPTIONS
  -d, --done  check task as done
```

_See code: [src/commands/add.js](https://github.com/daltonjorge/todo/blob/v0.0.0/src/commands/add.js)_

## `todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `todo list`

Print out all todos

```
USAGE
  $ todo list
```

_See code: [src/commands/list.js](https://github.com/daltonjorge/todo/blob/v0.0.0/src/commands/list.js)_

## `todo mark`

Mark/Unmark your tasks

```
USAGE
  $ todo mark
```

_See code: [src/commands/mark.js](https://github.com/daltonjorge/todo/blob/v0.0.0/src/commands/mark.js)_

## `todo remove [INDEX]`

Remove a todo from list

```
USAGE
  $ todo remove [INDEX]

EXAMPLES

  $ todo remove 0
  [Success] Removed todo: a new todo


  $ todo remove
  ›   Error: please specify the todo's index
```

_See code: [src/commands/remove.js](https://github.com/daltonjorge/todo/blob/v0.0.0/src/commands/remove.js)_
<!-- commandsstop -->

# Author
<!-- author -->
👤 **Dalton Jorge @daltonjorge**
<!-- authorstop -->

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_