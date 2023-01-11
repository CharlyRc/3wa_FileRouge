import React from "react"
import CardProducts from "./CardProducts.jsx"

const Products = () => {

    return (
        <React.Fragment>
            <section className="products">
                <h2 className="title-categories main-title-product">Nos produits</h2>
                <div className="container-products">
                    <CardProducts />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Products
