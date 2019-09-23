const AddCommand = require('../src/commands/add')

describe('Add Command', () => {
  let result

  beforeEach(() => {
    result = []
    jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(val =>
      result.push(val)
      )
  })

  afterEach(() => jest.restoreAllMocks())

  it('should print Error if no argument is passed', async () => {
    await AddCommand.run([])
    expect(result).toContain('[Error] Please specify the new task\n')
  });
});
