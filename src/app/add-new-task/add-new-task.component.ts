import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import {TaskService} from "../services/task-service.service";

@Component({
  standalone: true,
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.scss',
  imports: [ReactiveFormsModule]
})
export class AddNewTaskComponent {

  nuevaTarea = new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    fecha: new FormControl(''),
    tema: new FormControl('')
  });

  constructor(
      private router: Router,
      private taskService: TaskService
  ) {}

  goPagPrincipal() {
    this.router.navigate(['pagPrincipal']);
  }

  onSubmit() {
    if (this.nuevaTarea.valid) {
      const formData = this.nuevaTarea.value;
      this.taskService.agregarTarea(formData);

      this.goPagPrincipal();
    } else {
      console.warn('Form is not valid');
    }
  }


}
