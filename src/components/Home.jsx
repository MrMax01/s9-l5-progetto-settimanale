import { Container } from "react-bootstrap";
import FilmList from "./FilmList";

function Home() {
  return (
    <Container>
      <FilmList films="batman" />
      <FilmList films="lord of rings" />
      <FilmList films="harry potter" />
    </Container>
  );
}
export default Home;
