const MarkCommand = require('../../src/commands/list')

describe('Mark Command', () => {
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

  it('should enable mark/unmark tasks', async () => {
    await MarkCommand.run([])
  })
})
