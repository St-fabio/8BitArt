import { pixel } from "./pixel.class";

class pixelArt {
    constructor(nom, auteur, hauteur, largeur) {
        this.nom = nom;
        this.auteur = auteur;
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.tableau = [];
        this.generateTableau();
        this.colorAct = "ffffff";
    }

    generateTableau() {
        for(let i = 0; i < this.hauteur; i++) {
            for(let j = 0; j < this.largeur; j++) {
                let pixelAct = new pixel(i, j, "ffffff");
                this.tableau.push(pixelAct);
            }
        }

    }

    getPixel(xPos, yPos) {
        const found = this.tableau.find(item => item.x === xPos && item.y === yPos);

        return found;
    }

    getAllColor() {
        let color = [];

        color.push(this.tableau[0].codeCouleur);

        for (let i = 1; i < this.tableau.length; i++) {
            let isIn = false;
            for (let j = 0; j < color.length; j++) {
                if (this.tableau[i].codeCouleur == color[j]) {
                    isIn = true;
                }
            }
            
            if (!isIn) {
                color.push(this.tableau[i].codeCouleur);
            }
        }

        return color;
    }
}

export {pixelArt};