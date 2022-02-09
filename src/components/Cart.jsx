function Cart(props) {
    const {quantity = 0} = props

    return (
        <div className="cart orange darken-4 white-text">
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quntity">{quantity}</span>
            ) : null}
        </div>
    )
}

export {Cart}