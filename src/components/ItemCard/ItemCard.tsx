import React, {FunctionComponent, useContext} from 'react';
import './ItemCard.css';
import {AppContext} from "../../App";
import {Link} from 'react-router-dom';

export const ItemCard: FunctionComponent<any> = ({item}) => {
    const {setActiveItem} = useContext(AppContext);

    const onClick = (e: React.MouseEvent) => {
        console.log(item);
        setActiveItem(item);
    };

    return (
        <Link className="item-card__link" to={`/products/${item.ProductID}`} style={{ textDecoration: 'none', color: '#222'}}>
        <div className="item-card">
        <div onClick={onClick} className="item-card__wrapper">
            <div className="item-card__thumb">
                <img alt={item.ItemName} className="item-card__img" src={`${item.PhotoName}?height=300&mode=crop&crop=10,10,-10,-10`}/>
            </div>
            <div className="item-card__info">
                <h3 className="item-card__name">{item.ItemName}</h3>

                <p className="item-card__desc">{item.Description}</p>
                <span className="item-card__price">{`$${item.BasePrice.toFixed(2)}`}</span>
            </div>
        </div>
        </div>
        </Link>
    )
}