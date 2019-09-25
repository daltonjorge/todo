const {Command, flags} = require('@oclif/command')
const inquirer = require('inquirer')
const { readTasks, writeTasks } = require('../api/ioApi')
const api = require('../api/taskAPI')

class MarkCommand extends Command {
  async run() {
    const source = readTasks()
    let choices = source
    const prompt = await inquirer.prompt([
      {
        type: 'checkbox',
        message: 'Mark as done',
        name: 'tasks',
        choices: choices.map(task => {
          return { name: task.task, checked: task.done }
        })
      }
    ])
    const finishedTodo = prompt.tasks
    
    source.forEach((todo, index) => {
      if (finishedTodo.indexOf(todo.task) !== -1) {
        choices = api.done(choices, index)
      } else {
        choices = api.undone(choices, index)
      }
    })
    writeTasks(choices)
  }
}

MarkCommand.description = 'Mark/Unmark your tasks'

module.exports = MarkCommand
