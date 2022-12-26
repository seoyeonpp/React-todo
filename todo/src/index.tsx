import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <QueryClientProvider client={queryClient}> */}
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
      {/* </QueryClientProvider> */}
    </RecoilRoot>
  </React.StrictMode>
);