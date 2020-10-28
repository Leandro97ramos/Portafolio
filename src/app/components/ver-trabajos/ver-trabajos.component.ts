import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService} from '../../services/project.service';
import { Global} from '../../services/global';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ver-trabajos',
  templateUrl: './ver-trabajos.component.html',
  styleUrls: ['./VerTrabajo.component.css'],
  providers:[ProjectService]
})
export class VerTrabajosComponent implements OnInit {
  public projects: Project[];
  public url: string;
  constructor(
      private _projectService: ProjectService

  ) { this.url= Global.url ;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
        response => {
          if(response.projects){
            this.projects = response.projects;
          }
        },
        error => {
           console.log(<any>error)
        }
    );
  }


}
