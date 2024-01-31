import { render, screen } from "@testing-library/react";
import App from "./App";
import SearchForm from "./components/SearchForm";

test("render search form", () => {
    render(<SearchForm />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(SearchForm).toBeInTheDocument();
});
