import classes from "./error-404.module.css";
import Link from "next/link";
const Error500 = () => {
  return (
    <section className={classes.container}>
      <div className={classes.errorWrapper}>
        <div>5</div>
        <div>0</div>
        <div>0</div>
      </div>

      <div className={classes.content}>
        <p>
          Something went awry. Retry later maybe? or you can retrace your steps
          by going{" "}
          <Link href="/">
            <a>home</a>
          </Link>{" "}
          and find your way.
        </p>
      </div>
    </section>
  );
};

export default Error500;
