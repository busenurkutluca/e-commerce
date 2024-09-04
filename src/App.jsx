import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./assets/Sayfalar/Home"
import About from "./assets/Sayfalar/About"
import Blog from "./assets/Sayfalar/Blog"
import Contact from "./assets/Sayfalar/Contact"
import Pages from "./assets/Sayfalar/Pages"
import Shop from "./assets/Sayfalar/Shop"
import Navbar from './assets/navbar/navbar-dark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import İkon from './assets/navbar/navbar-light'; // navbar-light.jsx dosyasından Element bileşenini import edin
import Example from './assets/carousel/carousel-inner';
import Examples from './assets/carousel2/carousel-inner-iki';
import Fluids from './assets/container-fluid/container-fluids';
import Cart from './assets/desktop-product-carts/cart';
import ProductCard from './assets/desktop-product-carts/ProductCard';
import ProductPage from './assets/desktop-product-carts/ProductPage';
import BlogCard from './assets/desktop-blog-3/BlogCard';
import Footer from './assets/Footers/footer';

function App() {
    return (
<>
        <Router>
            <Routes>
                <Route path="/" element={<İkon />} />
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pages" element={<Pages />} />
            </Routes>
            <Navbar />

            <Example />
            <Examples />
            <Cart />
            <ProductCard />
            <ProductPage />
            <Fluids />
            <BlogCard />
            <Footer />
            <FontAwesomeIcon/>
        </Router>
        </>
    );
}

export default App;
