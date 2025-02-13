import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useCrop } from "../CropContext"; // Import the Crop Context
import { useState } from "react";
import styles from "./stylesheet/component.module.css";

const CardInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { CropData } = useCrop();

  const selectedCrop = CropData.find((crop) => crop.name === decodeURIComponent(id));
  const defaultImages = ["https://picsum.photos/400/400"];
  const images = selectedCrop?.images?.length ? selectedCrop.images : defaultImages;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!selectedCrop) {
    return (
      <div className={styles.pageContainer}>
        <nav className={styles.header}>
          <GoArrowLeft className={styles.backButton} onClick={() => navigate(-1)} />
          <h1 className={styles.headerTitle}>Rancher</h1>
        </nav>
        <main className={styles.notFound}>
          <h2>Crop not found! 😢</h2>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <nav className={styles.header}>
        <GoArrowLeft className={styles.backButton} onClick={() => navigate(-1)} />
        <h1 className={styles.headerTitle}>Rancher</h1>
      </nav>

      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <img className={styles.mainImage} src={selectedImage} alt={selectedCrop.name} />
          <div className={styles.thumbnailContainer}>
            {images.map((img, index) => (
              <img
                key={index}
                className={`${styles.thumbnail} ${selectedImage === img ? styles.active : ""}`}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className={styles.productDetails}>
          <h2 className={styles.productTitle}>{selectedCrop.name}</h2>
          <p className={styles.category}>{selectedCrop.category}</p>
          <p className={styles.description}>{selectedCrop.description}</p>
          <p className={styles.description}>1 Kg</p>
          
          <div className={styles.priceContainer}>
            <h4 className={styles.discount}>-{selectedCrop.discount}%</h4>
            <h4 className={styles.price}>
              ₹{(selectedCrop.price * (1 - selectedCrop.discount / 100)).toFixed(2)}
            </h4>
          </div>
          <h5 className={styles.originalPrice}>₹{selectedCrop.price.toFixed(2)}</h5>

          <div className={styles.buyButtons}>
            <button
              className={styles.buyNow}
              onClick={() => navigate("/pay", { state: { selectedCrop } })}
            >
              Buy Now
            </button>
            {/* <button className={styles.addToCart}>Add to Cart</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
