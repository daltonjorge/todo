const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')
const { removeTask, getTask } = require('../api/taskAPI')
const { readTasks, writeTasks } = require('../api/ioApi')

class RemoveCommand extends Command {
  async run() {
    const { args } = this.parse(RemoveCommand)
    const index = args.index
    if (index) {
      const tasks = readTasks();
      const item = getTask(tasks, index)
      if(item) {
        const updatedTasks = removeTask(tasks, index)
        this.log(`${chalk.green('[Success]')} Removed task: ${item.task}`)
        writeTasks(updatedTasks)  
      } else {
        this.log(chalk.red('›   Error: task\'s index not found'))
      }
    } else {
      this.log(chalk.red('›   Error: please specify the task\'s index'))
    }
  }
}

RemoveCommand.args = [{name: 'index'}]

RemoveCommand.description = 'Remove a todo from list'

RemoveCommand.examples = [`
$ todo remove 0
[Success] Removed todo: a new todo
`,`
$ todo remove
›   Error: please specify the todo's index
`]

module.exports = RemoveCommand
