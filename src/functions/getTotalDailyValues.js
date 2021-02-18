const getTotalDailyValues = (mealsWithDetails) => {
  const getValue = (key) => {
    const value = mealsWithDetails.reduce(
      (previousValue, currentValue) => previousValue + currentValue[key],
      0
    );
    const maxTwoDecimalsNumber = parseFloat(value.toFixed(2));
    return maxTwoDecimalsNumber;
  };
  return {
    carbs: getValue('carbs'),
    fats: getValue('fats'),
    proteins: getValue('proteins'),
    kcals: getValue('kcals'),
  };
};

export default getTotalDailyValues;
