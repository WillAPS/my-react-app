import { Container, Row, Col } from "react-bootstrap"
import "../ui/styles/images.css"

export default function GridImages(){
  const images = [
    {src: '/images/aespa_drama.jpg', link: 'https://www.youtube.com/watch?v=D8VEhcPeSlc&list=PLkYoDE3zi9FFMr4j1ttL1inGPmt2sckwT&index=33&pp=iAQB8AUB'},
    {src: '/images/aespa_myworld.jpg', link: 'https://www.youtube.com/watch?v=Os_heh8vPfs&list=PLkYoDE3zi9FFMr4j1ttL1inGPmt2sckwT&index=22&pp=iAQB8AUB'},
    {src: '/images/aespa_savage.jpg', link: 'https://www.youtube.com/watch?v=WPdWvnAAurg&list=PLkYoDE3zi9FFMr4j1ttL1inGPmt2sckwT&index=7&pp=iAQB8AUB'},
    {src: '/images/aespa_nextlevel.jpg', link: 'https://www.youtube.com/watch?v=4TWR90KJl84&list=PLkYoDE3zi9FFMr4j1ttL1inGPmt2sckwT&index=4&pp=iAQB8AUB'},
  ];

  return (
    <Container>
      <Row className="row">
        {images.map((image, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <a href={image.link} target="_blank" rel="noreferrer">
              <img src={image.src} alt={`Imagemm ${index + 1}`} className="imagem" />
            </a>
          </Col>
        ) )}
      </Row>
    </Container>
  );
}
