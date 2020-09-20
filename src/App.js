import React, {Fragment} from 'react';
import { ThemeProvider } from 'styled-components';
import Diet from 'pages/Diet';
import theme from 'utils/theme';
import { ReactQueryConfigProvider } from 'react-query';
import {ErrorBoundary} from 'components';
import DataContextHandler from 'data/context/';

const queryConfig = {
  suspense: true,
  refetchAllOnWindowFocus: false,
}

function App() {
  const {DataContext} = DataContextHandler;
  return (
    <DataContext>
    <Fragment>
        <Diet />
    </Fragment>
    </DataContext>
  );
}


const RootApp = () => {
  return ( 
    <ReactQueryConfigProvider config={queryConfig}>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
     </ThemeProvider>
    </ReactQueryConfigProvider>
   );
}
 
export default RootApp;
