import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Diet from './pages/Diet';
import theme from 'utils/theme';
import { ReactQueryConfigProvider } from 'react-query';
import { ErrorBoundary } from 'components';
import DataContextHandler from 'data/context';
import datajson from 'data/data.json';
const queryConfig = {
  suspense: true,
  refetchAllOnWindowFocus: false,
};

function App() {
  const { DataContext } = DataContextHandler;
  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(datajson.meals));
    localStorage.setItem('products', JSON.stringify(datajson.products));
  }, []);
  return (
    <DataContext>
      <Diet />
    </DataContext>
  );
}

const RootApp = () => {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </ReactQueryConfigProvider>
  );
};

export default RootApp;
