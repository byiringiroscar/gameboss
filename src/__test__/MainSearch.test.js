import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Main from '../components/Main';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Main component', () => {
  test('displays no results found message when no search results', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      games: {
        games: [],
        isLoading: false,
        searched: 'Fortnite',
      },
    }));

    render(<Main />);

    const noResults = screen.getByText('No Results Found!');
    expect(noResults).toBeInTheDocument();
  });

  test('displays loading screen when data is loading', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      games: {
        games: [],
        isLoading: true,
        searched: '',
      },
    }));

    render(<Main />);

    const loadingScreen = screen.getByAltText('loading');
    expect(loadingScreen).toBeInTheDocument();
  });
});
