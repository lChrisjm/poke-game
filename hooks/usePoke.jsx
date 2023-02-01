import { useContext } from 'react'
import PokeContext from '../context/PokeProvider'

const usePoke = () => {
 return useContext(PokeContext)
}

export default usePoke