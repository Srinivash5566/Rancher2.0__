import { useNavigate, useLocation } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import styles from "./stylesheet/component.module.css";

const BuyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCrop } = location.state || {};

  // State for user input
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "Credit Card",
  });

  if (!selectedCrop) {
    return (
      <div className={styles.buyPageContainer}>
        <nav className={styles.buyHeader}>
          <GoArrowLeft className={styles.buyBackButton} onClick={() => navigate(-1)} />
          <h1 className={styles.buyHeaderTitle}>Rancher</h1>
        </nav>
        <main className={styles.buyNotFound}>
          <h2>No item selected for purchase! 😢</h2>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </main>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Purchase successful!");
    navigate("/");
  };

  return (
    <div className={styles.buyPageContainer}>
      <nav className={styles.buyHeader}>
        <GoArrowLeft className={styles.buyBackButton} onClick={() => navigate(-1)} />
        <h1 className={styles.buyHeaderTitle}>Checkout</h1>
      </nav>

      <div className={styles.buyCheckoutContainer}>
        {/* Order Summary */}
        <div className={styles.buyOrderSummary}>
          <img className={styles.buyOrderImage} src={selectedCrop.images[0]} alt={selectedCrop.name} />
          <h2>{selectedCrop.name}</h2>
          <p>{selectedCrop.category}</p>
          <h4>₹{(selectedCrop.price * (1 - selectedCrop.discount / 100)).toFixed(2)}</h4>
          <h5 className={styles.buyOriginalPrice}>₹{selectedCrop.price.toFixed(2)}</h5>
        </div>

        {/* Checkout Form */}
        <form className={styles.buyCheckoutForm} onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />

          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </select>

          <button type="submit" className={styles.buyConfirmButton}>Confirm Purchase</button>
        </form>
      </div>
    </div>
  );
};

export default BuyPage;
