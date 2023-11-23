export const fakes = {
  queryUser: {
    loading: false,
    error: null,
    data: {
      user: {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        username: "johndoe123",
        subscription: "Premium",
        languages: [
          {
            _id: "1",
            language: "Java",
            skill: "Expert",
          },
          {
            _id: "2",
            language: "Python",
            skill: "Intermediate",
          },
          {
            _id: "3",
            language: "JavaScript",
            skill: "Beginner",
          },
        ],
        services: [
          {
            _id: "1",
            service: "Web Development",
            skill: "Expert",
          },
          {
            _id: "2",
            service: "Graphic Design",
            skill: "Intermediate",
          },
          {
            _id: "3",
            service: "Social Media Marketing",
            skill: "Beginner",
          },
        ],
        orders: [
          {
            _id: "1",
            purchaseDate: "2023-10-04",
            products: [
              {
                _id: "1",
                name: "Product A",
                description: "This is a product description.",
                price: 19.99,
                quantity: 2,
                image: "image.png",
              },
              {
                _id: "2",
                name: "Product B",
                description: "This is another product description.",
                price: 24.99,
                quantity: 1,
                image: "image2.png",
              },
            ],
          },
          {
            _id: "2",
            purchaseDate: "2023-11-15",
            products: [
              {
                _id: "3",
                name: "Product C",
                description: "This is a third product description.",
                price: 39.99,
                quantity: 1,
                image: "image3.png",
              },
            ],
          },
        ],
      },
    },
  },
};
