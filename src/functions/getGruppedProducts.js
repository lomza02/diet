const getGruppedProducts = (groupedMeals, products) => {
  if (!groupedMeals) return [];
  const productsWithDetails = groupedMeals.map((meal) => {
    const product = products.find((product) => product._id === meal.productId);
    if (!product) {
      throw Error(`Product don't exists`);
    }
    const kcals = (product.kcals * meal.amount) / 100;
    const fats = (product.fats * meal.amount) / 100;
    const carbs = (product.carbs * meal.amount) / 100;
    const proteins = (product.proteins * meal.amount) / 100;
    return {
      name: product.name,
      _id: meal._id,
      amount: meal.amount,
      kcals: parseFloat(kcals.toFixed(2)),
      fats: parseFloat(fats.toFixed(2)),
      carbs: parseFloat(carbs.toFixed(2)),
      proteins: parseFloat(proteins.toFixed(2)),
    };
  });
  return productsWithDetails;
};

export default getGruppedProducts;
