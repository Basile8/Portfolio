import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    
  isModalOpen = false;
  selectedProject: any;

  constructor(private translate: TranslateService) { }

  projectOne = {
    title: 'PROJECTS.PROJECT_1_TITLE',
    description: 'PROJECTS.PROJECT_1_DESCRIPTION',
    images: ['./assets/Images/project-1.png', './assets/Images/project-2.png'],
    technologies: 'PROJECTS.PROJECT_1_TECHNOLOGIES'
  };

  projectTwo = {
    title: 'PROJECTS.PROJECT_2_TITLE',
    description: 'PROJECTS.PROJECT_2_DESCRIPTION',
    images: ['./assets/Images/Projects/P2_Schema_Archi_fonctionnelle.png', './assets/Images/Projects/P2_Visuel_Appli.png', './assets/Images/Projects/P2_Installation_Composants.png'],
    technologies: 'PROJECTS.PROJECT_2_TECHNOLOGIES'
  };

  projectThree = {
    title: 'PROJECTS.PROJECT_3_TITLE',
    description: 'PROJECTS.PROJECT_3_DESCRIPTION',
    images: ['./assets/Images/Projects/AMP/Authentification_Screen.png', './assets/Images/Projects/AMP/Inventory_Screen.png'],
    technologies: 'PROJECTS.PROJECT_3_TECHNOLOGIES'
  };

  async openModal(project: any) {
    const translatedProject = {
      title: await this.translate.get(project.title).toPromise(),
      description: await this.translate.get(project.description).toPromise(),
      technologies: await this.translate.get(project.technologies).toPromise(),
      images: project.images
    };

    this.selectedProject = translatedProject;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
