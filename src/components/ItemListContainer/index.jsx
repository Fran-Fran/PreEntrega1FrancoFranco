import styles from './itemListContainer.module.scss'

const ItemListContainer = ({ greeting }) => {
    {
        return (
            <div className={styles.item_list_container}>{greeting}</div>
        )
    }
}

export default ItemListContainer