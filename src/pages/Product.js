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
  const [activeTab, setActiveTab] = useState("details");

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

  const totalRatings = Object.values(ratingDistribution).reduce((a, b) => a + b, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    const id = e.target.productId.value.trim();
    if (id === "") return;
    setMessage("");
    setProduct(null);
    setRelated([]);
    setActiveTab("details");
    setProductId(id);
    e.target.productId.value = "";
  };

  useEffect(() => {
    if (productId.length === 0) return;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_URL}/${productId}`);
        const data = response.data;
        setProduct({
          id: data.id,
          title: data.title,
          image: data.image,
          price: data.price,
          description: data.description,
          category: data.category,
          rating: data.rating,
        });
        setMainImage(data.image);
        setMessage("");

        const relatedRes = await axios.get(
          `${API_URL}/category/${encodeURIComponent(data.category)}`
        );
        const relatedList = relatedRes.data
          .filter((item) => item.id !== data.id)
          .slice(0, 4);
        setRelated(relatedList);
      } catch (error) {
        console.error(error.message);
        setProduct(null);
        setRelated([]);
        setMessage("Product not found. Please enter an ID from 1 to 20.");
      }
    };

