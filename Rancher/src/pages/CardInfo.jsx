import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import styles from "./stylesheet/component.module.css";

const CardInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fallback image URL for missing images
  const defaultImage = "https://picsum.photos/seed/picsum/200/300";

  // Helper function to get image URL or fallback
  const getImageUrl = (imagePath) => {
    return imagePath ? imagePath : defaultImage;
  };

  return (
    <div className={`${styles.pageContainer}`}>
      {/* Header */}
      <nav className={`${styles.header}`}>
        <GoArrowLeft
          className={`${styles.backButton}`}
          onClick={() => navigate(-1)}
        />
        <h1 className={styles.headerTitle}>Rancher</h1>
      </nav>

      {/* Main Content */}
      <main></main>
    </div>
  );
};

export default CardInfo;
