import gamesReducer from '../redux/games/gamesSlice';

describe('incomingGames', () => {
  it('it should return the initial state', () => {
    expect(gamesReducer(undefined, {})).toEqual({
      games: [],
      isLoading: false,
      hasError: false,
      searched: '',
    });
  });
  it('should handle fetchgamesData.pending', () => {
    expect(gamesReducer(undefined, { type: 'games/fetchGames/pending' })).toEqual({
      games: [],
      isLoading: true,
      hasError: false,
      searched: '',
    });
  });
  it('should handle fetchgamesData.fulfilled', () => {
    expect(gamesReducer(undefined, {
      type: 'games/fetchGames/fulfilled',
      payload: [{
        id: 1136,
        title: 'Overwatch 2',
        thumbnail: 'https://www.mmobomb.com/g/1136/thumbnail.jpg',
        short_description: 'Big changes come to the Overwatch formula in this sequel...and so does PvE content, eventually.',
        game_url: 'https://www.mmobomb.com/open/overwatch-2',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Activision Blizzard King',
        developer: 'Blizzard Entertainment',
        release_date: '2022-10-04',
        profile_url: 'https://www.mmobomb.com/overwatch-2',
      }],
    })).toEqual({
      games: [{
        id: 1136,
        title: 'Overwatch 2',
        thumbnail: 'https://www.mmobomb.com/g/1136/thumbnail.jpg',
        short_description: 'Big changes come to the Overwatch formula in this sequel...and so does PvE content, eventually.',
        game_url: 'https://www.mmobomb.com/open/overwatch-2',
        genre: 'Shooter',
        platform: 'PC (Windows)',
        publisher: 'Activision Blizzard King',
        developer: 'Blizzard Entertainment',
        release_date: '2022-10-04',
        profile_url: 'https://www.mmobomb.com/overwatch-2',
      }],
      isLoading: false,
      hasError: false,
      searched: '',
    });
  });
  it('should handle fetchgamesData.rejected', () => {
    expect(gamesReducer(undefined, { type: 'games/fetchGames/rejected' })).toEqual({
      games: [],
      isLoading: false,
      hasError: true,
      searched: '',
    });
  });
  it('should handle addSearched', () => {
    expect(gamesReducer(undefined, {
      type: 'games/addSearched',
      payload: 'overwatch',
    })).toEqual({
      games: [],
      isLoading: false,
      hasError: false,
      searched: 'overwatch',
    });
  });
});
