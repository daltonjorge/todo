const {Command, flags} = require('@oclif/command')
const Table  = require('cli-table')
const chalk = require('chalk')
const {listTasks} = require('../api/taskAPI')
const { readTasks } = require('../api/ioApi')

class ListCommand extends Command {
  async run() {
    const data = readTasks ();
    const tasks = listTasks(data)
    
    const table = new Table({
      head: [
        chalk.blueBright('#'),
        chalk.blueBright('task'),
        chalk.blueBright('done?')
      ]
    });
    for (let i = 0; i < tasks.length; i++) {
      const todo = tasks[i]
      const status = todo.done ? chalk.green('X') : ''
      table.push([ i, todo.task, status ])
    }
    this.log(table.toString())
  }
}

ListCommand.description = 'Print out all todos'

ListCommand.flags = {}

module.exports = ListCommand
