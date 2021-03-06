import bcrpt from 'bcryptjs'
const data = {
  users: [
    {
      name: "Kiran",
      email: "codewithkiran11@example.com",
      password: bcrpt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: "Meena",
      email: "meena@example.com",
      password: bcrpt.hashSync('123456'),
      isAdmin: false,
    }
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: 'https://m.media-amazon.com/images/I/61RqedeafJL._AC_UL480_FMwebp_QL65_.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: 'https://m.media-amazon.com/images/I/41Aemtzsa3L._AC_UL480_FMwebp_QL65_.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: 'https://m.media-amazon.com/images/I/71vz6n+YCLL._AC_UL480_FMwebp_QL65_.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: 'https://m.media-amazon.com/images/I/71t2MOBgtcL._AC_UL480_FMwebp_QL65_.jpg',
      price: 65,
      countInStock: 0,
      brand: 'Puma',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },

  ],
};
export default data;