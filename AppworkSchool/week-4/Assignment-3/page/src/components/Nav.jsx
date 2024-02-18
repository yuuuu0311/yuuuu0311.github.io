import { useState } from "react";
import classNames from "classnames";

// mockData
import { nav } from "../mockData";

const Nav = () => {
    // state
    const [menuToggle, setMenuToggle] = useState(false);

    // style
    const hamburgerClass = classNames("hamberger", { active: menuToggle }); // => 'hamberger active'
    const linkClass = classNames("link", { active: menuToggle }); // => 'link active'

    // render function
    const renderLink = nav.linkGroup.map((link, index) => {
        return <li key={index}>{link.label}</li>;
    });

    // handler
    const handleMenuToggle = () => {
        menuToggle ? setMenuToggle(false) : setMenuToggle(true);
    };

    return (
        <header>
            <nav className="nav-container">
                <div className="nav-inner">
                    <div className="nav-logo">Website Title / Logo</div>
                    <div className="nav-group">
                        <ul className={linkClass}>{renderLink}</ul>
                        <div
                            className={hamburgerClass}
                            onClick={handleMenuToggle}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
