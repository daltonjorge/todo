const RemoveCommand = require('../../src/commands/remove')

describe('Remove Command', () => {
  let result

  beforeEach(() => {
    result = []
    jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(val => {
        result.push(val)
      }
     )
  })

  afterEach(() => jest.restoreAllMocks())

  it('should print a error message if no argument is received', async () => {
    await RemoveCommand.run([])
    expect(result).toEqual(
      expect.arrayContaining(
        [expect.stringMatching(/Error/)]
      )
    )
  })

  // it('should print a success message with task string', async () => {
  //   await RemoveCommand.run(['create a new js app'])
  //   expect(result).toEqual(
  //     expect.arrayContaining(
  //       [expect.stringMatching(/Success/)]
  //     )
  //   )
  // })

  // it('should print a success message with task string and done flag', async () => {
  //   await RemoveCommand.run(['create a new js app', '-d'])
  //   expect(result).toEqual(
  //     expect.arrayContaining(
  //       [expect.stringMatching(/Success/)]
  //     )
  //   )
  // })
})
