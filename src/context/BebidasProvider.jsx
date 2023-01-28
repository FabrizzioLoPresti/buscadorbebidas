import { useState, useEffect, createContext } from "react"
import axios from 'axios'

const BebidasContext = createContext()
const BebidasProvider = ({children}) => {

  const [bebidas, setBebidas] = useState([])
  const [modal, setModal] = useState(false)
  const [bebidaId, setBebidaId] = useState(null)
  const [receta, setReceta] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)
    const obtenerReceta = async () => {
      if(!bebidaId) return
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        const { data: { drinks } } = await axios(url)
        setReceta( drinks[0] )
      } catch (error) {
        console.log( error )
      } finally {
        setCargando(false)
      }
    }
    obtenerReceta()
  }, [bebidaId])

  const consultarBebida = async (datos) => {
    const { nombre, categoria } = datos
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
      const { data: { drinks } } = await axios(url)
      setBebidas( drinks )
    } catch (error) {
      console.log( error )
    }
  }

  const handleModal = () => {
    setModal(!modal)
  }

  const handleBebidaId = (id) => {
    setBebidaId(id)
  }

  return (
    <BebidasContext.Provider
      value={{
        consultarBebida,
        bebidas,
        modal,
        handleModal,
        handleBebidaId,
        receta,
        cargando
      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}

export {
  BebidasProvider
}
export default BebidasContext