import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Nav from './components/Nav.jsx';
import { Provider } from 'react-redux';
import { history, configureStore } from './configureStore.js';
import { Route } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <Nav />
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={App}/>
              <Route path="/entries" component={App}/>
            </div>
          </ConnectedRouter>
          </div>
      </Provider>
    </AppContainer>, document.getElementById('app')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(App)
  });
}