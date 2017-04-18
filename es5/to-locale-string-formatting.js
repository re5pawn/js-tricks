var price = 777;

var priceEur = price.toLocaleString('en', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 2
});

console.log(priceEur); // '€777.00'
