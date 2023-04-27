import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Header from '../components/Header';

describe('Header', () => {
  it('Render Header correctly', () => {
    const headerComponent = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(headerComponent).toMatchSnapshot();
  });
});
