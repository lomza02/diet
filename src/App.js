import React from 'react';
import { ThemeProvider } from 'styled-components';
import Diet from 'pages/Diet';
import theme from 'utils/theme';
import { ReactQueryConfigProvider } from 'react-query';
import Loading from 'components/Loading';
const queryConfig = {
  suspense: true,
}

function App() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
    <ThemeProvider theme={theme}>
    <React.Suspense fallback={<Loading/>}>
        <Diet />
    </React.Suspense>
    </ThemeProvider>
    </ReactQueryConfigProvider>
  );
}

export default App;
