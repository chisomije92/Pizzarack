import classes from "./pizza-card.module.css";
import Image from "next/image";
import Link from "next/link";
const PizzaCard = ({ pizza }) => {
  return (
    <div className={classes.container}>
      {/* {!pizzaId && <h2>No featured pizza yet</h2>} */}
      {/* {pizza._Id && ( */}
      <>
        <div className={classes.imageContainer}>
          <Link href={`/product/${pizza._id}`} passHref>
            <a className={classes.anchor}>
              <Image
                src={pizza.img}
                alt=""
                width="12300"
                height="10000"
                layout="responsive"
              />
            </a>
          </Link>
        </div>
        <h1 className={classes.title}>{pizza.title}</h1>
        <span className={classes.price}>{`₦${pizza.prices[0]}`}</span>
        <p className={classes.desc}>{pizza.desc}</p>
      </>
      {/* )} */}
    </div>
  );
};

export default PizzaCard;
