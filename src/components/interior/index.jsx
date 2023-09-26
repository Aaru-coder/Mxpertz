import Design from "../DesigenWork";
import styles from "./styles.module.css";

const Interior = () => {
  return (
    <div className={` ${styles.interior}`}>
      <p className={` ${styles.heading}`}>
        SOUTHERN CALIFORNIA'S LARGEST LUXURY FURNITURE & INTERIOR DESIGN
        SHOWROOM
      </p>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              {/* <img
                src="https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg"
                className="d-block w-100"
                alt="..."
              /> */}
            </div>
            <div className="carousel-item">
              <img
                src="https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
          {/* <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
      <div>
        <Design />
      </div>
    </div>
  );
};

export default Interior;
