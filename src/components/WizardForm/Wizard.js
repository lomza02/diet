import React, {useState, useContext} from 'react'
import DateContextHandler from 'data/context';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import {Button} from 'components/Button';
import {ButtonWrapper, FormWrapper} from './WizardForm.css';

const Wizard  = (props) => {
  const [page, setPage] = useState(0);
  const [valuesGlobal, setValuesGlobal] = useState({});
  const {store} = DateContextHandler;
  const data = useContext(store);
  const {setCheckedProducts, products, dateISO} = data;

  const next = values => {
    setPage(Math.min(page + 1, props.children.length - 1));
    if(page === 0) {
      setCheckedProducts(values)
    }
  }

  const previous = () => setPage(Math.max(page - 1, 0));

  const validate = values => {
    const activePage = React.Children.toArray(props.children)[
      page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  const handleSubmit = values => {
    const { children, onSubmit } = props;
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      setCheckedProducts({})
     const productsIndexArray = values.products;
     delete values.products
     const validateValues = (productsIndexArray) => {
    const checkedProducts = productsIndexArray.map(checked => products.find(product => product.id === checked));
    const validatedArrayOfProductsWithAmounts = [];
    Object.entries(values).forEach(item => checkedProducts.forEach(product => item[0] === product.name 
      ? 
      validatedArrayOfProductsWithAmounts.push({amount: item[1], productId: product.id, date: dateISO}) 
      : 
      null))
    return validatedArrayOfProductsWithAmounts;
}
if(productsIndexArray) {
  onSubmit(validateValues(productsIndexArray))
  for (let member in values) delete values[member];
}
    } else {
      if(values.products && values.products.length > 0) {
        setValuesGlobal(values)
        next(values)
      }
      else {
        setValuesGlobal({})
      }
    }
  }

    const { children } = props;
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1;
    const isBtnDisabled = values => values.products ? !values.products.length : true;
    return (
      <Form
        initialValues={valuesGlobal}
        validate={validate}
        onSubmit={handleSubmit}
        
      >
        {({ handleSubmit, submitting, values }) => (
          <FormWrapper onSubmit={handleSubmit}>
            {activePage}
            <ButtonWrapper>
              {page > 0 && (
                <Button type="button" onClick={previous}>
                  Wróć
                </Button>
              )}
              {!isLastPage &&  <Button type="submit" disabled={isBtnDisabled(values)}>Dalej</Button>}
              {isLastPage && (
                <Button type="submit" disabled={submitting}>
                  Dodaj
                </Button>
              )}
            </ButtonWrapper>
          </FormWrapper>
        )}
      </Form>
    )
}


Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

Wizard.Page = ({ children }) => children;

export default Wizard;