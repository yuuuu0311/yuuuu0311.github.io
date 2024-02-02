import logo from "./logo.svg";
import "./App.css";

// mockData
import mockData from "./mockData/mockData";

// components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
    const { nav, hero, content } = mockData;

    return (
        <div>
            <Nav navData={nav}></Nav>
            <Hero greetMsg={hero.greetMsg} defaultMsg={hero.defaultMsg}></Hero>
            <Content contentList={content}></Content>
        </div>
    );
}

export default App;
