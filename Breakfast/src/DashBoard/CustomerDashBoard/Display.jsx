import React, { useEffect, useState } from "react";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../FirebaseCode/FirebaseCode";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Display.css"; // Import the CSS file

const Display = ({ eee }) => {
  const AdminLocalData = JSON.parse(localStorage.getItem("Customer"));
  const [display, setDisplay] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const customer = JSON.parse(localStorage.getItem("Customer"));

  // Fetch data from Firestore on mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const adminRef = collection(db, "Admin");
        const snapshot = await getDocs(adminRef);
        const recipesArray = [];

        snapshot.docs.forEach((doc) => {
          const recipes = doc.data().Recipes || [];
          recipesArray.push(...recipes);
        });

        setDisplay(recipesArray);
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
      }
    };

    fetchRecipes();
  }, []);

  // Filter as soon as data or eee changes
  useEffect(() => {
    if (!eee || display.length === 0) return;
    const recipeFilter = display.filter((recipe) => recipe.type === eee);
    setFiltered(recipeFilter);
  }, [display, eee]);

  // Add to cart function
  const handleAddToCart = async (recipe) => {
    try {
      const userId = AdminLocalData?.user?.uid || AdminLocalData?.user?.displayName;
      if (!userId) {
        toast.error("User not found ❌");
        return;
      }

      const cartRef = doc(db, "Customer", userId);
      await setDoc(
        cartRef,
        { AddtoCart: arrayUnion(recipe) },
        { merge: true }
      );

      toast.success(`${recipe.title} added to cart! 🛒`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error("Error adding to cart:", err.message);
      toast.error("Failed to add to cart ❌");
    }
  };

  return (
    <div className="display-container">
      <ToastContainer />

      {filtered.length === 0 ? (
        <h3 className="no-recipes-message">
          {display.length === 0
            ? "Loading delicious recipes..."
            : "Hungry? Apply the filters, explore your favorite recipes, and enjoy every mouthful! 😋"
      }
        </h3>
      ) : (
        <div className="recipes-grid">
          {filtered.map((recipe, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="recipe-card"
            >
              <img
                src={recipe.Image}
                alt={recipe.title}
                className="recipe-image"
              />

              <div className="recipe-content">
                <h1 className="recipe-title">
                  {recipe.title}
                </h1>
                <p className="recipe-description">
                  {recipe.Description}
                </p>
                <h6 className="recipe-type">{recipe.type}</h6>
                <div className="recipe-details">
                  <span className="recipe-price">
                    ${recipe.Price}
                  </span>
                  <span className="recipe-rating">
                    ⭐ {recipe.Rating}
                  </span>
                </div>
                <Button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(recipe)}
                >
                  Add To Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Display;