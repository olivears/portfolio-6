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
    year: '2015',
    subtitle: 'Librairie CSS',
    text: `
    <p>Ceci est un ensemble de boutons stylisés et animés en CSS.</p>
    <p>100% plug and play !</p>
    <p>Téléchargez la feuille de style puis utilisez les classes afin de créer d'incroyables boutons pour votre site web.</p>
    `,
    link: 'https://dev.florentlandure.com/fl-buttons',
    image: 'fl-buttons-preview.png',
    imageAlt: 'Preview FL-buttons',
    tags: ['CSS 3', 'Librairie']
  },
  {
    title: 'Gaming',
    year: '2015',
    subtitle: 'Développement front-end',
    text: `
    <p>Le site de présentation de mes chaines Youtube et Twitch.</p>
    <p>Vous pouvez y trouver la chaine en direct ainsi qu'une liste de mes dernières vidéos Youtube.</p>
    <p>Les vidéos sont récupérés depuis l'API de <a target="_blank" href="https://developers.google.com/youtube/">Youtube</a>.</p>
    `,
    link: 'https://dev.florentlandure.com/gaming',
    image: 'ascytra-preview.png',
    imageAlt: 'Preview site streaming',
    tags: ['Sass', 'jQuery', 'API']
  },
  {
    title: 'Sodapoppin.tv',
    year: '2016',
    subtitle: 'Web design',
    text: `
    <p>J'ai créé un nouveau design pour le site web déja existant de Sodapoppin. C'est un streamer très réputé sur Twitch.</p>
    <p>J'ai gardé la structure de la page, et changé le thème pour donner un nouveau look au site.</p>
    `,
    link: 'http://sodapoppin.tv',
    image: 'sodapoppin-preview.png',
    imageAlt: 'Preview site Sodapoppin',
    tags: ['Design', 'Photoshop']
  },
  {
    title: 'Twitch.tv',
    year: '2016',
    subtitle: 'Web design',
    text: `
    <p>J'ai créé un nouveau design du site de streaming Twitch.</p>
    <p>J'ai changé la structure de la page afin d'avoir une présentation dans un style tableau de bord.</p>
    <p class="info"><em>Info: Le site a effectué une refonte graphique en Mars 2017.</em></p>
    `,
    link: 'https://twitch.tv',
    image: 'twitchtv-preview.png',
    imageAlt: 'Preview site Twitch',
    tags: ['Design', 'Photoshop']
  },
  {
    title: 'League Data',
    year: '2017',
    subtitle: 'Développement full stack',
    text: `
    <p>Un petit projet qui permet aux joueurs et joueuses de League of Legends de rechercher leur profil ou celui de quelqu'un d'autre.</p>
    <p>Ils peuvent également consulter la liste des champions et des objets du jeu.</p>
    <p>Le site récupère les données depuis à l'API de <a target="_blank" href="https://developer.riotgames.com/">Riot Games</a>.</p>
    <p class="info"><em>Info: Le site est encore en cours de développement.</em></p>
    `,
    link: 'https://league-data.herokuapp.com',
    image: 'leaguedata-preview.png',
    imageAlt: 'Preview site League Data',
    tags: ['API', 'Express.js', 'MongoDB']
  }];

  constructor() {
    PageScrollConfig.defaultDuration = 400;
  }
}
