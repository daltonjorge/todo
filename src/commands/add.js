const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')
const { addTask } = require('../api/taskAPI')
const { readTasks, writeTasks } = require('../api/ioApi')

class AddCommand extends Command {
  async run() {
    const {args, flags} = this.parse(AddCommand)
    const task = args.task
    if (task) {
      const tasks = readTasks();
      let updatedTasks = addTask(tasks, flags.done, task)
      writeTasks(updatedTasks)
      this.log(`${chalk.green('[Success]')} Added new task: ${task}`)
    } else {
      this.log(`${chalk.red('[Error]')} Please specify the new task`)
    }
  }
}

AddCommand.args = [{name: 'task'}]

AddCommand.description = 'Add new task'

AddCommand.flags = {
  done: flags.boolean({char: 'd', description: 'check task as done'}),
}

module.exports = AddCommand
