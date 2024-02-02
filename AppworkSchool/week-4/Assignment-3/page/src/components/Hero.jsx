const Hero = ({ defaultMsg, greetMsg }) => {
    const clickHandler = (e) => {
        const text =
            e.target.textContent === defaultMsg ? greetMsg : defaultMsg;

        e.target.textContent = text;
        return;
    };

    return (
        <section>
            <div onClick={clickHandler}>
                <h1>Welcome Message</h1>
            </div>
        </section>
    );
};

export default Hero;
