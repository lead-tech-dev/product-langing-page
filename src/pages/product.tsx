import React, {
  FC,
  Fragment,
  FunctionComponent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import IconCart from "src/components/icons/icon-cart";
import IconClose from "src/components/icons/icon-close";
import IconMinus from "src/components/icons/icon-minus";
import IconNext from "src/components/icons/icon-next";
import IconPlus from "src/components/icons/icon-plus";
import IconPrevious from "src/components/icons/icon-previous";
import { ProductContext } from "src/context/productContext";

const Product: FC = () => {
  const [totalImg, setTotalImg] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    const imagesSrc = document.querySelectorAll<HTMLElement>(".image");
    setTotalImg(imagesSrc.length);

    changeImg();
  }, []);

  const handleLightBox = () => {
    const lightbox = document.querySelector(".lightbox");
    const productImg = document.querySelectorAll(".image");

    lightbox?.classList.toggle("open");

    changeImg();

    setTotalImg(productImg.length);
  };

  const nextItem = (e: any) => {
    if (index === totalImg - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }

    changeImg();
  };
  const prevItem = (e: any) => {
    if (index === 0) {
      setIndex(totalImg - 1);
    } else {
      setIndex(index - 1);
    }

    changeImg();
  };

  const handleCurrent = (e: any) => {
    const currentIndex = parseInt(e.target.classList[0].split("-")[2]);

    setIndex(currentIndex);

    changeImg();
  };

  const changeImg = () => {
    const imgLarge = document.querySelector<HTMLSourceElement>(".img-large");

    const lightboxImg =
      document.querySelector<HTMLSourceElement>(".lightbox-img");
    const alllightboxImg =
      document.querySelectorAll<HTMLSourceElement>(".img-lightbox");

    const allSmallImg = document.querySelectorAll<HTMLSourceElement>(".image");

    const activeImg = document.querySelector<HTMLSourceElement>(
      ".img-lightbox.active"
    );

    const activeLargeImg =
      document.querySelector<HTMLSourceElement>(".image.active");

    const lightbox = document.querySelector(".lightbox.open");

    if (lightbox) {
      activeImg?.classList.remove("active");

      lightboxImg!.src = alllightboxImg[index].src;
      alllightboxImg[index].classList.add("active");
    } else {
      activeLargeImg?.classList.remove("active");
      imgLarge!.src = allSmallImg[index].src;
      allSmallImg[index].classList.add("active");
    }
  };

  const addToCart = () => {
    const img = document.querySelector<HTMLSourceElement>(".img-large");
    const category = document.querySelector<HTMLElement>(
      ".product-content__category"
    )?.innerText;

    const name = document.querySelector<HTMLElement>(
      ".product-content__name"
    )?.innerText;

    const description = document.querySelector<HTMLElement>(
      ".product-content__description"
    )?.innerText;

    const price = document.querySelector<HTMLElement>(
      ".product-content__price .current"
    )?.innerText;

    const quantity = document.querySelector<HTMLElement>(
      ".product-content__count .counter"
    )?.innerText;

    // console.log(quantity);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: 1,
        img: img?.src,
        category,
        name,
        description,
        price: Number(price?.split("").slice(1).join("")),
        quantity: Number(quantity),
      },
    });
  };

  const handleIncrement = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((quantity) => (quantity === 1 ? 1 : quantity - 1));
  };

  return (
    <Fragment>
      <div className="product-area">
        <div className="product-content">
          <div className="product-content__img">
            <div className="product-content__next" onClick={nextItem}>
              <IconNext />
            </div>

            <div className="product-content__previous" onClick={prevItem}>
              <IconPrevious />
            </div>
            <div
              className="product-content__product-image-large"
              onClick={() => handleLightBox()}
            >
              <img
                src="/assets/images/image-product-1-thumbnail.jpg"
                alt="img large"
                className="img-large"
              />
            </div>

            <div className="product-content__product-image-small">
              <div
                className="product-content__image-single"
                onClick={(e) => handleCurrent(e)}
              >
                <img
                  src="/assets/images/image-product-1-thumbnail.jpg"
                  alt="img small"
                  className="img-small-0 image active"
                />
              </div>

              <div
                className="product-content__image-single"
                onClick={(e) => handleCurrent(e)}
              >
                <img
                  src="/assets/images/image-product-2-thumbnail.jpg"
                  alt="img small"
                  className="img-small-1 image"
                />
              </div>

              <div
                className="product-content__image-single"
                onClick={(e) => handleCurrent(e)}
              >
                <img
                  src="/assets/images/image-product-3-thumbnail.jpg"
                  alt="img small"
                  className=" img-small-2 image"
                />
              </div>

              <div
                className="product-content__image-single"
                onClick={(e) => handleCurrent(e)}
              >
                <img
                  src="/assets/images/image-product-4-thumbnail.jpg"
                  alt="img small"
                  className="img-small-3 image"
                />
              </div>
            </div>
          </div>
          <div className="product-content__info">
            <div className="product-content__category">
              <h5>SNEAKER COMPANY</h5>
            </div>

            <div className="product-content__name">
              <h2>Fall Limited Edition Sneakers</h2>
            </div>

            <div className="product-content__description">
              <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
            </div>

            <div className="product-content__price">
              <span className="current">$125.00</span>
              <span className="discount">50%</span>
              <span className="old">$250.00</span>
            </div>

            <div className="product-content__bottom">
              <div className="product-content__count">
                <button className="decrement" onClick={handleDecrement}>
                  <IconMinus />
                </button>
                <span className="counter">{quantity}</span>
                <button className="increment" onClick={handleIncrement}>
                  <IconPlus />
                </button>
              </div>

              <div className="product-content__btn">
                <button className="button" onClick={addToCart}>
                  <IconCart />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lightbox">
        <div className="lightbox-content">
          <div
            className="lightbox-content__close"
            onClick={() => handleLightBox()}
          >
            <IconClose />
          </div>

          <div className="lightbox-content__next" onClick={nextItem}>
            <IconNext />
          </div>

          <div className="lightbox-content__previous" onClick={prevItem}>
            <IconPrevious />
          </div>
          <div className="lightbox-content__img">
            <div className="lightbox-content__product-image-large">
              <img
                src="/assets/images/image-product-1.jpg"
                alt="img large"
                className="lightbox-img"
              />
            </div>

            <div
              className="lightbox-content__product-image-small"
              onClick={(e) => handleCurrent(e)}
            >
              <div className="lightbox-content__image-single ">
                <img
                  src="/assets/images/image-product-1-thumbnail.jpg"
                  alt="img small"
                  className="img-small-0 img-lightbox active"
                />
              </div>

              <div
                className="lightbox-content__image-single"
                onClick={(e) => handleCurrent(e)}
              >
                <img
                  src="/assets/images/image-product-2-thumbnail.jpg"
                  alt="img small"
                  className="img-small-1 img-lightbox"
                />
              </div>

              <div
                className="lightbox-content__image-single"
                onClick={(e) => handleCurrent(e)}
              >
                <img
                  src="/assets/images/image-product-3-thumbnail.jpg"
                  alt="img small"
                  className="img-small-2 img-lightbox"
                />
              </div>

              <div
                className="lightbox-content__image-single"
                onClick={(e) => handleCurrent(e)}
              >
                <img
                  src="/assets/images/image-product-4-thumbnail.jpg"
                  alt="img small"
                  className="img-small-3 img-lightbox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
