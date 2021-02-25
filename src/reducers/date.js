const initialDate = new Date();

const date = (state = initialDate, action) => {
  switch (action.type) {
    case 'INCREASE_DATE':
      state.setDate(state.getDate() + 1);
      return state;
    case 'DECREASE_DATE':
      state.setDate(state.getDate() - 1);
      return state;
    default:
      return state;
  }
};

export default date;
