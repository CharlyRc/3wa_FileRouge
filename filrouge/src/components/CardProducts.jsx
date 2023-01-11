import React from "react"

const CardProducts= () => {

    return (
        <div className="card-product">
            <div className="container-product-img">
                <img className='product-img' src="assets/images/product_0.jpg"/>
            </div>
            <div className="card-body-product">
                <h3 className="title-product">Title</h3>
                <p className="description-product">Porro, id voluptate repellat, maiores eum iste voluptates vel facere, enim numquam veniam quidem neque ipsa
                </p>
                <div className="footer-card">
                    <div className="footer-card-qte">
                        <button className="btn-product-qte">-</button>
                        <strong>0</strong>
                        <button className="btn-product-qte">+</button>
                    </div>
                    <button className="btn-product">Ajouter au panier</button>
                </div>
            </div>
        </div>
    )
}

export default CardProducts