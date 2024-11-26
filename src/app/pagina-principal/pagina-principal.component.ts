import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task-service.service';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss'],
})
export class PaginaPrincipalComponent implements OnInit {
  tareas: any[] = [];

  constructor(
      private router: Router,
      private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskService.tareas$.subscribe((tareas) => {
      this.tareas = tareas;
    });
  }

  goAdd() {
    this.router.navigate(['add']);
  }

}
