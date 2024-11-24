import { useNavigate, useParams } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import cropData from './cropData';  // Assuming the data you provided is saved in a file named cropData.js
import styles from './stylesheet/component.module.css';

const CardInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const crop = cropData.find(c => c.cropName.toLowerCase() === id.toLowerCase());

  if (!crop) {
    return (
      <div className={`${styles.pageContainer}`}>
        <h1>Crop not found</h1>
        <button
          onClick={() => navigate('/')}
          className={`${styles.textGreen400} ${styles.hoverTextGreen500}`}
        >
          Go back
        </button>
      </div>
    );
  }

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
      <main className={`${styles.mainContent}`}>
        {/* Crop Title */}
        <h1 className={`${styles.cropTitle}`}>{crop.cropName}</h1>

        {/* Best Varieties Section */}
        <section className={`${styles.section}`}>
          <h2 className={`${styles.sectionTitle}`}>Best Varieties:</h2>
          <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.gap4}`}>
            {crop.bestVarieties.map((variety, index) => (
              <div key={index} className={`${styles.varietyCard}`}>
                <img
                  src={getImageUrl(crop.imageReferences.varietyImages[variety.name])}  // Use fallback function
                  alt={`${variety.name}_image`}
                  className={`${styles.varietyImage}`}
                />
                <h3 className={`${styles.varietyName}`}>{variety.name}</h3>
                <p className={`${styles.varietyDetails}`}>Duration: {variety.duration}</p>
                <p className={`${styles.varietyDetails}`}>{variety.features}</p>
                <p className={`${styles.varietyDetails}`}>Recommended Regions: {variety.recommendedRegions.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Time Period Section */}
        <section className={`${styles.section}`}>
          <h2 className={`${styles.sectionTitle}`}>Time Period:</h2>
          <div className={`${styles.bgGray800} ${styles.p4} ${styles.roundedLg}`}>
            <p className={`${styles.mb2}`}>
              <span className={`${styles.fontSemibold}`}>Sowing Time:</span> {crop.timePeriod.sowingTime}
            </p>
            <p className={`${styles.mb2}`}>
              <span className={`${styles.fontSemibold}`}>Harvesting Time:</span> {crop.timePeriod.harvestingTime}
            </p>
            <p>
              <span className={`${styles.fontSemibold}`}>Total Duration:</span> {crop.timePeriod.totalDuration}
            </p>
          </div>
        </section>

        {/* Crop Management Section */}
        <section className={`${styles.section}`}>
          <h2 className={`${styles.sectionTitle}`}>Crop Management:</h2>

          {/* Soil Preparation */}
          <div className={`${styles.managementStep}`}>
            <h3 className={`${styles.textLg} ${styles.textWhite} ${styles.mb3}`}>Soil Preparation</h3>
            <div className={`${styles.bgGray800} ${styles.p4} ${styles.roundedLg} ${styles.spaceY2}`}>
              {Object.values(crop.cropManagement.soilPreparation).map((step, index) => (
                <p key={index}>{step}</p>
              ))}
            </div>
          </div>

          {/* Planting Method */}
          <div className={`${styles.methodCard}`}>
            <h3 className={`${styles.textLg} ${styles.textWhite} ${styles.mb3}`}>Planting Methods</h3>
            <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.gap4}`}>
              {/* Direct Seeding */}
              <div className={`${styles.bgGray800} ${styles.p4} ${styles.roundedLg}`}>
                <h4 className={`${styles.fontBold} ${styles.mb2}`}>Direct Seeding</h4>
                <p className={`${styles.mb2}`}>{crop.cropManagement.plantingMethod.directSeeding.process}</p>
                <div className={`${styles.mb2}`}>
                  <h5 className={`${styles.fontSemibold} ${styles.textGreen400}`}>Advantages:</h5>
                  <ul className={`${styles.listDisc} ${styles.listInside}`}>
                    {crop.cropManagement.plantingMethod.directSeeding.advantages.map((adv, i) => (
                      <li key={i} className={`${styles.textGray300}`}>{adv}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className={`${styles.fontSemibold} ${styles.textGreen400}`}>Disadvantages:</h5>
                  <ul className={`${styles.listDisc} ${styles.listInside}`}>
                    {crop.cropManagement.plantingMethod.directSeeding.disadvantages.map((dis, i) => (
                      <li key={i} className={`${styles.textGray300}`}>{dis}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Transplanting */}
              {crop.cropManagement.plantingMethod.transplanting.process !== "NA" && (
                <div className={`${styles.bgGray800} ${styles.p4} ${styles.roundedLg}`}>
                  <h4 className={`${styles.fontBold} ${styles.mb2}`}>Transplanting</h4>
                  <p className={`${styles.mb2}`}>{crop.cropManagement.plantingMethod.transplanting.process}</p>
                  <div className={`${styles.mb2}`}>
                    <h5 className={`${styles.fontSemibold} ${styles.textGreen400}`}>Advantages:</h5>
                    <ul className={`${styles.listDisc} ${styles.listInside}`}>
                      {crop.cropManagement.plantingMethod.transplanting.advantages.map((adv, i) => (
                        <li key={i} className={`${styles.textGray300}`}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className={`${styles.fontSemibold} ${styles.textGreen400}`}>Disadvantages:</h5>
                    <ul className={`${styles.listDisc} ${styles.listInside}`}>
                      {crop.cropManagement.plantingMethod.transplanting.disadvantages.map((dis, i) => (
                        <li key={i} className={`${styles.textGray300}`}>{dis}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Spacing Details */}
          <div className={`${styles.spacingDetails}`}>
            <h3 className={`${styles.textLg} ${styles.textWhite} ${styles.mb3}`}>Spacing Details</h3>
            <div className={`${styles.bgGray800} ${styles.p4} ${styles.roundedLg}`}>
              <p className={`${styles.mb2}`}>
                <span className={`${styles.fontSemibold}`}>Row to Row:</span> {crop.cropManagement.spacing.rowToRow}
              </p>
              <p className={`${styles.mb2}`}>
                <span className={`${styles.fontSemibold}`}>Plant to Plant:</span> {crop.cropManagement.spacing.plantToPlant}
              </p>
              <p>
                <span className={`${styles.fontSemibold}`}>Planting Depth:</span> {crop.cropManagement.spacing.plantingDepth}
              </p>
            </div>
          </div>
        </section>

        {/* Diseases Section */}
        <section className={`${styles.section}`}>
          <h2 className={`${styles.sectionTitle}`}>Common Diseases:</h2>
          <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.gap4}`}>
            {crop.diseases.list.map((disease, index) => (
              <div key={index} className={`${styles.diseaseCard}`}>
                <h3 className={`${styles.textWhite}`}>{disease.name}</h3>
                <p className={`${styles.textGray300}`}>{disease.symptoms}</p>
                <p className={`${styles.textGreen400}`}>Solution: {disease.solution}</p>
                <img
                  src={getImageUrl(crop.diseases.diseaseImages[disease.name])} // Use fallback function
                  alt={`${disease.name}_image`}
                  className={`${styles.diseaseImage}`}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CardInfo;
