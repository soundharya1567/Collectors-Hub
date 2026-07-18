import saree from "../assets/images/saree.jpg";
import rolex from "../assets/images/rolex.jpg";
import chair from "../assets/images/chair.jpg";

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
    category: "Antique Furniture",
    productImage: chair,
    caption: "Found this antique wooden chair from 1950s 🪑",
    likes: 35,
    comments: 6,
  },
];

export default posts;
