import React, { FunctionComponent } from 'react';
import {ItemCard} from "../ItemCard/ItemCard";
import './ItemList.css';
import {Item} from "../../types";

interface ItemListProps {
    items: Item[];
}

export const ItemList: FunctionComponent<ItemListProps> = ({items}) => {

    return (
        <div className="items__wrapper">
            {items &&
            items.map((item: any) => (
                <ItemCard
                    key={item.ProductID}
                    item={item}
                />
            ))}
        </div>
    )
};