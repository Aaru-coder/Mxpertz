import styles from "./styles.module.css";
const Design = () => {
  const images = [
    {
      description: "Lady with a red umbrella",
      imageurl:
        "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg",
    },
    {
      description: "Flowers and some fruits",
      imageurl:
        "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg",
    },
    {
      description: "Beautiful scenery",
      imageurl:
        "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg",
    },
    {
      description: "Some kind of bird",
      imageurl:
        "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg",
    },
    {
      description: "The attack of dragons",
      imageurl:
        "https://www.marcpridmore.com/wp-content/uploads/2023/02/Slideshow1.jpg",
    },
  ];

  return (
    <div>
      <h2 className={`${styles.desigen}`}>Recent Interior Design work</h2>
      <div>
        {images.map((image) => {
          return (
            <>
              <div className="row d-flex justify-content-center gap-lg-5">
                <div className="col">
                  <img src={image.imageurl} height="100" width="100" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Design;
