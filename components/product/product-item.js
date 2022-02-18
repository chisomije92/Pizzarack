import classes from "./product-item.module.css";
import Image from "next/image";
import { useState } from "react";

const ProductItem = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  const changePrice = (num) => {
    setPrice(price + num);
  };

  const handleSize = (sizeIndex) => {
    const diff = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  };

  const changeHandler = (option, e) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
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
            priority
          />
        </div>
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>{pizza.title}</h1>
        <span className={classes.price}>{`₦${price}`}</span>
        <p className={classes.desc}>{pizza.desc}</p>
        <h3 className={classes.choose}>Choose the size</h3>
        <div className={classes.sizes}>
          <div className={classes.size} onClick={() => handleSize(0)}>
            <Image src="/images/size.png" layout="fill" alt="pizza size" />
            <span className={classes.number}>Small</span>
          </div>
          <div className={classes.size} onClick={() => handleSize(1)}>
            <Image src="/images/size.png" layout="fill" alt="pizza size" />
            <span className={classes.number}>Medium</span>
          </div>
          <div className={classes.size} onClick={() => handleSize(2)}>
            <Image src="/images/size.png" layout="fill" alt="pizza size" />
            <span className={classes.number}>Large</span>
          </div>
        </div>
        <h3 className={classes.choose}>Choose additional ingredients</h3>
        <div className={classes.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={classes.option} key={option._id}>
              <input
                className={classes.checkbox}
                type="checkbox"
                id={option.text}
                name={option.text}
                onChange={changeHandler.bind(null, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={classes.add}>
          <input
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            defaultValue={1}
            className={classes.quantity}
          />
          <button className={classes.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
