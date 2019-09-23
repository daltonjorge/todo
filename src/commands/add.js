const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')

class AddCommand extends Command {
  async run() {
    const {args, flags} = this.parse(AddCommand)
    const task = args.task
    if (task) {
      if (flags.done) {
        // todoAPI.add(todo, true)
        this.log('add new task as done')
      } else {
        // todoAPI.add(todo)
        this.log('add new task')
      }
      this.log(`${chalk.green('[Success]')} Added new task: ${task}`)
    } else {
      // this.log(chalk.red('[Error] Please specify the new task'))
      this.log('[Error] Please specify the new task')
    }
  }
}

AddCommand.args = [{name: 'task'}]

AddCommand.description = 'Add new task'

AddCommand.flags = {
  done: flags.boolean({char: 'd', description: 'check task as done'}),
}

module.exports = AddCommand
