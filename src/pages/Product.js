import { useState, useEffect } from "react";
import axios from "axios";
import "../css/index.css";

function Product() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");
  const [related, setRelated] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [showAllPurchases, setShowAllPurchases] = useState(false);
  const [activeTab, setActiveTab] = useState("details"); // "details" 或 "reviews"

  const API_URL = "https://fakestoreapi.com/products";

  const recentPurchases = [
    { name: "Alice", time: "2 minutes ago" },
    { name: "Bob", time: "7 minutes ago" },
    { name: "Charlie", time: "44 minutes ago" },
    { name: "Diana", time: "1 hour ago" },
    { name: "Eve", time: "2 hours ago" },
  ];

  const sampleReviews = [
    { user: "Helen M.", rating: 5, text: "Excellent product, highly recommend!" },
    { user: "Jim D.", rating: 4, text: "Pretty good, but shipping was slow." },
    { user: "Andrew C.", rating: 4, text: "Good quality for the price." },
  ];

  const ratingDistribution = {
    5: 28,
    4: 9,
    3: 3,
    2: 2,
    1: 1,
  };



