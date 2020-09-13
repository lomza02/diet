import React, {Fragment} from 'react';
import {Button, Loading} from 'components';
import { refetchAllQueries } from 'react-query';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
    
    handleClick = async () => {
      this.setState({ hasError: false })
      await refetchAllQueries({ includeInactive: true })
      
    }
    render() {
     return  (
    <React.Suspense fallback={<Loading/>}>
         {this.state.hasError ? 
         (
     <div style={{
       display: 'flex',
       flexWrap: 'wrap',
       alignContent: 'center',
       justifyContent: 'center',
       height: '80vh',

     }}>
      <div style={{marginBottom: '20px'}}>Pojawił się błąd :(</div>
      <Button onClick={this.handleClick}>Spróbuj ponownie</Button>
      </div>
          ) 
     : 
     (
     <Fragment>{this.props.children}</Fragment>
     )}
    </React.Suspense>
       )
    }
}

  export default ErrorBoundary;