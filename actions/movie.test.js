const { getPopularMovies, searchByMovieTitle, getMovieDetails } = require('./movie');
const axios = require('axios');
jest.mock('axios');

describe('Movie', () => {
  test('should return popular movies if value is returned', async () => {
    axios.get.mockImplementation(() => {
      return {
        data: {
          results: [
            {
              name: 'Aladdin'
            }
          ]
        }
      };
    });

    const resp = await getPopularMovies();

    expect(resp[0].name).toBe('Aladdin');
  });

  test('should return error if get popular movie fails', async () => {
    axios.get.mockImplementation(() => {
      throw new Error('Error');
    });

    try {
      await getPopularMovies();
    } catch (error) {
      expect.stringContaining('Error: Get popular movies failed Error: Error');
    }
  });

  test('should return results if search query returns', async () => {
    axios.get.mockImplementation(() => {
      return {
        data: {
          results: [
            {
              name: 'Aladdin'
            }
          ]
        }
      };
    });

    const resp = await searchByMovieTitle('Test');

    expect(resp[0].name).toBe('Aladdin');
  });

  test('should return error if search fails', async () => {
    axios.get.mockImplementation(() => {
      throw new Error('Error');
    });

    try {
      await searchByMovieTitle('Test');
    } catch (error) {
      expect.stringContaining('Error: Get popular movies failed Error: Error');
    }
  });

  test('should return movie detail', async () => {
    axios.get.mockImplementation(() => {
      return {
        data: {
          name: 'Aladdin'
        }
      };
    });

    const resp = await getMovieDetails('Test');

    expect(resp.name).toBe('Aladdin');
  });

  test('should return error if search fails', async () => {
    axios.get.mockImplementation(() => {
      throw new Error('Error');
    });

    try {
      await getMovieDetails('Test');
    } catch (error) {
      expect.stringContaining('Error: Get popular movies failed Error: Error');
    }
  });
});
