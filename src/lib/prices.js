export const getTotalPrice = (itemCategories) => {

    let totalPrice = 0;

    itemCategories.forEach(itemCategory => {

        totalPrice += parseFloat(getTotalCategoryPrice(itemCategory.items));

    });

    if (totalPrice > 1000000) {
      totalPrice = 1000000;
    }

    return parseFloat(totalPrice).toFixed(2);
}

export const getTotalCategoryPrice = (items) => {

    let totalPrice = 0;

    items.forEach(item => {

      totalPrice += item.price * (parseInt(item.amount) || 0);

    });

    if (totalPrice > 1000000) {
      totalPrice = 1000000;
    }

    return parseFloat(totalPrice).toFixed(2);

  }