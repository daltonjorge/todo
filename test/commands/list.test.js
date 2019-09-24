const ListCommand = require('../../src/commands/list')

describe('Add Command', () => {
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

  it('should print a table with one item', async () => {
    await ListCommand.run([])
    expect(result).toEqual(
      expect.arrayContaining(
        [expect.stringMatching(/task/)]
      )
    )
  })
})
