export const getTotalPrice = (categories) => {

    let totalPrice = 0;

    categories.forEach(category => {

        totalPrice += parseFloat(getTotalCategoryPrice(category.items));

    });

    return parseFloat(totalPrice).toFixed(2);
}

export const getTotalCategoryPrice = (items) => {

    let totalPrice = 0;

    items.forEach(item => {

      totalPrice += item.price * (parseInt(item.amount) || 0);

    });

    return parseFloat(totalPrice).toFixed(2);

  }