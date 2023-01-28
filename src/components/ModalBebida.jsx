import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {

  const { modal, handleModal, receta, cargando } = useBebidas()
  const { strDrinkThumb, strDrink, strInstructions } = receta

  const mostrarIngredientesCantidades = () => {
    // console.log( receta['strIngredient1'] ) -> Formas de Acceder a las Propiedades de un Objeto
    // console.log( receta.strIngredient1 ) -> Formas de Acceder a las Propiedades de un Objeto
    let ingredientes = []
    for(let i = 1; i <= 15; i++) {
      if(receta[`strIngredient${i}`]) {
        // No hay problema de usar Push pq no estamos Modificando Valor Original de State
        ingredientes.push(
          <li>{receta[`strIngredient${i}`]} - {receta[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes
  }

  return (
    !cargando && (
      <Modal
        show={modal}
        onHide={handleModal}
      >
        <Image 
          src={strDrinkThumb}
          alt={`Imagen ${strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>
            {strDrink}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {strInstructions}
            <h2>Ingredientes y Cantidades</h2>
            {mostrarIngredientesCantidades()}
          </div>
        </Modal.Body>
      </Modal>
    )
  )
}

export default ModalBebida