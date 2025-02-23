import {React, useState} from 'react';
import { pixel } from '../Models/pixel.class.js';

function Pixel(props) {
    const {pixel, pixelArt} = props;

    const [color, setColor] = useState(pixel.codeCouleur);

    const handleColor = () => {
        setColor(`${pixelArt.colorAct}`);
    }

    if (!pixel) {
        // Gérer l'affichage pour un pixel invalide
        return <td>Pixel invalide</td>; // Ou autre fallback
    }

    return (
        <>
            <td style={{ backgroundColor: `#${color}`}} onClick={handleColor}>
                
            </td>
        </>
    );
}

export {Pixel}