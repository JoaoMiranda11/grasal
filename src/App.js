import { Container } from './styles';

import {  BrowserRouter } from 'react-router-dom' 
import UserProvider from './contexts/user';
import { Provider } from 'react-redux';
import store from './store'

import { ToastContainer } from 'react-toast';
import RouterTree from './RouterTree';

function App() {
  return (
    <Container>
      <Provider store={store}>
        <UserProvider>
          <BrowserRouter>
            <RouterTree/>
          </BrowserRouter>
          <ToastContainer delay={3000}/>
        </UserProvider>
      </Provider>
    </Container>
  );
}

export default App;
