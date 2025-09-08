import React, { useState } from "react"
import { doc, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from "../../../FirebaseCode/FirebaseCode"
import { motion } from "framer-motion"
import "./PostItems.css"

const PostItems = () => {
  const AdminLocalData = JSON.parse(localStorage.getItem("Admin"))

  const [PostDetails, SetPostDetails] = useState({
    title: "",
    Description: "",
    Image: "",
    type: "",
    Price: "",
    Rating: "",
  })

  const HandleSubmitForm = async (e) => {
    e.preventDefault()

    if (!PostDetails.title || !PostDetails.Description) {
      alert("Please fill in all required fields")
      return
    }

    try {
      const recipes = doc(db, "Admin", AdminLocalData?.user?.displayName)
      await updateDoc(recipes, {
        Recipes: arrayUnion(PostDetails),
      })
      alert("Posted successfully!")

      // reset form
      SetPostDetails({
        title: "",
        Description: "",
        Image: "",
        type: "",
        Price: "",
        Rating: "",
      })
    } catch (error) {
      console.error("Error posting:", error)
      alert("Error posting: " + error.message)
    }
  }

  return (
    <div className="post-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="post-card"
      >
        <h2 className="post-title">🍳 Post a Recipe</h2>

        <form className="post-form" onSubmit={HandleSubmitForm}>
          {[
            { label: "Title", value: "title", type: "text" },
            { label: "Description", value: "Description", type: "text" },
            { label: "Recipe Image URL", value: "Image", type: "text" },
            { label: "Type of Breakfast", value: "type", type: "text" },
            { label: "Price", value: "Price", type: "number" },
            { label: "Rating", value: "Rating", type: "number" },
          ].map((field, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="form-group"
            >
              <label className="form-label">{field.label}</label>
              <input
                type={field.type}
                value={PostDetails[field.value]}
                onChange={(e) =>
                  SetPostDetails({ ...PostDetails, [field.value]: e.target.value })
                }
                className="form-input"
                placeholder={`Enter ${field.label}`}
                required={field.value === "title" || field.value === "Description"}
              />
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="submit-btn"
          >
            🚀 Post Recipe
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default PostItems
