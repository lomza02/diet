import React from 'react';
import { ThemeProvider } from 'styled-components';
import Diet from './pages/Diet';
import theme from 'utils/theme';
import { ErrorBoundary } from 'components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Diet />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
