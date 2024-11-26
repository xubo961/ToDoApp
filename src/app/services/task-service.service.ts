import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tareasSubject = new BehaviorSubject<any[]>([]);
  tareas$ = this.tareasSubject.asObservable();

  constructor() {}

  agregarTarea(tarea: any) {
    const tareas = this.tareasSubject.value;
    tareas.push(tarea);
    this.tareasSubject.next(tareas);
  }
}
