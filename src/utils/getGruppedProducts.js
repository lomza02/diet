export const getGroupedProductsWithDetails = (groupedMeals, products) => {
    if(!groupedMeals) return [];
   const productsWithDetails = groupedMeals.map(meal => {
    const item = products.find(item => item.id === meal.productId);
    const kcals = item.kcals * meal.amount/100;
    const fats = item.fats * meal.amount/100;
    const carbs = item.carbs * meal.amount/100;
    const proteins = item.proteins * meal.amount/100;
    return {
        name: item.name,
        id: meal.id,
        amount: meal.amount,
        kcals: parseFloat(kcals.toFixed(2)),
        fats: parseFloat(fats.toFixed(2)),
        carbs: parseFloat(carbs.toFixed(2)),
        proteins: parseFloat(proteins.toFixed(2)),
    }
})
    return productsWithDetails;
}

export const getTotalDailyValues = (groupedProductsWithDetails) => {
    const getValue = (key) => {
        const value = groupedProductsWithDetails.reduce((previousValue, currentValue) => previousValue + currentValue[key], 0);
        const maxTwoDecimalsNumber = parseFloat(value.toFixed(2));
        return maxTwoDecimalsNumber;
    }
    return {
        carbs: getValue('carbs'),
        fats: getValue('fats'),
        proteins: getValue('proteins'),
        kcals: getValue('kcals'),
    }
}