import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Container>
        <Content>
          <GlobalStyle />
          <App />
        </Content>
      </Container>
  </React.StrictMode>
);
