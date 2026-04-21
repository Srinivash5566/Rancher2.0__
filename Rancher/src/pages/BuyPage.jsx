import { useNavigate, useLocation } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import styles from "./stylesheet/component.module.css";

const BuyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedCrop } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "Credit Card",
  });

  if (!selectedCrop) {
    return (
      <div className={styles.ckPage}>
        <header className={styles.ckTopBar}>
          <GoArrowLeft
            className={styles.ckBack}
            onClick={() => navigate(-1)}
            aria-label="Go back"
            role="button"
            tabIndex={0}
          />
          <h1 className={styles.ckLogo}>Rancher</h1>
        </header>
        <main className={styles.ckEmptyState}>
          <span className={styles.ckEmptyIcon}>🛒</span>
          <h2 className={styles.ckEmptyTitle}>Nothing to checkout</h2>
          <p className={styles.ckEmptyDesc}>
            Select a product first to proceed with purchase.
          </p>
          <button onClick={() => navigate("/")} className={styles.ckEmptyBtn}>
            Browse Products
          </button>
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

  const discountedPrice = (
    selectedCrop.price *
    (1 - selectedCrop.discount / 100)
  ).toFixed(2);

  return (
    <div className={styles.ckPage}>
      <header className={styles.ckTopBar}>
        <GoArrowLeft
          className={styles.ckBack}
          onClick={() => navigate(-1)}
          aria-label="Go back"
          role="button"
          tabIndex={0}
        />
        <h1 className={styles.ckLogo}>Checkout</h1>
        <div className={styles.ckSteps}>
          <span className={styles.ckStepActive}>1. Details</span>
          <span className={styles.ckStepDot}>→</span>
          <span className={styles.ckStep}>2. Confirm</span>
        </div>
      </header>

      <main className={styles.ckBody}>
        {/* Form Section */}
        <section className={styles.ckFormSection}>
          <h2 className={styles.ckFormTitle}>Delivery Information</h2>
          <form className={styles.ckForm} onSubmit={handleSubmit}>
            <fieldset className={styles.ckFieldset}>
              <legend className={styles.ckLegend}>
                Delivery &amp; Payment
              </legend>

              <div className={styles.ckField}>
                <label htmlFor="checkout-name" className={styles.ckLabel}>
                  Full Name
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  name="name"
                  className={styles.ckInput}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  aria-required="true"
                />
              </div>

              <div className={styles.ckField}>
                <label htmlFor="checkout-address" className={styles.ckLabel}>
                  Delivery Address
                </label>
                <textarea
                  id="checkout-address"
                  name="address"
                  className={styles.ckTextarea}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street, City, State, PIN"
                  required
                  aria-required="true"
                  rows="3"
                />
              </div>

              <div className={styles.ckField}>
                <label htmlFor="checkout-phone" className={styles.ckLabel}>
                  Phone Number
                </label>
                <input
                  id="checkout-phone"
                  type="tel"
                  name="phone"
                  className={styles.ckInput}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  aria-required="true"
                />
              </div>

              <div className={styles.ckField}>
                <label htmlFor="checkout-payment" className={styles.ckLabel}>
                  Payment Method
                </label>
                <select
                  id="checkout-payment"
                  name="paymentMethod"
                  className={styles.ckSelect}
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="UPI">UPI</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>

              <button type="submit" className={styles.ckSubmitBtn}>
                Place Order — ₹{discountedPrice}
              </button>
            </fieldset>
          </form>
        </section>

        {/* Order Summary Sidebar */}
        <aside className={styles.ckSummary}>
          <h3 className={styles.ckSummaryTitle}>Order Summary</h3>
          <div className={styles.ckSummaryCard}>
            <img
              className={styles.ckSummaryImg}
              src={selectedCrop.images[0]}
              alt={`Image of ${selectedCrop.name}`}
              loading="lazy"
            />
            <div className={styles.ckSummaryDetails}>
              <h4 className={styles.ckSummaryName}>{selectedCrop.name}</h4>
              <span className={styles.ckSummaryCat}>
                {selectedCrop.category}
              </span>
            </div>
          </div>

          <div className={styles.ckSummaryBreakdown}>
            <div className={styles.ckSummaryRow}>
              <span>Price</span>
              <span>₹{selectedCrop.price.toFixed(2)}</span>
            </div>
            {selectedCrop.discount > 0 && (
              <div className={styles.ckSummaryRowDiscount}>
                <span>Discount ({selectedCrop.discount}%)</span>
                <span>
                  -₹
                  {(selectedCrop.price - discountedPrice).toFixed(2)}
                </span>
              </div>
            )}
            <div className={styles.ckSummaryDivider} />
            <div className={styles.ckSummaryRowTotal}>
              <span>Total</span>
              <span>₹{discountedPrice}</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default BuyPage;
