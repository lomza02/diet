import React from 'react';
import {Form as Content, InputBox} from './Form.css';
import { Form, Field } from 'react-final-form';
import {Button} from 'components/Button';
import API from 'data/fetch';



const MyForm = () => {
    const onSubmit = async(values, form) => {
    await API.sendProducts(values)
    .then(setTimeout(form.restart, 500))
    .then(console.log('dupa'))
    }
    return (
        <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {}
          if (!values.name) {
            errors.name = 'Wpisz nazwę produktu'
          }
          if (!values.kcal) {
            errors.kcal = 'Wpisz liczbę kalorii'
          }
          if (!values.protein) {
            errors.protein = 'Wpisz ilość białka'
          }
          if (!values.carbs) {
            errors.carbs = 'Wpisz ilość węglowodanów'
          }
          if (!values.fat) {
            errors.fat = 'Wpisz ilość tłuszczy'
          }
          return errors
        }}
        render={({ handleSubmit, submitting, pristine }) => (
          <Content onSubmit={handleSubmit}>
              <Field name="name" 
              render={({ input, meta }) => (
              <InputBox>
              <div>
              <label>Nazwa produktu</label>
                <input {...input} type="text" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
              </InputBox>
            )}
              />
              <Field 
              name="kcal"
              parse={value => value < 0 ? -value : value}
              render={({ input, meta }) => (
              <InputBox>
              <div>
              <label>Kalorie na 100g</label>
                <input {...input} type="number" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
              </InputBox>
             )}
             />
              <Field 
              name="protein"
              parse={value => value < 0 ? -value : value}
              render={({ input, meta }) => (
              <InputBox>
              <div>
              <label>Białko na 100g</label>
                <input {...input} type="number" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
              </InputBox>
              )}
            />
     
              <Field 
              name="carbs"
              parse={value => value < 0 ? -value : value}
              render={({ input, meta }) => (
                <InputBox>
                <div>
                <label>Węglowodany na 100g</label>
                  <input {...input} type="number" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
                </InputBox>
                )}
              />              
              <Field 
              name="fat"
              parse={value => value < 0 ? -value : value}
              render={({ input, meta }) => (
                <InputBox>
                <div>
                <label>Tłuszcze na 100g</label>
                  <input {...input} type="number" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
                </InputBox>
                )}
              />
            <Button
            disabled={submitting || pristine}
            type="submit"
            >Dodaj</Button>
          </Content>
        )}
      />
     );
}
 
export default MyForm;