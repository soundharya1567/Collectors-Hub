import { HashRouter, Routes, Route } from "react-router-dom";

import Collection from "./pages/Collection";
import CommunityFeed from "./pages/CommunityFeed";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import PostDetails from "./pages/PostDetails";
import SavedPosts from "./pages/SavedPosts";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        {/* Marketplace */}
        <Route path="/" element={<Marketplace />} />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Community Feed */}
        <Route path="/community" element={<CommunityFeed />} />

        {/* Community Post Details */}
        <Route path="/post/:id" element={<PostDetails />} />

        {/* Saved Community Posts */}
        <Route path="/saved-posts" element={<SavedPosts />} />

        {/* Collection */}
        <Route path="/collection" element={<Collection />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
