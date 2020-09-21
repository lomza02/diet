import React, {useContext} from 'react';
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


const Diet = () => {
    const size = useWindowSize();
  const {store} = DateContextHandler;
  const data = useContext(store);
  const {selectedMeal} = data;
    useArrowPress('ArrowRight');

  const [mutate] = useMutation(API.removeMeal, {
    refetchQueries: ['meals']
  });
  const handleRemoveMeal = async() => {
    try {
        await mutate(selectedMeal);
      } catch (error) {
        console.log(error)
      }
}
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
                <Link to="/add-product"><Button>Dodaj produkt</Button></Link> 
                <Link to="/add-meal"><Button>Dodaj posiłek</Button></Link>
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