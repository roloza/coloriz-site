import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list-pages',
  templateUrl: './home-list-pages.component.html',
  styleUrls: ['./home-list-pages.component.scss']
})
export class HomeListPagesComponent implements OnInit {
  pages = [
    {
      title: "Coloriz",
      link: 'coloriz',
      icon: 'i-Drop',
      description: 'Le moteur de recherche qui transforme vos idées en couleurs.'
    },
    {
      title: "Créez votre palette de couleurs",
      link: 'analyser-image',
      icon: 'i-Pipette',
      description: 'À l\'aide de cet outil, découvrez la palette de couleurs d\'une photo que vous aimez.'
    },
    {
      title: "BrowserShot",
      link: 'browsershot',
      icon: 'i-Landscape',
      description: 'Faites une capture d\'écran d\'un site web.'
    },
    {
      title: "Compressor",
      link: 'image-compression',
      icon: 'i-Optimization',
      description: 'Optimisez le poids de vos images.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
