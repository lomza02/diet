export const add = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product,
  };
};

export const select = (id) => {
  return {
    type: 'SELECT_PRODUCT',
    id,
  };
};

export const remove = (id) => {
  return {
    type: 'REMOVE_PRODUCT',
    id,
  };
};
