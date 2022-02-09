import classes from "./featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const changeImageHandler = (direction) => {
    // if (dir === "left") {
    //   setIndex(index !== 0 ? index - 1 : 2);
    // }
    // if (dir === "right") {
    //   setIndex(index !== 2 ? index + 1 : 0);
    // }
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  const images = [
    "/images/pizza_featured_1.png",
    "/images/pizza_featured_2.png",
    "/images/pizza_featured_3.png",
  ];

  return (
    <div className={classes.container}>
      <div
        className={classes.arrowContainer}
        style={{ left: 0 }}
        onClick={() => changeImageHandler("l")}
      >
        <Image src="/images/arrowLeft.png" alt="previous_arrow" layout="fill" />
      </div>

      <div
        className={classes.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={classes.imageContainer} key={i}>
            {/* <div className={classes.contentContainer}>
              <h2>Hot & Spicy As you like it!</h2>
              <h4>
                Get a whooping 10% off on early morning orders between 7 - 10am
              </h4>
              <h3>Order now!!!</h3>
            </div> */}
            <Image
              src={img}
              alt="Pizza 1"
              //   width="530"
              //   height="545"
              layout="fill"
              objectFit="contain"
            />{" "}
          </div>
        ))}
      </div>
      <div
        className={classes.arrowContainer}
        style={{ right: 0 }}
        onClick={() => changeImageHandler("r")}
      >
        <Image src="/images/arrowRight.png" alt="next_arrow" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
