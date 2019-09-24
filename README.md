todo
====

A simple  CLI todo app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo.svg)](https://npmjs.org/package/todo)
[![Codecov](https://codecov.io/gh/daltonjorge/todo/branch/master/graph/badge.svg)](https://codecov.io/gh/daltonjorge/todo)
[![Downloads/week](https://img.shields.io/npm/dw/todo.svg)](https://npmjs.org/package/todo)
[![License](https://img.shields.io/npm/l/todo.svg)](https://github.com/daltonjorge/todo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
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

Describe the command here

```
USAGE
  $ todo list

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/list.js](https://github.com/daltonjorge/todo/blob/v0.0.0/src/commands/list.js)_
<!-- commandsstop -->
