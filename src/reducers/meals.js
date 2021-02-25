import uuid from 'uuid-random';

const initialMeals = {
  selected: null,
  items: [
    {
      amount: 100,
      carbs: 0.1,
      fats: 81,
      kcals: 716.8,
      name: 'Masło',
      proteins: 0.9,
      date: '2021-02-25',
      id: 'b35a5bb9-4af1-4bf9-9f44-4cec30630ffb',
    },
    {
      amount: 33,
      carbs: 25.08,
      fats: 0.33,
      kcals: 120.12,
      name: 'Mąka',
      proteins: 3.3,
      date: '2021-02-25',
      id: '8476cf15-517d-4808-ad07-89eb5563cb52',
    },
  ],
};

const countMacros = (items, action) => {
  const products = action[items];
  const product = products.find((product) => product.id === action.id);
  const kcals = (product.kcals * action.amount) / 100;
  const fats = (product.fats * action.amount) / 100;
  const carbs = (product.carbs * action.amount) / 100;
  const proteins = (product.proteins * action.amount) / 100;
  const item = {
    name: product.name,
    id: uuid(),
    amount: action.amount,
    kcals: parseFloat(kcals.toFixed(2)),
    fats: parseFloat(fats.toFixed(2)),
    carbs: parseFloat(carbs.toFixed(2)),
    proteins: parseFloat(proteins.toFixed(2)),
  };
  return item;
};

const meals = (state = initialMeals, action) => {
  const meals = [...state.items];
  const meal = meals.find((meal) => meal.id === action.id);
  const index = meals.indexOf(meal);

  switch (action.type) {
    case 'ADD_MEAL':
      const item = countMacros('products', action);
      item.date = action.date.toISOString().substring(0, 10);
      return {
        ...state,
        items: [...state.items, item],
      };
    case 'REMOVE_MEAL':
      meals.splice(index, 1);
      return {
        ...state,
        items: meals,
      };
    case 'EDIT_MEAL':
      const item2 = countMacros('meals', action);
      meal.amount = item2.amount;
      meal.kcals = parseFloat(item2.kcals.toFixed(2));
      meal.fats = parseFloat(item2.fats.toFixed(2));
      meal.carbs = parseFloat(item2.carbs.toFixed(2));
      meal.proteins = parseFloat(item2.proteins.toFixed(2));
      return {
        ...state,
        items: meals,
      };
    case 'SELECT_MEAL':
      return {
        ...state,
        selected: action.id,
      };
    default:
      return state;
  }
};

export default meals;
