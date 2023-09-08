import { Component } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

class FilmList extends Component {
  state = {
    isLoading: true,
    filmList: [],
  };
  componentDidMount = () => {
    this.setState({ isLoading: true });
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=fed04270&s=" + this.props.films)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((res) => {
        const films = res.Search;
        // console.log(films);
        this.setState({ filmList: films });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <Container>
        <h2 className="text-white">{this.props.typeList}</h2>
        <Row xs={2} md={4} lg={6}>
          {this.state.isLoading && <Spinner animation="border" variant="light" className="mx-auto" />}
          {this.state.filmList.map((film) => (
            <Col key={film.imdbID} className="text-white">
              ciao
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default FilmList;
