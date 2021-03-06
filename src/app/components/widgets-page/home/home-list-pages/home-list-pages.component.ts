import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list-pages',
  templateUrl: './home-list-pages.component.html',
  styleUrls: ['./home-list-pages.component.scss']
})
export class HomeListPagesComponent implements OnInit {

  pages = [
    {
      title: 'Coloriz',
      link: 'coloriz',
      icon: 'i-Drop',
      description: 'Le moteur de recherche qui transforme vos idées en couleurs.'
    },
    {
      title: 'Image analyzor',
      link: 'analyser-image',
      icon: 'i-Pipette',
      description: 'À l\'aide de cet outil, découvrez la palette de couleurs d\'une photo que vous aimez.'
    },
    {
      title: 'ScreenSite',
      link: 'browsershot',
      icon: 'i-Landscape',
      description: 'Faites une capture d\'écran d\'un site web.'
    },
    {
      title: 'Compressor',
      link: 'image-compression',
      icon: 'i-Optimization',
      description: 'Optimisez le poids de vos images.'
    },
    {
      title: 'Brands',
      link: 'brands',
      icon: 'i-Globe',
      description: 'Quel choix de couleur fait une entreprise pour sa marque?'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
