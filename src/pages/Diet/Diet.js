import React, {useContext, useCallback} from 'react';
import { Button, Modal, Wrapper, PlusButton} from 'components';
import {ActionSection, NavigationBar, ProductsList, ProductForm, MealForm, EditMealForm, ChartSection} from 'pages/Diet/components';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import DateContextHandler from 'data/context';
import {useMutation} from 'react-query';
import API from 'data/fetch';
import {useWindowSize} from 'data/hooks/useWindowSize';
import {useArrowPress} from 'data/hooks/useArrowPress';
import {DESKTOP_WIDTH} from 'utils/constants';
import { useHistory } from "react-router-dom";

const Diet = () => {
    const history = useHistory()
  const size = useWindowSize();
  const {store} = DateContextHandler;
  const data = useContext(store);
  const {selectedMeal} = data;
    useArrowPress()
  const [mutate] = useMutation(API.removeMeal, {
    refetchQueries: ['meals']
  });
  const handleRemoveMeal = useCallback(async() => {
    try {
        await mutate(selectedMeal);
        history.push('/');
      } catch (error) {
        console.log(error)
      }
}, [selectedMeal, mutate])
    return (
        <>
        <NavigationBar />
            <Wrapper>
            {size.width > DESKTOP_WIDTH ? <ActionSection/> : null}
            <ChartSection/>
                <ProductsList />
               {size.width <= DESKTOP_WIDTH ? <Link to="/choose-action"><PlusButton>&#10010;</PlusButton></Link> : null} 
            </Wrapper>
        <Switch>
            <Route exact path="/add-meal" >
                <Modal>
                    <MealForm/>
                </Modal>
            </Route>
            <Route path="/add-product" >
                <Modal>
                    <ProductForm/>
                </Modal>
            </Route>
            <Route path="/edit-meal" >
                <Modal>
                    <EditMealForm/>
                </Modal>
            </Route>
            <Route path="/choose-action" >
                <Modal small>
                <div style={{display: 'flex',
                    justifyContent: 'center'
                }}>
                <Link to="/add-product"><Button>Nowy produkt</Button></Link> 
                <Link to="/add-meal"><Button>Moje produkty</Button></Link>
                </div>
                </Modal>
            </Route>
            <Route path="/remove-meal" >
                <Modal small>
                    <div style={{display: 'flex',
                    justifyContent: 'center'
                }}>
                        <Button red onClick={handleRemoveMeal}>Usuń</Button>
                        <Link to="/edit-meal"><Button>Edytuj</Button></Link>
                    </div>

                </Modal>
            </Route>
      </Switch>
          </>
    );
}

export default Diet;