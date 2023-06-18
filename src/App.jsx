import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import { Container } from "./Components/Styles/Container.styled";
import { GlobalStyles } from "./Components/Styles/Global";
import { content } from "./Content";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

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
                    {content.map((c, index) => (
                        <Card key={index} item={c} />
                    ))}
                </Container>
                <Footer />
            </>
        </ThemeProvider>
    );
}
