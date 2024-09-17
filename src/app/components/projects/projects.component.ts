import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    
  isModalOpen = false;
  selectedProject: any;

  projectOne = {
    title: 'Project One',
    description: 'This is the description of project one.',
    images: ['./assets/Images/project-1.png', './assets/Images/project-2.png'],
    technologies: 'Angular, TypeScript, HTML, CSS'
  };
  projectTwo = {
    title: 'Projet n°2 Sopra Steria (sensible)',
    description: `Dans le cadre de certaines expérimentations, il est nécessaire pour le client de piloter un grand nombre de logiciels (en type et en instance) interconnectés entre eux. Le front est développé à l'aide d'Angular, tandis que le back est assuré par Salt-Stack, spécialisé dans la gestion de configuration et d'automatisation des infrastructures. Durant une partie de mon alternance, j'ai pu contribuer à diverses tâches durant le projet, telles que : 
    - La résolution de faits techniques.
    - Différentes qualifications.
    - Développement de la partie installation de composants sur tout type de VM (front/back).`,
    images: ['./assets/Images/Projects/P2_Schema_Archi_fonctionnelle.png', './assets/Images/Projects/P2_Visuel_Appli.png', './assets/Images/Projects/P2_Installation_Composants.png'],
    technologies: 'Angular, TypeScript, HTML, CSS, Salt-Stack'
  };
    projectThree = {
    title: `Réalisation d'un jeux vidéo multijoueur`,
    description: `J'ai toujours aimé les jeux vidéos, et depuis ma dernière année d'étude j'ai commencé à réaliser un type de jeux qui me portait à coeur. Le jeux s'appelle "Allez mon Poulain", et est accessible depuis navigateur pour ordinateur ou téléchargeable pour téléphone Android. L'objectif est de créer son personnage, et affronter divers adversaires pour remporter de l'or et de l'expérience. Chaque niveau offrira de nouvelles compétences, et permettra à votre personnage de se spécialiser à travers 4 types élémentaires : Feu, Eau, Sol et Foudre qui ont chacun leur spécificité. Un système d'inventaire et de magasin nouvellement implémenté permet une spécialisation accrue du personnage. `,
    images: ['./assets/Images/Projects/AMP/Authentification_Screen.png', './assets/Images/Projects/AMP/Inventory_Screen.png', './assets/Images/Projects/AMP/Character_Creation_Screen.png', './assets/Images/Projects/AMP/Main_Menu_Screen.png', './assets/Images/Projects/AMP/Shop_Screen.png'],
    technologies: 'C#, Unity, .Net'
  };
  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
