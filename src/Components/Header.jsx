import { Button } from "./Styles/Button.styled";
import { Container } from "./Styles/Container.styled";
import { Flex } from "./Styles/Flex.styled";
import { Image, Logo, Nav, StyledHeader } from "./Styles/Header.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="/Images/logo.svg" />
                    <Button>Try for free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build communities. You
                            have a voice, but so does your audience. Create
                            connections with your users as you engage in genuine
                            discussion.
                        </p>
                        <Button bg="#ff0099" color="white">
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src="/Images/illustration-mockups.svg"/>
                </Flex>
            </Container>
        </StyledHeader>
    );
}
