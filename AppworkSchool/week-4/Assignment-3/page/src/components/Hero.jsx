import { useState } from "react";
import classNames from "classnames";

// mockData
import { hero } from "../mockData";

const Hero = () => {
    console.log(hero);

    // state
    const [showGreet, setShowGreet] = useState(false);

    // style
    const heroClass = classNames("welcom-hero", { active: !showGreet }); // => 'hamberger active'
    const subClass = classNames("welcom-sub", { active: showGreet }); // => 'welcom-sub active'

    // handler
    const greetHandler = (e) => {
        showGreet ? setShowGreet(false) : setShowGreet(true);
    };

    return (
        <section className="welcom-section">
            <h1 className="welcom-container">
                <div className={heroClass} onClick={greetHandler}>
                    {hero.defaultMsg}
                </div>

                <div className={subClass}> {hero.greetMsg}</div>
            </h1>
        </section>
    );
};

export default Hero;
