export const convertToLbs = (weight) => {

    weight.number = Math.abs(weight.number);

    switch (weight.unit) {
      case "oz":
        weight.number /= 16;
        break;
      case "g":
        weight.number /= 453.592;
        break;
      case "kg":
        weight.number /= 0.453592;
        break;
    }

    weight.unit = "lbs";
    return weight;

}

export const getTotalWeight = (itemCategories) => {

    let totalWeight = 0;

    itemCategories.forEach(itemCategory => {

      totalWeight += getTotalCategoryWeight(itemCategory.items);

    });

    if (totalWeight > 10000) {
      totalWeight = 10000;
    }

    return Math.round(totalWeight * 100) / 100;
}

export const getTotalCategoryWeight = (items) => {

    let totalWeight = 0;

    items.forEach(item => {

      let weightLbs = convertToLbs(item.weight).number;

      totalWeight += weightLbs * (parseInt(item.amount) || 0);

    });

    if (totalWeight > 10000) {
      totalWeight = 10000;
    }

    return Math.round(totalWeight * 100) / 100;

  }