/* eslint-disable no-loss-of-precision */
var orderHistory = [
  {
    orderDate: 20200804,
    orderTotal: 34,
    shipTo: 'JS Masher',
    orderNumber: 11439416898772232,
    items:
    [
      {
        deliveryDate: 20200808,
        deliveryMethod: null,
        name: 'JavaScript for impatient programmers',
        author: 'Ruschmayer, Dr. Axel',
        returnCloseDate: 20200907,
        price: 31.55
      }
    ]
  },

  {
    orderDate: 20200719,
    orderTotal: 44.53,
    shipTo: 'JS Masher',
    orderNumber: 11399842681280257,
    items:
    [
      {
        deliveryDate: 20200720,
        deliveryMethod: 'resident',
        name: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnCloseDate: 20200819,
        price: 41.33
      }
    ]
  },

  {
    orderDate: 20200704,
    orderTotal: 17.22,
    shipTo: 'JS Masher',
    orderNumber: 11428755579059409,
    items:
    [
      {
        deliveryDate: 20200707,
        deliveryMethod: 'resident',
        name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        author: null,
        returnCloseDate: 20200805,
        price: 15.98
      }
    ]
  },

  {
    orderDate: 20200703,
    orderTotal: 138.93,
    shipTo: 'JS Masher',
    orderNumber: 11328831772648248,
    items:
    [
      {
        deliveryDate: 20200705,
        deliveryMethod: null,
        name: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        returnCloseDate: 20200804,
        price: 94.95
      },
      {
        deliveryDate: 20200705,
        deliveryMethod: null,
        name: 'The Art of Sql',
        author: null,
        returnCloseDate: 20200804,
        price: 33.99
      }
    ]
  }
];

console.log('Order History:', orderHistory);
