import { ThemeProvider } from "styled-components";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Container } from "./Components/Styles/Container.styled";
import { GlobalStyles } from "./Components/Styles/Global";

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },
    mobile: "768px",
};

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    <h1>Hello</h1>
                </Container>
                <Body />
            </>
        </ThemeProvider>
    );
}
