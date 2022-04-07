import Container from "../components/Container";
import Heading from "../components/Heading";
import Description from "../components/Description";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import { Skin, Text, TextBold } from "../theme";
import Illustration from "../assets/illustration.svg";

function Home() {
  return (
    <Container
      spacing="20px"
      style={{
        background: Skin,
        minHeight: "100vh",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container margin="0 0 40px 0" padding="0">
        <Heading color="#444" size="3vmax" weight="900">
          Minds.so
        </Heading>
      </Container>

      <img height={350} src={Illustration} alt="Main Illustration" />

      <Container spacing="5px" padding="0">
        <Heading align="center" size="60px">Create beautiful images from your words</Heading>

        <Description>
          Present your quotes in a nice looking color and theme that makes them
          feel like reading from a book
        </Description>

        <Link to="/editor">
          <Button
            style={{
              width: "100%",
            }}
          >
            Create yours
            <ChevronRight />
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default Home;