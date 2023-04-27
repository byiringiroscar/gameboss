import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Detail from '../components/Detail';

describe('Detail', () => {
  it('Render Detail correctly', () => {
    const detailsComponent = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Detail />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(detailsComponent).toMatchSnapshot();
  });
});
