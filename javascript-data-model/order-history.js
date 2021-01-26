/* eslint-disable no-loss-of-precision */
var orderHistory = [
  {
    orderDate: 20200804,
    orderTotal: 34,
    shipTo: 'JS Masher',
    orderNumber: 11439416898772232,
    deliveryDate: 20200808,
    deliveryMethod: null,
    items: [
      {
        name: 'JavaScript for impatient programmers',
        author: 'Ruschmayer, Dr. Axel',
        price: 31.55,
        returnCloseDate: 20200907
      }
    ]
  },

  {
    orderDate: 20200719,
    orderTotal: 44.53,
    shipTo: 'JS Masher',
    orderNumber: 11399842681280257,
    deliveryDate: 20200720,
    deliveryMethod: 'resident',
    items: [
      {
        name: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        price: 41.33,
        returnCloseDate: 20200819
      }
    ]
  },

  {
    orderDate: 20200704,
    orderTotal: 17.22,
    shipTo: 'JS Masher',
    orderNumber: 11428755579059409,
    deliveryDate: 20200707,
    deliveryMethod: 'resident',
    items: [
      {
        name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        author: null,
        price: 15.98,
        returnCloseDate: 20200805
      }
    ]
  },

  {
    orderDate: 20200703,
    orderTotal: 138.93,
    shipTo: 'JS Masher',
    orderNumber: 11328831772648248,
    deliveryDate: 20200705,
    deliveryMethod: null,
    items: [
      {
        name: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        price: 94.95,
        returnCloseDate: 20200804
      },
      {
        name: 'The Art of Sql',
        author: 'Faroult, Stephane',
        price: 33.99,
        returnCloseDate: 20200804
      }
    ]
  }
];

console.log('Order History:', orderHistory);
