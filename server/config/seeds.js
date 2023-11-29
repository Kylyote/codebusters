const db = require("./connection");
const { User, Product, Category } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Category", "categories");
  await cleanDB("Product", "products");
  await cleanDB("User", "users");

  const categories = await Category.insertMany([
    { name: "Food" },
    { name: "Household Supplies" },
    { name: "Electronics" },
    { name: "Books" },
    { name: "Toys" },
  ]);

  console.log("categories seeded");

  const products = await Product.insertMany([
    {
      name: "Intel Core i7 Processor",
      description: "High-performance processor for demanding applications.",
      image: "ICP.jpeg",
      category: categories[0]._id,
      price: 399.99,
      quantity: 100,
    },
    {
      name: "16GB DDR4 RAM",
      description: "High-speed memory for smooth multitasking.",
      image: "3.jpeg",
      category: categories[0]._id,
      price: 149.99,
      quantity: 200,
    },
    {
      name: "256GB SSD",
      category: categories[1]._id,
      description: "Fast solid-state drive for quick data access.",
      image: "256GB.png",
      price: 129.99,
      quantity: 50,
    },
    {
      name: "GeForce RTX 3080 Graphics Card",
      category: categories[1]._id,
      description: "Powerful graphics card for gaming and 3D rendering.",
      image: "4.jpeg",
      price: 699.99,
      quantity: 20,
    },
    {
      name: "Dell XPS 15 Laptop",
      category: categories[1]._id,
      description: "High-performance laptop for professional use.",
      image: "5.jpeg",
      price: 1299.99,
      quantity: 30,
    },
    {
      name: "ASUS ROG Strix Motherboard",
      category: categories[2]._id,
      description: "High-quality motherboard for building custom PCs.",
      image: "6.jpeg",
      price: 449.99,
      quantity: 10,
    },
    {
      name: "ASUS ROG Zephyrus G14 Gaming Laptop",
      category: categories[4]._id,
      description: "High-performance gaming laptop with powerful hardware.",
      image: "13.jpeg",
      price: 1999.99,
      quantity: 30,
    },

    {
      name: "Razer Naga Pro Wireless Gaming Mouse",
      category: categories[3]._id,
      description: "High-precision wireless gaming mouse.",
      image: "9.jpeg",
      price: 149.99,
      quantity: 200,
    },
    {
      name: "Cooler Master Hyper 212 RGB CPU Cooler",
      category: categories[2]._id,
      description: "Efficient CPU cooler with customizable RGB lighting.",
      image: "8.jpeg",
      price: 129.99,
      quantity: 100,
    },

    {
      name: "Logitech G502 HERO Gaming Mouse",
      category: categories[3]._id,
      description: "High-performance gaming mouse with customizable buttons.",
      image: "10.jpeg",
      price: 89.99,
      quantity: 300,
    },

    {
      name: "Corsair RM850x Power Supply",
      category: categories[2]._id,
      description: "High-capacity power supply for power-hungry systems.",
      image: "7.jpeg",
      price: 199.99,
      quantity: 50,
    },
    {
      name: "Amazon Fire TV Stick 4K",
      category: categories[3]._id,
      description: "Streaming device for watching movies and TV shows.",
      image: "11.jpeg",
      price: 39.99,
      quantity: 1000,
    },
    {
      name: "Samsung 970 EVO Plus SSD",
      category: categories[4]._id,
      description: "High-speed solid-state drive for quick data access.",
      image: "12.jpeg",
      price: 149.99,
      quantity: 200,
    },
    {
      name: "HP ENVY x360 2-in-1 Laptop",
      category: categories[4]._id,
      description: "Versatile 2-in-1 laptop for both work and play.",
      image: "14.jpeg",
      price: 1199.99,
      quantity: 10,
    },
    {
      name: "Razer Blade 15 Advanced Model",
      category: categories[4]._id,
      description: "High-performance gaming laptop with powerful hardware.",
      image: "15.jpeg",
      price: 1799.99,
      quantity: 5,
    },
  ]);

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    username: "pamela@testmail.com",
    email: "pamela@testmail.com",
    password: "password12345",
    subscription: "Free",
    avgScore: 4.8,
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    username: "eholt@testmail.com",
    email: "eholt@testmail.com",
    password: "password12345",
    subscription: "Gold",
    avgScore: 4.9,
    languages: [
      {
        language: "JavaScript",
        skill: "Jedi Master",
      },
      {
        language: "Python",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 4.5,
    languages: [
      {
        language: "JavaScript",
        skill: "Jedi Knight",
      },
      {
        language: "Python",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    email: "janedoe@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 4.7,
    services: [
      {
        service: "Website Building",
        skill: "Jedi Master",
      },
      {
        service: "Tutoring",
        skill: "Padawan",
      },
    ],

    languages: [
      {
        language: "Python",
        skill: "Jedi Knight",
      },
      {
        language: "JavaScript",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Bob",
    lastName: "Smith",
    username: "bobsmith",
    email: "bobsmith@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 1.2,
    servies: [
      {
        service: "Website Building",
        skill: "Youngling",
      },
      {
        service: "Code Review",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "Java",
        skill: "Youngling",
      },
      {
        language: "C++",
        skill: "Padawan",
      },
    ],
  }),
    await User.create({
      firstName: "Alice",
      lastName: "Smith",
      username: "alicesmith",
      email: "alicesmith@example.com",
      password: "password",
      subscription: "Gold",
      avgScore: 4.9,
      services: [
        {
          service: "Website Building",
          skill: "Jedi Knight",
        },
        {
          service: "Code Review",
          skill: "Padawan",
        },
      ],
      languages: [
        {
          language: "Python",
          skill: "Jedi Master",
        },
        {
          language: "JavaScript",
          skill: "Padawan",
        },
      ],
    });

  await User.create({
    firstName: "Bob",
    lastName: "Johnson",
    username: "bobjohnson",
    email: "bobjohnson@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 4.5,
    services: [
      { service: "Website Building", skill: "Youngling" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      {
        language: "HTML",
        skill: "Youngling",
      },
      {
        language: "CSS",
        skill: "Jedi Knight",
      },
    ],
  });

  await User.create({
    firstName: "Charlie",
    lastName: "Williams",
    username: "charliewilliams",
    email: "charliewilliams@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 4.7,
    services: [
      {
        service: "Website Building",
        skill: "Jedi Master",
      },
      {
        service: "Code Review",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "SQL",
        skill: "Padawan",
      },
      {
        language: "NoSQL",
        skill: "Jedi Knight",
      },
    ],
  });

  await User.create({
    firstName: "Dave",
    lastName: "Brown",
    username: "davebrown",
    email: "davebrown@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 3.2,
    services: [
      {
        service: "Website Building",
        skill: "Youngling",
      },
      {
        service: "Tutoring",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "Python",
        skill: "Youngling",
      },
      {
        language: "Java",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Emma",
    lastName: "Williams",
    username: "emmawilliams",
    email: "emmawilliams@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 1.3,
    services: [
      {
        service: "Website Building",
        skill: "Youngling",
      },
      {
        service: "Tutoring",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "C#",
        skill: "Youngling",
      },
      {
        language: "TypeScript",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Sam",
    lastName: "Johnson",
    username: "samjohnson",
    email: "samjohnson@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 3.7,
    services: [
      {
        service: "Website Building",
        skill: "Jedi Knight",
      },
      {
        service: "Tutoring",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "Rust",
        skill: "Jedi Knight",
      },
      {
        language: "Go",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Sophia",
    lastName: "Brown",
    username: "sophiabrown",
    email: "sophiabrown@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 2.2,
    services: [
      {
        service: "Website Building",
        skill: "Youngling",
      },
      {
        service: "Code Review",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "Swift",
        skill: "Youngling",
      },
      {
        language: "Kotlin",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Oliver",
    lastName: "Davis",
    username: "oliverdavis",
    email: "oliverdavis@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 4.8,
    services: [
      {
        service: "Website Building",
        skill: "Jedi Knight",
      },
      {
        service: "Code Review",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "Lua",
        skill: "Jedi Master",
      },
      {
        language: "Zsh",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Isabella",
    lastName: "Miller",
    username: "isabellamiller",
    email: "isabellamiller@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 2.4,
    services: [
      {
        service: "Website Building",
        skill: "Youngling",
      },
      {
        service: "Code Review",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "Bash",
        skill: "Youngling",
      },
      {
        language: "PowerShell",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Tom",
    lastName: "Smith",
    username: "tomsmith",
    email: "tomsmith@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 2.2,
    services: [
      {
        service: "Website Building",
        skill: "Jedi Knight",
      },
      {
        service: "Code Review",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "Ruby",
        skill: "Youngling",
      },
      {
        language: "PHP",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Sarah",
    lastName: "Johnson",
    username: "sarahjohnson",
    email: "sarahjohnson@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 1.3,
    services: [
      {
        service: "Website Building",
        skill: "Youngling",
      },
      {
        service: "Tutoring",
        skill: "Padawan",
      },
    ],
    languages: [
      {
        language: "R",
        skill: "Youngling",
      },
      {
        language: "Julia",
        skill: "Padawan",
      },
    ],
  });

  await User.create({
    firstName: "Eva",
    lastName: "Johnson",
    username: "evajohnson",
    email: "evajohnson@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 3.1,
    services: [
      { service: "Website Building", skill: "Youngling" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "SQL", skill: "Youngling" },
      { language: "NoSQL", skill: "Jedi Knight" },
    ],
  });

  await User.create({
    firstName: "James",
    lastName: "Williams",
    username: "jameswilliams",
    email: "jameswilliams@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 4.9,
    services: [
      { service: "Website Building", skill: "Jedi Master" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "HTML", skill: "Youngling" },
      { language: "CSS", skill: "Jedi Knight" },
    ],
  });

  await User.create({
    firstName: "Robert",
    lastName: "Jones",
    username: "robertjones",
    email: "robertjones@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 2.3,
    services: [
      { service: "Website Building", skill: "Youngling" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "Python", skill: "Youngling" },
      { language: "JavaScript", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Susan",
    lastName: "Williams",
    username: "susanwilliams",
    email: "susanwilliams@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 4.3,
    services: [
      { service: "Website Building", skill: "Jedi Master" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "HTML", skill: "Youngling" },
      { language: "CSS", skill: "Jedi Knight" },
    ],
  });

  await User.create({
    firstName: "Michael",
    lastName: "Doe",
    username: "michaeldoe",
    email: "michaeldoe@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 4.0,
    languages: [
      { language: "JavaScript", skill: "Jedi Knight" },
      { language: "Python", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Linda",
    lastName: "Doe",
    username: "lindadoe",
    email: "lindadoe@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 3.9,
    services: [
      { service: "Website Building", skill: "Jedi Master" },
      { service: "Tutoring", skill: "Padawan" },
    ],
    languages: [
      { language: "Python", skill: "Jedi Knight" },
      { language: "JavaScript", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Maria",
    lastName: "Johnson",
    username: "mariajohnson",
    email: "mariajohnson@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 3.8,
    services: [
      { service: "Website Building", skill: "Youngling" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "Python", skill: "Youngling" },
      { language: "JavaScript", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Jessica",
    lastName: "Williams",
    username: "jessicawilliams",
    email: "jessicawilliams@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 3.7,
    services: [
      { service: "Website Building", skill: "Jedi Master" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "HTML", skill: "Youngling" },
      { language: "CSS", skill: "Jedi Knight" },
    ],
  });

  await User.create({
    firstName: "Anthony",
    lastName: "Doe",
    username: "anthonydoe",
    email: "anthonydoe@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 3.6,
    languages: [
      { language: "JavaScript", skill: "Jedi Knight" },
      { language: "Python", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Lisa",
    lastName: "Doe",
    username: "lisadoe",
    email: "lisadoe@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 4.6,
    services: [
      { service: "Website Building", skill: "Jedi Master" },
      { service: "Tutoring", skill: "Padawan" },
    ],
    languages: [
      { language: "Python", skill: "Jedi Knight" },
      { language: "JavaScript", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Peter",
    lastName: "Smith",
    username: "petersmith",
    email: "petersmith@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 1.5,
    services: [
      { service: "Website Building", skill: "Youngling" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "Java", skill: "Youngling" },
      { language: "C++", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Paul",
    lastName: "Davis",
    username: "pauldavis",
    email: "pauldavis@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 3.4,
    services: [
      { service: "Website Building", skill: "Jedi Knight" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "Swift", skill: "Youngling" },
      { language: "Kotlin", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Emily",
    lastName: "Williams",
    username: "emilywilliams",
    email: "emilywilliams@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 3.3,
    services: [
      { service: "Website Building", skill: "Jedi Master" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "HTML", skill: "Youngling" },
      { language: "CSS", skill: "Jedi Knight" },
    ],
  });

  await User.create({
    firstName: "William",
    lastName: "Doe",
    username: "williamdoe",
    email: "williamdoe@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 3.2,
    languages: [
      { language: "JavaScript", skill: "Jedi Knight" },
      { language: "Python", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Laura",
    lastName: "Doe",
    username: "lauradoe",
    email: "lauradoe@example.com",
    password: "password",
    subscription: "Gold",
    avgScore: 4.6,
    services: [
      { service: "Website Building", skill: "Jedi Master" },
      { service: "Tutoring", skill: "Padawan" },
    ],
    languages: [
      { language: "Python", skill: "Jedi Knight" },
      { language: "JavaScript", skill: "Padawan" },
    ],
  });

  await User.create({
    firstName: "Henry",
    lastName: "Smith",
    username: "henrysmith",
    email: "henrysmith@example.com",
    password: "password",
    subscription: "Free",
    avgScore: 1.5,
    services: [
      { service: "Website Building", skill: "Youngling" },
      { service: "Code Review", skill: "Padawan" },
    ],
    languages: [
      { language: "Java", skill: "Youngling" },
      { language: "C++", skill: "Padawan" },
    ],
  });

  console.log("users seeded");

  process.exit();
});
