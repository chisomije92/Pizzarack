import classes from "./error-404.module.css";
import Link from "next/link";
const Error404 = () => {
  return (
    <section className={classes.container}>
      <div className={classes.errorWrapper}>
        <div>4</div>
        <div>0</div>
        <div>4</div>
      </div>

      <div className={classes.content}>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let`s go{" "}
          <Link href="/">
            <a>home</a>
          </Link>{" "}
          and try from there.
        </p>
      </div>
    </section>
  );
};

export default Error404;
