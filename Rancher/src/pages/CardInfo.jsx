import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useCrop } from "../CropContext";
import { useState } from "react";
import styles from "./stylesheet/component.module.css";

const CardInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { CropData } = useCrop();

  const selectedCrop = CropData.find(
    (crop) => crop.name === decodeURIComponent(id),
  );
  const defaultImages = ["https://picsum.photos/400/400"];
  const images = selectedCrop?.images?.filter(Boolean).length
    ? selectedCrop.images.filter(Boolean)
    : defaultImages;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!selectedCrop) {
    return (
      <div className={styles.pdpPage}>
        <header className={styles.pdpTopBar}>
          <GoArrowLeft
            className={styles.pdpBack}
            onClick={() => navigate(-1)}
            aria-label="Go back"
            role="button"
            tabIndex={0}
          />
          <h1 className={styles.pdpLogo}>Rancher</h1>
        </header>
        <main className={styles.pdpEmpty}>
          <span className={styles.pdpEmptyIcon}>🌾</span>
          <h2 className={styles.pdpEmptyTitle}>Crop not found</h2>
          <p className={styles.pdpEmptyDesc}>
            The product you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <button onClick={() => navigate("/")} className={styles.pdpEmptyBtn}>
            Browse Products
          </button>
        </main>
      </div>
    );
  }

  const discountedPrice = (
    selectedCrop.price *
    (1 - selectedCrop.discount / 100)
  ).toFixed(2);
  const savings = (selectedCrop.price - discountedPrice).toFixed(2);

  return (
    <div className={styles.pdpPage}>
      <header className={styles.pdpTopBar}>
        <GoArrowLeft
          className={styles.pdpBack}
          onClick={() => navigate(-1)}
          aria-label="Go back"
          role="button"
          tabIndex={0}
        />
        <h1 className={styles.pdpLogo}>Rancher</h1>
      </header>

      <main className={styles.pdpLayout}>
        {/* Gallery */}
        <section className={styles.pdpGallery} aria-label="Product Images">
          <figure className={styles.pdpMainImgWrap}>
            <img
              className={styles.pdpMainImg}
              src={selectedImage}
              alt={selectedCrop.name}
              loading="lazy"
            />
          </figure>
          {images.length > 1 && (
            <div className={styles.pdpThumbs} role="tablist">
              {images.map((img, index) => (
                <img
                  key={index}
                  className={`${styles.pdpThumb} ${selectedImage === img ? styles.pdpThumbActive : ""}`}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                  role="tab"
                  aria-selected={selectedImage === img}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setSelectedImage(img);
                  }}
                />
              ))}
            </div>
          )}
        </section>

        {/* Info */}
        <section className={styles.pdpInfo} aria-labelledby="product-title">
          <div className={styles.pdpInfoTop}>
            <span className={styles.pdpCategory}>{selectedCrop.category}</span>
            <h2 id="product-title" className={styles.pdpName}>
              {selectedCrop.name}
            </h2>
          </div>

          <div className={styles.pdpPriceBlock}>
            <div className={styles.pdpPriceRow}>
              <span className={styles.pdpPriceCurrent}>₹{discountedPrice}</span>
              {selectedCrop.discount > 0 && (
                <span className={styles.pdpPriceOld}>
                  ₹{selectedCrop.price.toFixed(2)}
                </span>
              )}
            </div>
            {selectedCrop.discount > 0 && (
              <span className={styles.pdpSavings}>
                You save ₹{savings} ({selectedCrop.discount}% off)
              </span>
            )}
          </div>

          <div className={styles.pdpMeta}>
            <div className={styles.pdpMetaItem}>
              <span className={styles.pdpMetaLabel}>Unit</span>
              <span className={styles.pdpMetaValue}>1 Kg</span>
            </div>
            <div className={styles.pdpMetaItem}>
              <span className={styles.pdpMetaLabel}>Category</span>
              <span className={styles.pdpMetaValue}>
                {selectedCrop.category}
              </span>
            </div>
          </div>

          <p className={styles.pdpDesc}>{selectedCrop.description}</p>

          <button
            className={styles.pdpBuyBtn}
            onClick={() => navigate("/pay", { state: { selectedCrop } })}
            aria-label={`Buy ${selectedCrop.name} now`}
          >
            Buy Now — ₹{discountedPrice}
          </button>
        </section>
      </main>
    </div>
  );
};

export default CardInfo;
