import { render, screen, fireEvent } from '@testing-library/react';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Detail from '../components/Detail';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1136' }),
}));

test('clicking back button takes user to main page', () => {
  render(
    <MemoryRouter initialEntries={['/info/1136']}>
      <Provider store={store}>
        <Routes>
          <Route path="/info/:id" element={<Detail />} />
        </Routes>
      </Provider>
    </MemoryRouter>,
  );
  const button = screen.getByRole('link', { name: 'Back' });
  fireEvent.click(button);
  expect(window.location.pathname).toBe('/');
});
