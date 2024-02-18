import logo from "./logo.svg";
import "./App.css";

// components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
    // const { nav, hero, content } = mockData;

    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
            <Content></Content>
        </div>
    );
}

export default App;
