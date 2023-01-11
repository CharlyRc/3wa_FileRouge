import React from "react"
import Nav from "./Nav.jsx"

const Header = () => {

    return (
        <React.Fragment>
            <Nav />
            <header>
                <section className="main">
                    <h1 className="main-title">The Coffee House</h1>
                </section>
            </header>
        </React.Fragment>
    )
}

export default Header
