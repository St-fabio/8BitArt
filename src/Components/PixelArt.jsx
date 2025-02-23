import { React, useState } from 'react';
import { Pixel } from './Pixel';
import { pixelArt } from '../Models/pixelArt.class.js';

function PixelArtRow(props) {
    const { pixelArt, rowNumber } = props;

    const row = [];

    // Remplace 'largeur' par 'pixelArt.largeur'
    for (let i = 0; i < pixelArt.largeur; i++) {
        //console.log(pixelArt.getPixel(rowNumber, i).x);
        row.push(<Pixel key={`pixel-${rowNumber}-${i}`} pixel={pixelArt.getPixel(rowNumber, i)} pixelArt={pixelArt}/>);
    }

    return (
        <>
            {row}
        </>
    );
}

function PixelArt(props) {
    const { pixelArt } = props;

    const TlComp = [];

    for (let i = 0; i < pixelArt.hauteur; i++) {
        TlComp.push(
            <tr key={`row-${i}`}>
                <PixelArtRow pixelArt={pixelArt} rowNumber={i} />
            </tr>
        );
    }

    return (
        <>
            {pixelArt.nom}
            <table>
                {TlComp}
            </table>
        </>
    );
}

export { PixelArt };
