import saree from "../assets/images/saree.jpg";
import rolex from "../assets/images/rolex.jpg";
import shirt from "../assets/images/shirt.jpg";

const posts = [
  {
    id: 1,
    username: "Priya Sharma",
    category: "Women's Fashion",
    productImage: saree,
    caption: "My beautiful vintage silk saree collection ✨",
    likes: 25,
    comments: 8,
  },

  {
    id: 2,
    username: "Kiran Kumar",
    category: "Luxury Watches",
    productImage: rolex,
    caption: "Added this rare Rolex watch to my collection ⌚",
    likes: 50,
    comments: 12,
  },

  {
    id: 3,
    username: "Meera Joshi",
    category: "Men's Fashion",
    productImage: shirt,
    caption: "Found this classic vintage shirt for my collection 👕",
    likes: 35,
    comments: 6,
  },
];

export default posts;
