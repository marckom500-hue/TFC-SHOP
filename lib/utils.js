export const formatPrice = (price) =>
  price.toLocaleString('fr-FR') + ' FCFA';

export const calcDiscount = (price, oldPrice) =>
  oldPrice ? Math.round((1 - price / oldPrice) * 100) : null;
