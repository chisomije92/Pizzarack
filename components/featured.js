import classes from "./featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const changeImageHandler = (dir) => {
    if (dir === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (dir === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  const images = [
    "/images/pizza_featured_1.png",
    "/images/pizza_featured_2.png",
    "/images/pizza_featured_3.png",
  ];

  return (
    <section className={classes.container}>
      <div
        className={classes.arrowContainer}
        style={{ left: 0 }}
        onClick={changeImageHandler.bind(null, "left")}
      >
        <Image
          src="/images/arrowLeft.png"
          alt="previous_arrow"
          width="50"
          height="50"
        />
      </div>

      <div
        className={classes.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={classes.imageContainer} key={i}>
            <Image
              src={img}
              alt={`photo of featured pizza${i}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
      <div
        className={classes.arrowContainer}
        style={{ right: 0 }}
        onClick={changeImageHandler.bind(null, "right")}
      >
        <Image
          src="/images/arrowRight.png"
          alt="next_arrow"
          width="50"
          height="50"
        />
      </div>
    </section>
  );
};

export default Featured;
