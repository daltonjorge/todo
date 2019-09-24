const fs = require('fs')
const path = require('path')
const os = require('os')
const api = require('../../src/api/ioApi')

const taskFile = path.join(os.homedir(), 'todo', 'tasks.json')

describe('IO operations', () => {

  it('inexistent file should return empty array', () => {
    const expected = []
    try {
      // delete data file if it exists
      fs.unlink(taskFile, function(err) {
        if(err && err.code == 'ENOENT') {
          // file doens't exist
        } else if (err) {
          // other errors, e.g. maybe we don't have enough permission
          console.error("Error occurred while trying to remove file");
        } else {
          const received = api.readTasks()
          expect(received).toStrictEqual(expected);
        }
      })
    } catch(err) {
      console.error(err)
    }    
  });

  it('should write a task to disk and read task again', () => {
    const expected = [{done: true, task: 'My task #1'}]
    try {
      // delete data file if it exists
      fs.unlink(taskFile, function(err) {
        if(err && err.code == 'ENOENT') {
          // file doens't exist
        } else if (err) {
          // other errors, e.g. maybe we don't have enough permission
          console.error("Error occurred while trying to remove file");
        } else {
          const tasks = api.readTasks();
          let updatedTasks = api.addTask(tasks, true, 'My task #1')
          api.writeTasks(updatedTasks)
          const received = api.readTasks()
          expect(received).toEqual(expected);
        }
      })
    } catch(err) {
      console.error(err)
    }    
  });
});
