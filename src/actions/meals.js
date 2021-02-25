export const add = (id, amount, products, date) => {
  return {
    type: 'ADD_MEAL',
    id,
    amount,
    products,
    date,
  };
};

export const remove = (id) => {
  return {
    type: 'REMOVE_MEAL',
    id,
  };
};

export const edit = (id, amount, meals) => {
  return {
    type: 'EDIT_MEAL',
    id,
    amount,
    meals,
  };
};

export const select = (id) => {
  return {
    type: 'SELECT_MEAL',
    id,
  };
};

export const increase = () => {
  return {
    type: 'INCREASE_DATE',
  };
};

export const decrease = () => {
  return {
    type: 'DECREASE_DATE',
  };
};
