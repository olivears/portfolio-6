import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: Array<{}> = [{
    title: 'Fl-buttons',
    subtitle: 'Librairie CSS',
    text: `
    <p>Ceci est un ensemble de boutons stylisés et animés en CSS.</p>
    <p>100% plug and play !</p>
    <p>Téléchargez la feuille de style puis utilisez les classes afin de créer d'incroyables boutons pour votre site web.</p>
    `,
    link: 'https://florentlandure.com/project/fl-buttons',
    image: 'fl-buttons-preview.png',
    imageAlt: 'Preview FL-buttons',
    tags: ['CSS 3', 'Librairie']
  },
  {
    title: 'Gaming',
    subtitle: 'Développement front-end',
    text: `
    <p>Le site de présentation de mes chaines Youtube et Twitch.</p>
    <p>Vous pouvez y trouver la chaine en direct ainsi qu'une liste de mes dernières vidéos Youtube (récupérées depuis l'API).</p>
    `,
    link: 'https://florentlandure.com/project/gaming',
    image: 'ascytra-preview.png',
    imageAlt: 'Preview site streaming',
    tags: ['Sass', 'jQuery', 'API']
  }];

  constructor() {
    PageScrollConfig.defaultDuration = 400;
  }
}
