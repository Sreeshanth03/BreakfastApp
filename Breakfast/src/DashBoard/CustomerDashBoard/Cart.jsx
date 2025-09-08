import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../FirebaseCode/FirebaseCode";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Cards.css"
const Cart = () => {
  const navigate = useNavigate();
  const AdminLocalData = JSON.parse(localStorage.getItem("Customer"));
  const [cartItems, setCartItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    phone: "",
    token: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId =
          AdminLocalData?.user?.uid || AdminLocalData?.user?.displayName;
        if (!userId) return;

        const cartRef = doc(db, "Customer", userId);
        const cartSnap = await getDoc(cartRef);

        if (cartSnap.exists()) {
          setCartItems(cartSnap.data().AddtoCart || []);
        }
      } catch (err) {
        console.error("Error fetching cart:", err.message);
      }
    };

    fetchCart();
  }, [AdminLocalData]);

  // ✅ Generate token when opening payment form
  const handleProceed = () => {
    const randomToken = "TOK" + Math.floor(100000 + Math.random() * 900000);
    setOrderDetails({ ...orderDetails, token: randomToken });
    setShowPayment(true);
  };

  // ✅ Submit payment (simulate + empty cart)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId =
        AdminLocalData?.user?.uid || AdminLocalData?.user?.displayName;
      if (userId) {
        const cartRef = doc(db, "Customer", userId);
        // Clear cart in Firestore
        await updateDoc(cartRef, { AddtoCart: [] });
      }
      // Clear cart locally
      setCartItems([]);
      setOrderSuccess(true);
      setShowPayment(false);
    } catch (err) {
      console.error("Error clearing cart:", err.message);
    }
  };

  return (
    <div className="p-6">
      <Button variant="secondary" onClick={() => navigate(-1)}>
        ⬅ Back
      </Button>
      <h2 className="text-center mt-4 mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <h4 className="text-center text-gray-600">Your cart is empty</h4>
      ) : (
        <>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 justify-center">
            {cartItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden shadow-2xl bg-white p-4"
              >
                <img
                  src={item.Image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.Description}</p>
                  <h6 className="text-sm text-gray-600">{item.type}</h6>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-green-600 font-semibold">
                      ${item.Price}
                    </span>
                    <span className="text-yellow-500">⭐ {item.Rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ✅ Proceed Button */}
          <div className="text-center mt-6">
            <Button variant="success" size="lg" onClick={handleProceed}>
              Proceed to Payment
            </Button>
          </div>
        </>
      )}

      {/* ✅ Payment Modal */}
      <Modal show={showPayment} onHide={() => setShowPayment(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Fill Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={orderDetails.name}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                required
                value={orderDetails.phone}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, phone: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Token</Form.Label>
              <Form.Control type="text" value={orderDetails.token} readOnly />
            </Form.Group>
            <Button variant="primary" type="submit">
              Confirm Order
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* ✅ Success Receipt */}
      {orderSuccess && (
        <div className="text-center mt-6 p-4 bg-green-100 rounded-lg shadow-lg">
          <h3 className="text-green-700">
            ✅ Thank you! Order placed successfully.
          </h3>
          <p className="mt-2">
            Your token number is: <b>{orderDetails.token}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
