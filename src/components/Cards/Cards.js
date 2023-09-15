import { Button } from '../Button/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const BasicExample = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Título</Card.Title>
        <Card.Text>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </Card.Text>
        <Button variant="primary">Veja mais</Button>
    </Card.Body>
    </Card>
  );
}

export default BasicExample
