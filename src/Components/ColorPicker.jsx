import {React, useState} from 'react';
import {useReload} from '../ReloadContext.jsx';

function ColorCase(props) {
    const {color, pixelArt} = props;

    const handleChangeColor = () => {
        pixelArt.colorAct = color;
    }

    return (
        <>
            <td style={{ backgroundColor: `#${color}`}} onClick={handleChangeColor}>

            </td>
        </>
    );
}

function AddColor(props) {
    const {pixelArt} = props;
    //const {triggerReload} = useReload();

    const [color, setColor] = useState('');

    const handleChangeColorAct = () => {
        pixelArt.colorAct = color;
        triggerReload();
    }

    const handlesetColor = (event) => {
        setColor(event.target.value);
    }

    return (
        <>
            <input type="text" name="color" id="" placeHolder='#ffffff' onChange={handlesetColor}/>
            <button onClick={handleChangeColorAct}>Rajouter</button>
        </>
    );
}

function ColorPicker(props) {
    const {pixelArt} = props;

    const color = pixelArt.getAllColor();

    const colorComp = [];

    for (let i = 0; i < color.length; i++) {
        colorComp.push(<ColorCase key={`color-${i}`} color={color[i]} pixelArt={pixelArt}/>);
    }

    return(
        <>
            <table >
                <tr>
                    {colorComp}
                    <AddColor pixelArt={pixelArt}/>
                </tr>
            </table>
        </>
    );
}

export {ColorPicker}