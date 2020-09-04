import React from 'react';
import { ThemeProvider } from 'styled-components'
import Diet from 'pages/Diet'
import theme from 'utils/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Diet />
      </div>
    </ThemeProvider>
  );
}

export default App;
