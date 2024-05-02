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
      name: "Tin of Cookies",
      description: "Some good cookies.",
      image: "cookie-tin.jpg",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
    },
    {
      name: "Canned Coffee",
      description: "Coffee, in a can?",
      image: "canned-coffee.jpg",
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
    },
    {
      name: "Toilet Paper",
      category: categories[1]._id,
      description: "Do something with this.",
      image: "toilet-paper.jpg",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Handmade Soap",
      category: categories[1]._id,
      description: "Handmade for the hands.",
      image: "soap.jpg",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "Set of Wooden Spoons",
      category: categories[1]._id,
      description: "Stir your pots and pans.",
      image: "wooden-spoons.jpg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Camera",
      category: categories[2]._id,
      description: "Click",
      image: "camera.jpg",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Tablet",
      category: categories[2]._id,
      description: "Don't give this to your kid 🙏",
      image: "tablet.jpg",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "Tales at Bedtime",
      category: categories[3]._id,
      description: "Some stories for the feeble minded.",
      image: "bedtime-book.jpg",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Spinning Top",
      category: categories[4]._id,
      description: "Can spin for 10 whole seconds.",
      image: "spinning-top.jpg",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: "Set of Plastic Horses",
      category: categories[4]._id,
      description: "Wat",
      image: "plastic-horses.jpg",
      price: 2.99,
      quantity: 1000,
    },
    {
      name: "Teddy Bear",
      category: categories[4]._id,
      description: "Cuddle and tuck him in, he's pretty cool.",
      image: "teddy-bear.jpg",
      price: 7.99,
      quantity: 100,
    },
    {
      name: "Alphabet Blocks",
      category: categories[4]._id,
      description: "To help you learn.",
      image: "alphabet-blocks.jpg",
      price: 9.99,
      quantity: 600,
    },
  ]);

  console.log("products seeded");

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
