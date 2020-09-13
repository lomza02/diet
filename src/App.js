import React, {Fragment} from 'react';
import { ThemeProvider } from 'styled-components';
import Diet from 'pages/Diet';
import theme from 'utils/theme';
import { ReactQueryConfigProvider } from 'react-query';
import {Loading} from 'components';

const queryConfig = {
  suspense: true,
  refetchAllOnWindowFocus: false,
}

function App() {
  return (
    <Fragment>
        <Diet />
    </Fragment>
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
