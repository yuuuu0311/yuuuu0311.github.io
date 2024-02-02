import { useState } from "react";
import classNames from "classnames";

const Hero = ({ defaultMsg, greetMsg }) => {
    // state
    const [showGreet, setShowGreet] = useState(false);

    // style
    const heroClass = classNames("welcom-hero", { active: !showGreet }); // => 'hamberger active'
    const subClass = classNames("welcom-sub", { active: showGreet }); // => 'link active'

    // handler
    const greetHandler = (e) => {
        showGreet ? setShowGreet(false) : setShowGreet(true);
    };

    return (
        <section className="welcom-section">
            <h1 className="welcom-container">
                <div className={heroClass} onClick={greetHandler}>
                    Welcom Message
                </div>

                <div className={subClass}>Have a Good Time!</div>
            </h1>
        </section>
    );
};

export default Hero;
