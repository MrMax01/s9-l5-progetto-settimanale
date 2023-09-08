import { Image } from "react-bootstrap";

function SingleFilm(props) {
  return <Image fluid src={props.film.Poster} />;
}
export default SingleFilm;
