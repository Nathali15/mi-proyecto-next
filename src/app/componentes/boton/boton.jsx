import { useState} from 'react'
import './style.boton.css'

export default function Boton(){ 
    const [presionado, setPresionado] = useState(false)
    
    const handleClick = () => {
    setPresionado((prevState) => !prevState);

}
    return (<button className='Boton' onClick={handleClick}>
        {presionado ? "Presionado" : "Presioname"}</button>
    )
}   

