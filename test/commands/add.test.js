const stripAnsi = require('strip-ansi');
const AddCommand = require('../../src/commands/add')

describe('Add Command', () => {
  let result

  beforeEach(() => {
    result = []
    jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(val => {
        const removeAnsiColors = stripAnsi(val)
        const newLine = new RegExp('\n', 'g')
        const removeNewLineChars = removeAnsiColors.replace(newLine, '')
        result.push(removeNewLineChars)
      }
     )
  })

  afterEach(() => jest.restoreAllMocks())

  it('should print a error message if no argument is received', async () => {
    await AddCommand.run([])
    expect(result).toContain('[Error] Please specify the new task')
  })

  it('should print a success message if valid arguments is received', async () => {
    await AddCommand.run(['create a new js app'])
    expect(result).toContain('[Success] Added new task: create a new js app')
  })
})
