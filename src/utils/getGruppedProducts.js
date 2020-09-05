

//get grouped products with details
export const getGroupedProductsWithDetails = (groupedMeals, products) => {
    if(!groupedMeals) return [];
   const productsWithDetails = groupedMeals.map(meal => {
    const item = products.find(item => item.id === meal.productId);
    return {
        name: item.name,
        id: meal.id,
        amount: meal.amount,
        kcals: item.kcal * meal.amount/100,
        fats: item.fat * meal.amount/100,
        carbs: item.carbs * meal.amount/100,
        proteins: item.protein * meal.amount/100,
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