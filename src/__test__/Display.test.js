import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Main from '../components/Main';

describe('Home', () => {
  it('Render Home correctly', () => {
    const displayComponent = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Main />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(displayComponent).toMatchSnapshot();
  });
});
