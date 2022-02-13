import classes from "./product-item.module.css";
import Image from "next/image";
import { useState } from "react";

const ProductItem = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/images/pizza_select.png",
    name: "CAMPAGNOLA",
    price: [5500, 6500, 7500],
    desc: "Authentic delicious crumbled Italian sausage, red and green peppers,red onions, plum tomato sauce and melted mozzarella cheese.",
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.imageContainer}>
          <Image
            src={pizza.img}
            objectFit="contain"
            layout="fill"
            alt="pizza image"
          />
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>{pizza.name}</h1>
        <span className={classes.price}>{`₦${pizza.price[size]}`}</span>
        <p className={classes.desc}>{pizza.desc}</p>
        <h3 className={classes.choose}>Choose the size</h3>
        <div className={classes.sizes}>
          <div className={classes.size} onClick={() => setSize(0)}>
            <Image src="/images/size.png" layout="fill" alt="pizza size" />
            <span className={classes.number}>Small</span>
          </div>
          <div className={classes.size} onClick={() => setSize(1)}>
            <Image src="/images/size.png" layout="fill" alt="pizza size" />
            <span className={classes.number}>Medium</span>
          </div>
          <div className={classes.size} onClick={() => setSize(2)}>
            <Image src="/images/size.png" layout="fill" alt="pizza size" />
            <span className={classes.number}>Large</span>
          </div>
        </div>
        <h3 className={classes.choose}>Choose additional ingredients</h3>
        <div className={classes.ingredients}>
          <div className={classes.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={classes.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={classes.option}>
            <input
              className={classes.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={classes.option}>
            <input
              className={classes.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={classes.option}>
            <input
              className={classes.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={classes.add}>
          <input type="number" defaultValue={1} className={classes.quantity} />
          <button className={classes.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
