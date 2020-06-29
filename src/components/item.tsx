import React from 'react';
import styles from '../App.module.css';
import {ReactComponent as Check} from "../check.svg";
import {Story} from "../stories";


// here defining our custom type
type ItemProps = {
    item: Story;
    onRemoveItem: (item: Story) => void;
}

const Item = ({item, onRemoveItem}: ItemProps) => {

    return (
        <div className={styles.item}>
            <span style={{width: '40%'}}><a href={item.url}>{item.title}</a></span>
            <span style={{width: '10%'}}>{item.author}</span>
            <span style={{width: '10%'}}>{item.points}</span>
            <span style={{width: '10%'}}>
                <button
                    type="button"
                    onClick={() => onRemoveItem(item)}
                    className={`${styles.button} ${styles.buttonSmall}`}
                >
                    <Check height="18px" width="18px"/>
                </button>
            </span>
        </div>
    );
};

export default Item;