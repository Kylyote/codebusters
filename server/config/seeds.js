const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
      {
        name: 'Intel Core i7 Processor',
        description:
          'High-performance processor for demanding applications.',
        image: '../../client/src/assets/img/computer.png',
        category: categories[0]._id,
        price: 399.99,
        quantity: 100
      },
      {
        name: '16GB DDR4 RAM',
        description:
          'High-speed memory for smooth multitasking.',
        image: '../../client/src/assets/img/computer.png',
        category: categories[0]._id,
        price: 149.99,
        quantity: 200
      },
      {
        name: '256GB SSD',
        category: categories[1]._id,
        description:
          'Fast solid-state drive for quick data access.',
        image: '../../client/src/assets/img/computer.png',
        price: 129.99,
        quantity: 50
      },
      {
        name: 'GeForce RTX 3080 Graphics Card',
        category: categories[1]._id,
        description:
          'Powerful graphics card for gaming and 3D rendering.',
        image: '../../client/src/assets/img/computer.png',
        price: 699.99,
        quantity: 20
      },
      {
        name: 'Dell XPS 15 Laptop',
        category: categories[1]._id,
        description:
          'High-performance laptop for professional use.',
        image: '../../client/src/assets/img/computer.png',
        price: 1299.99,
        quantity: 30
      },
      {
        name: 'ASUS ROG Strix Motherboard',
        category: categories[2]._id,
        description:
          'High-quality motherboard for building custom PCs.',
        image: '../../client/src/assets/img/computer.png',
        price: 449.99,
        quantity: 10
      },
      {
        name: 'Corsair RM850x Power Supply',
        category: categories[2]._id,
        description:
          'High-capacity power supply for power-hungry systems.',
        image: '../../client/src/assets/img/computer.png',
        price: 199.99,
        quantity: 50
      },
      {
        name: 'Cooler Master Hyper 212 RGB CPU Cooler',
        category: categories[2]._id,
        description:
          'Efficient CPU cooler with customizable RGB lighting.',
        image: '../../client/src/assets/img/computer.png',
        price: 129.99,
        quantity: 100
      },
      {
        name: 'Razer Naga Pro Wireless Gaming Mouse',
        category: categories[3]._id,
        description:
          'High-precision wireless gaming mouse.',
        image: '../../client/src/assets/img/computer.png',
        price: 149.99,
        quantity: 200
      },
      {
        name: 'Logitech G502 HERO Gaming Mouse',
        category: categories[3]._id,
        description:
          'High-performance gaming mouse with customizable buttons.',
        image: '../../client/src/assets/img/computer.png',
        price: 89.99,
        quantity: 300
      },
      {
        name: 'Amazon Fire TV Stick 4K',
        category: categories[3]._id,
        description:
          'Streaming device for watching movies and TV shows.',
        image: '../../client/src/assets/img/computer.png',
        price: 39.99,
        quantity: 1000
      },
      {
        name: 'Samsung 970 EVO Plus SSD',
        category: categories[4]._id,
        description:
          'High-speed solid-state drive for quick data access.',
        image: '../../client/src/assets/img/computer.png',
        price: 149.99,
        quantity: 200
      },
      {
        name: 'ASUS ROG Zephyrus G14 Gaming Laptop',
        category: categories[4]._id,
        description:
          'High-performance gaming laptop with powerful hardware.',
        image: '../../client/src/assets/img/computer.png',
        price: 1999.99,
        quantity: 30
      },
      {
        name: 'HP ENVY x360 2-in-1 Laptop',
        category: categories[4]._id,
        description:
          'Versatile 2-in-1 laptop for both work and play.',
        image: '../../client/src/assets/img/computer.png',
        price: 1199.99,
        quantity: 10
      },
      {
        name: 'Razer Blade 15 Advanced Model',
        category: categories[4]._id,
        description:
          'High-performance gaming laptop with powerful hardware.',
        image: '../../client/src/assets/img/computer.png',
        price: 1799.99,
        quantity: 5
      }
    ]
  );

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    username: 'pamela@testmail.com',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });
     

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    username: 'eholt@testmail.com',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
