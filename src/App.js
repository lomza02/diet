import React, {Fragment} from 'react';
import { ThemeProvider } from 'styled-components';
import Diet from 'pages/Diet';
import theme from 'utils/theme';
import { ReactQueryConfigProvider } from 'react-query';
import {Loading} from 'components';
import DateContextHandler from 'data/context/';

const queryConfig = {
  suspense: true,
  refetchAllOnWindowFocus: false,
}

function App() {
  const {DateContext} = DateContextHandler;
  return (
    <DateContext>
    <Fragment>
        <Diet />
    </Fragment>
    </DateContext>
  );
}


const RootApp = () => {
  return ( 
    <ReactQueryConfigProvider config={queryConfig}>
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Loading/>}>
        <App/>
      </React.Suspense>
     </ThemeProvider>
    </ReactQueryConfigProvider>
   );
}
 
export default RootApp;
