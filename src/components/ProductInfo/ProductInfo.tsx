import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState
} from "react";
import { AppContext } from "../../App";
import "./ProductInfo.css";
import { FaCartPlus } from "react-icons/fa";
import { Item } from "../../types";
import { RouteComponentProps } from "react-router-dom";

export const ProductInfo: FunctionComponent<
  RouteComponentProps<{ productId: string }>
> = ({ match }) => {
  const [item, setItem] = useState<Item | null>(null);
  const {
    data: { items }
  } = useContext(AppContext);

  useEffect(() => {
    const {
      params: { productId }
    } = match;
    console.log(productId);
    if (items) {
      const activeItems: Item[] = items.filter(
        (item: Item) => item.ProductID === parseInt(productId)
      );
      console.log(activeItems[0]);
      setItem(activeItems[0]);
    }
  }, [match, items]);

  return (
    <>
      {item && (
        <div className="product__wrapper">
          <div className="product__photo">
            <img
              src={`${item.PhotoName}?height=600&mode=crop&crop=11,11,-11,-11`}
              className="product__img"
              alt={item.ItemName}
            />
          </div>
          <div className="product__details">
            <h2 className="product__name">{item.ItemName}</h2>
            <img
                src={`http://images.repzio.com/productimages/${item.ManufacturerID}/logo${item.ManufacturerID}_lg.jpg?width=100`}
                className="product__logo"
            />
            <div className="product__desc">
              <p>{item.Description}</p>
              <span className="product__price">{`$${item.BasePrice.toFixed(
                2
              )}`}</span>
              <p className="product__detail">
                <strong>Dimensions: </strong>
                {item.Dimensions}
              </p>
              <p className="product__detail">
                {item.OnHandQuantity > 0 ? (
                  <span>
                    <strong>In Stock: </strong>
                    {item.OnHandQuantity}
                  </span>
                ) : (
                  <span className="product__sold-out">Sold Out</span>
                )}
              </p>
            </div>
            <div className="product__button-wrapper">
              <button className="product__button">
                <FaCartPlus style={{ fontSize: 22, marginRight: 7 }} /> Add to
                Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
