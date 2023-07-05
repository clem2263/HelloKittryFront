import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { ViewChild } from "@angular/core";
import { Slide } from "../carousel/carousel.interface";
import { AnimationType } from "../carousel/carousel.animations";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(CarouselComponent, { static: true }) carousel!: CarouselComponent;
  animationType = AnimationType.Fade;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];

  slides: Slide[] = [
    {
      headline: "33 tours exclusif de Hacques brêle",
      src:
        "../../assets/Pièces auto/33 tours exclusif de Hacques brêle.png"
    },
    {
      headline: "Aiguille compte tour-nique",
      src:
        "../../assets/Pièces auto/Aiguille compte tour-nique.png"
    },
    {
      headline: "Allumeur le feu",
      src:
        "../../assets/Pièces auto/Allumeur le feu 🎶.png"
    },
    {
      headline: "Amortifrere",
      src:
        "../../assets/Pièces auto/Amortifrere.png"
    },
    {
      headline: "Ampoule à cycle catholique",
      src:
        "../../assets/Pièces auto/Ampoule à cycle catholique .png"
    },
    {
      headline: "Appareil de commande infrarouge pour la gestion avancé de moteur centrifuge racisté",
      src:
        "../../assets/Pièces auto/Appareil de commande infrarouge pour la gestion avancé de moteur centrifuge racisté.png"
    },
    {
      headline: "Baguette magique (Harry)",
      src:
        "../../assets/Pièces auto/Baguette magique (Harry).png"
    },
    {
      headline: "Baguette magique (Ron)",
      src:
        "../../assets/Pièces auto/Baguette magique (Ron).png"
    },
    {
      headline: "Balais de suie glace à la menthe",
      src:
        "../../assets/Pièces auto/Balais de suie glace à la menthe .png"
    },
    {
      headline: "Balle de Ping Ping",
      src:
        "../../assets/Pièces auto/Balle de Ping Ping.png"
    },
    {
      headline: "Barre à mine",
      src:
        "../../assets/Pièces auto/Barre à mine.png"
    },
    {
      headline: "Bobine d’allu-mage noire",
      src:
        "../../assets/Pièces auto/Bobine d’allu-mage noire.png"
    },
    {
      headline: "Boîte à gant",
      src:
        "../../assets/Pièces auto/Boîte à gant.png"
    },
    {
      headline: "Boîte de dépression (Xanax)",
      src:
        "../../assets/Pièces auto/Boîte de dépression (Xanax).png"
    },
    {
      headline: "Bougie d’allumage d’anniversaire",
      src:
        "../../assets/Pièces auto/Bougie d’allumage d’anniversaire .png"
    },
    {
      headline: "Bougie de préchauffage de morgue",
      src:
        "../../assets/Pièces auto/Bougie de préchauffage de morgue .png"
    },
    {
      headline: "Boule de pétanque à usage modéré",
      src:
        "../../assets/Pièces auto/Boule de pétanque à usage modéré .png"
    },
    {
      headline: "Brise glace",
      src:
        "../../assets/Pièces auto/Brise glace.png"
    },
    {
      headline: "Câble de frein de son frère",
      src:
        "../../assets/Pièces auto/Câble de frein de son frère .png"
    },
    {
      headline: "Cap-oral",
      src:
        "../../assets/Pièces auto/Cap-oral.png"
    },
    {
      headline: "Capteur asmr",
      src:
        "../../assets/Pièces auto/Capteur asmr .png"
    },
    {
      headline: "Capteur de cliticlic",
      src:
        "../../assets/Pièces auto/Capteur de cliticlic.png"
    },
    {
      headline: "Capteur position d_arbre à cames à sucre",
      src:
        "../../assets/Pièces auto/Capteur position d_arbre à cames à sucre.png"
    },
    {
      headline: "Capteur position d_arbre à cames à sutra",
      src:
        "../../assets/Pièces auto/Capteur position d_arbre à cames à sutra.png"
    },
    {
      headline: "Chambre de fusion nucléaire",
      src:
        "../../assets/Pièces auto/Chambre de fusion nucléaire .png"
    },
    {
      headline: "Chapeau pare-poussière, distributeur d_allumage (c’est juste une visse)",
      src:
        "../../assets/Pièces auto/Chapeau pare-poussière, distributeur d_allumage (c’est juste une visse).png"
    },
    {
      headline: "Chassis",
      src:
        "../../assets/Pièces auto/Chassis .png"
    },
    {
      headline: "Courroie dagobert",
      src:
        "../../assets/Pièces auto/Courroie dagobert.png"
    },
    {
      headline: "Doigts d’allumeur",
      src:
        "../../assets/Pièces auto/Doigts d’allumeur.png"
    },
    {
      headline: "Enceintes bass boost ultra sport",
      src:
        "../../assets/Pièces auto/Enceintes bass boost ultra sport.png"
    },
    {
      headline: "Espadrille",
      src:
        "../../assets/Pièces auto/Espadrille.png"
    },
    {
      headline: "Essoreuse a salade",
      src:
        "../../assets/Pièces auto/Essoreuse a salade.png"
    },
    {
      headline: "Faisceau ici non ?",
      src:
        "../../assets/Pièces auto/Faisceau ici non _.png"
    },
    {
      headline: "Feu arrières",
      src:
        "../../assets/Pièces auto/Feu arrières .png"
    },
    {
      headline: "Fiche bougie d’allu-maj",
      src:
        "../../assets/Pièces auto/Fiche bougie d’allu-maj.png"
    },
    {
      headline: "Galette bretonne pur beurre",
      src:
        "../../assets/Pièces auto/Galette bretonne pur beurre.png"
    },
    {
      headline: "Glacière portative de secours",
      src:
        "../../assets/Pièces auto/Glacière portative de secours .png"
    },
    {
      headline: "Horloge sans aiguille",
      src:
        "../../assets/Pièces auto/Horloge sans aiguille .png"
    },
    {
      headline: "iPhone 14 + pro max ultra",
      src:
        "../../assets/Pièces auto/iPhone 14 + pro max ultra.png"
    },
    {
      headline: "Jauuuuunne !",
      src:
        "../../assets/Pièces auto/Jauuuuunne !.png"
    },
    {
      headline: "Joint de carter de (grande) distribution",
      src:
        "../../assets/Pièces auto/Joint de carter de (grande) distribution .png"
    },
    {
      headline: "Joint hétéroclite",
      src:
        "../../assets/Pièces auto/Joint hétéroclite .png"
    },
    {
      headline: "Kevin",
      src:
        "../../assets/Pièces auto/Kevin.png"
    },
    {
      headline: "Klaxon",
      src:
        "../../assets/Pièces auto/Klaxon.png"
    },
    {
      headline: "Kris",
      src:
        "../../assets/Pièces auto/Kris.png"
    },
    {
      headline: "L’essentiel",
      src:
        "../../assets/Pièces auto/L’essentiel .png"
    },
    {
      headline: "La Pédale",
      src:
        "../../assets/Pièces auto/La Pédale .png"
    },
    {
      headline: "La télé",
      src:
        "../../assets/Pièces auto/La télé.png"
    },
    {
      headline: "Le driftor",
      src:
        "../../assets/Pièces auto/Le driftor .png"
    },
    {
      headline: "Le mange boue",
      src:
        "../../assets/Pièces auto/Le mange boue .png"
    },
    {
      headline: "Le petit bonhomme en mousse",
      src:
        "../../assets/Pièces auto/Le petit bonhomme en mousse.png"
    },
    {
      headline: "Le planté de bâton de transmissions",
      src:
        "../../assets/Pièces auto/Le plante de bâton de transissions .png"
    },
    {
      headline: "Le précieux",
      src:
        "../../assets/Pièces auto/Le précieux .png"
    },
    {
      headline: "Le triangle des Bermudes",
      src:
        "../../assets/Pièces auto/Le triangle des Bermudes.png"
    },
    {
      headline: "Le vois à gauche",
      src:
        "../../assets/Pièces auto/Le vois à gauche.png"
    },
    {
      headline: "Le vois derrière",
      src:
        "../../assets/Pièces auto/Le vois derrière .png"
    },
    {
      headline: "Lève veau",
      src:
        "../../assets/Pièces auto/Lève veau.png"
    },
    {
      headline: "Levier de vite",
      src:
        "../../assets/Pièces auto/Levier de vite.png"
    },
    {
      headline: "/Ma flasque",
      src:
        "../../assets/Pièces auto/Ma flasque.png"
    },
    {
      headline: "Mange trottoirs",
      src:
        "../../assets/Pièces auto/Mange trottoirs .png"
    },
    {
      headline: "Minuteur de cuisson",
      src:
        "../../assets/Pièces auto/Minuteur de cuisson.png"
    },
    {
      headline: "Module d’aluarchimage",
      src:
        "../../assets/Pièces auto/Module d’aluarchimage.png"
    },
    {
      headline: "Molette réglage siège",
      src:
        "../../assets/Pièces auto/Molette réglage siège.png"
    },
    {
      headline: "Montre sans aiguille",
      src:
        "../../assets/Pièces auto/Montre sans aiguille.png"
    },
    {
      headline: "Moteur, action !",
      src:
        "../../assets/Pièces auto/Moteur, action !.png"
    },
    {
      headline: "O ma bitch arrière",
      src:
        "../../assets/Pièces auto/O ma bitch arrière.png"
    },
    {
      headline: "Oreillettes de Cyril la sécu",
      src:
        "../../assets/Pièces auto/Oreillettes de Cyril la sécu .png"
    },
    {
      headline: "Pare biffles",
      src:
        "../../assets/Pièces auto/Pare buffles.png"
    },
    {
      headline: "Pedale d’embrouillage",
      src:
        "../../assets/Pièces auto/Pedale d’embrouillage.png"
    },
    {
      headline: "Pedale Ô cruciformes",
      src:
        "../../assets/Pièces auto/Pedale Ô cruciformes .png"
    },
    {
      headline: "Phares bretons",
      src:
        "../../assets/Pièces auto/Phares bretons .png"
    },
    {
      headline: "Pistolet",
      src:
        "../../assets/Pièces auto/Pistolet .png"
    },
    {
      headline: "Plaque funéraire",
      src:
        "../../assets/Pièces auto/Plaque funéraire .png"
    },
    {
      headline: "Pneu est",
      src:
        "../../assets/Pièces auto/Pneu est.png"
    },
    {
      headline: "Pneu Nord",
      src:
        "../../assets/Pièces auto/Pneu Nord.png"
    },
    {
      headline: "Pneu Ouest",
      src:
        "../../assets/Pièces auto/Pneu Ouest.png"
    },
    {
      headline: "Pneu Sud",
      src:
        "../../assets/Pièces auto/Pneu Sud.png"
    },
    {
      headline: "Poignée d’amour",
      src:
        "../../assets/Pièces auto/Poignée d’amour.png"
    },
    {
      headline: "Poignée de porte extérieure",
      src:
        "../../assets/Pièces auto/Poignée de porte extérieure.png"
    },
    {
      headline: "Poignée de portière intérieur",
      src:
        "../../assets/Pièces auto/Poignée de portière intérieur .png"
    },
    {
      headline: "Poignée de veau",
      src:
        "../../assets/Pièces auto/Poignée de veau.png"
    },
    {
      headline: "Poignée réglage siège",
      src:
        "../../assets/Pièces auto/Poignée réglage siège.png"
    },
    {
      headline: "Porte à porte (droite)",
      src:
        "../../assets/Pièces auto/Porte à porte (droite).png"
    },
    {
      headline: "Porte de boîte a gants",
      src:
        "../../assets/Pièces auto/Porte de boîte a gants.png"
    },
    {
      headline: "Porte tic (gauche)",
      src:
        "../../assets/Pièces auto/Porte tic (gauche).png"
    },
    {
      headline: "Portier bâbord",
      src:
        "../../assets/Pièces auto/Portier bâbord .png"
    },
    {
      headline: "Portier tribord",
      src:
        "../../assets/Pièces auto/Portier tribord.png"
    },
    {
      headline: "Pot de jappements",
      src:
        "../../assets/Pièces auto/Pot de jappements.png"
    },
    {
      headline: "Pout-soufflet de cardan",
      src:
        "../../assets/Pièces auto/Pout-soufflet de cardan.png"
    },
    {
      headline: "Protège lapin",
      src:
        "../../assets/Pièces auto/Protège lapin.png"
    },
    {
      headline: "Protège poignets de tiroir",
      src:
        "../../assets/Pièces auto/Protège poignets de tiroir .png"
    },
    {
      headline: "Régulateur thermodynamique à lave vaisselles",
      src:
        "../../assets/Pièces auto/Régulateur thermodynamique à lave vaisselles .png"
    },
    {
      headline: "Relais 100m de préchauffage",
      src:
        "../../assets/Pièces auto/Relais 100m de préchauffage .png"
    },
    {
      headline: "Réservoir d’essence",
      src:
        "../../assets/Pièces auto/Réservoir d’essence.png"
    },
    {
      headline: "Sert à rien (droit)",
      src:
        "../../assets/Pièces auto/Sert à rien (droit).png"
    },
    {
      headline: "Siège d’extrême droite",
      src:
        "../../assets/Pièces auto/Siège d’extrême droite.png"
    },
    {
      headline: "Siège d’extrême gauche",
      src:
        "../../assets/Pièces auto/Siège d’extrême gauche.png"
    },
    {
      headline: "Siège de Carthage",
      src:
        "../../assets/Pièces auto/Siège de Carthage.png"
    },
    {
      headline: "Siège de the voice",
      src:
        "../../assets/Pièces auto/Siège de the voice.png"
    },
    {
      headline: "Siège social de Danone",
      src:
        "../../assets/Pièces auto/Siège social de Danone.png"
    },
    {
      headline: "Sonde gastrique",
      src:
        "../../assets/Pièces auto/Sonde gastrique.png"
    },
    {
      headline: "Sonde rectale",
      src:
        "../../assets/Pièces auto/Sonde rectale .png"
    },
    {
      headline: "Tapis de sol la si",
      src:
        "../../assets/Pièces auto/Tapis de sol la si.png"
    },
    {
      headline: "Tête de Delcorateur",
      src:
        "../../assets/Pièces auto/Tête de Delcorateur.png"
    },
    {
      headline: "Trappe à mazoute",
      src:
        "../../assets/Pièces auto/Trappe à essence .png"
    },
    {
      headline: "Une H",
      src:
        "../../assets/Pièces auto/Une H.png"
    },
    {
      headline: "Véritable peau de léopard rose",
      src:
        "../../assets/Pièces auto/Véritable peau de léopard rose.png"
    },
    {
      headline: "Vis de rechanges",
      src:
        "../../assets/Pièces auto/Vis de rechanges.png"
    },
    {
      headline: "Volant",
      src:
        "../../assets/Pièces auto/Volant.png"
    },
    {
      headline: "Zirgouflex",
      src:
        "../../assets/Pièces auto/Zirgouflex.png"
    },
  ];

  protected username!: string;
  formData: { name: string } = { name: '' };

  constructor() {}

  ngOnInit(): void {
  }

  submitForm() {
    console.log('Nom :', this.formData.name);
  }

  setAnimationType(type: { value: AnimationType; }) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }

}
