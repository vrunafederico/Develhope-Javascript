const order = {};

const ordercity = order.customer.address?.city;

if (order.customer.address.city === false) {
  console.log('City is required');
}