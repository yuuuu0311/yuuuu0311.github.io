import logo from "./logo.svg";
import "./App.css";

// layout
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
// import SearchForm from "./components/SearchForm";
// import ResultList from "./components/ResultList";

import Header from "./components/Header";

function App() {
    return (
        <div>
            <Container>
                <Row>
                    <Header></Header>
                </Row>
            </Container>
        </div>
    );
}

export default App;
