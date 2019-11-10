const popular = require('./popular');

jest.mock('../actions/movie', () => ({
  getPopularMovies: async () => {
    return {
      data: {
        name: 'Aladdin'
      }
    };
  }
}));

describe('popular', () => {
  const myFn = jest.fn();
  test('should return 200 if resp is returned', async () => {
    await popular({ body: {} }, { status: () => ({ send: myFn }) });
    await new Promise(res => setTimeout(res, 1, true));
    expect(myFn).toHaveBeenCalledWith({
      data: {
        name: 'Aladdin'
      }
    });
  });
});
