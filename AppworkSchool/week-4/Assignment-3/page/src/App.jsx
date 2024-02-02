import logo from "./logo.svg";
import "./App.css";

// components
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
    return (
        <div>
            <Hero
                greetMsg="Have a Good Time!"
                defaultMsg="Welcome Message"
            ></Hero>
            <Content></Content>
        </div>
    );
}

export default App;
