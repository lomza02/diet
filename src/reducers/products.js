const initalProducts = {
  selected: null,
  items: [
    {
      carbs: 76,
      fats: 1,
      kcals: 364,
      name: 'Mąka',
      proteins: 10,
      id: '9535f033-7842-47c5-8a0e-51e2ad687152',
    },
    {
      carbs: 0.1,
      fats: 81,
      kcals: 716.8,
      name: 'Masło',
      proteins: 0.9,
      id: 'ca6150b5-93a8-4ca9-b752-3c46a9d77cae',
    },
  ],
};

const products = (state = initalProducts, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        items: [...state.items, action.product],
      };
    case 'REMOVE_PRODUCT':
      const products = [...state.items];
      const index = products.findIndex((product) => product.id === action.id);
      products.splice(index, 1);
      return {
        ...state,
        items: products,
      };
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selected: action.id,
      };
    default:
      return state;
  }
};

export default products;
