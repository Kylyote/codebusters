const { User, Product, Category, Order, Review } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
// const stripe = require("stripe")(
//   "sk_test_51MmUhiJWBUm8M1eN7zGH87OtGnQPi1BiZMFgpcHzpEQa86sUDL0pGs6mV9fuddjdJrEImyvK5tJCqexf4DBJOo5000BOOUZLm7"
// );

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      console.log(args);
      if (args._id) {
        const user = await User.findById(args._id)
          .populate({
            path: "orders.products",
            populate: "category",
          })
          .populate("services")
          .populate("languages");

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      } else if (context.user) {
        const user = await User.findById(context.user._id)
          .populate({
            path: "orders.products",
            populate: "category",
          })
          .populate("services")
          .populate("languages");

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw AuthenticationError;
    },
    users: async () => {
      return await User.find().populate("services").populate("languages");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw AuthenticationError;
    },
    // Find all reviews associated with a certain User
    reviews: async (parent, args, context) => {
      if (args._id) {
        const review = await Review.findById(args._id).populate("reviews");
        return review;
      } else {
        return "No reviews found.";
      }
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },

    addLanguage: async (parent, args, context) => {
      console.log("here");
      console.log(context.user);
      if (context.user) {
        console.log(args);
        return await User.findByIdAndUpdate(
          args.id,
          {
            $push: {
              languages: [
                {
                  language: args.languages[0].language,
                  skill: args.languages[0].skill,
                },
              ],
            },
          },
          {
            new: true,
          }
        );
      }
    },

    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    // Adds a review to the users document in the database from the Review model
    addReview: async (parent, args, context) => {
      if (args._id) {
        console.log(args);
        return await User.findByIdAndUpdate(
          args._id,
          {
            $push: {
              reviews: [
                {
                  reviewText: args.reviews[0].reviewText,
                  reviewAuthor: context.user.username,
                  reviewDate: args.reviews[0].reviewDate,
                  reviewScore: args.reviews[0].reviewScore,
                },
              ],
            },
          },
          {
            new: true,
          }
        );
      }
    },
    updateScore: async (parent, args, context) => {
      if (context.user) {
        console.log(`This is from updateScore: ${args}`);
        const numbers = await User.findById(args._id).populate(
          "reviews.reviewScore"
        );
        console.log(collection);
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = sum / numbers.length;
        console.log(average);
        return await User.findByIdAndUpdate(
          args._id,
          {
            $push: {
              reviews: [
                {
                  reviewScore: average,
                },
              ],
            },
          },
          {
            new: true,
          }
        );
      }
    },
  },
};

module.exports = resolvers;
