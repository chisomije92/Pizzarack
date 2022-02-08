import classes from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  const images = [
    "images/featured-1.jpg",
    // "images/featured-2.jpg",
    // "featured-3.jpg",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
        <Image
          src="/images/previous_back_arrow_left_arrows_icon.svg"
          alt="previous_arrow"
          layout="fill"
        />
      </div>

      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          {images.map((img, i) => (
            <Image
              src="/images/featured-1.jpg"
              key={i}
              alt="Pizza 1"
              //   width="530"
              //   height="545"
              layout="fill"
              objectFit="contain"
            />
          ))}
        </div>
      </div>
      <div className={classes.arrowContainer}>
        <Image
          src="/images/next_forward_arrow_arrows_direction_icon.svg"
          alt="next_arrow"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Featured;
