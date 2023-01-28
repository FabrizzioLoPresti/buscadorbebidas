import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {

  const { handleModal, handleBebidaId } = useBebidas()
  const { strDrink, strDrinkThumb, idDrink } = bebida

  return (
    <Col
      md={6}
      lg={3}
    >
      <Card className='mb-4'>
        <Card.Img 
          variant='top'
          src={strDrinkThumb}
          alt={`Imagen ${strDrink}`}
        />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Card.Text>Algo mas</Card.Text>
          <Button
            variant='warning'
            className='w-100 text-uppercase mt-2'
            onClick={() => {
              handleModal(),
              handleBebidaId(idDrink)
            }}
          >
            Ver Mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Bebida