import { Component } from '@angular/core';

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
  }];
}
