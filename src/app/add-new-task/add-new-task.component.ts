import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.scss'
})
export class AddNewTaskComponent {
  constructor(
      private router: Router
  ) {}

  goPagPrincipal() {
    this.router.navigate(['pagPrincipal']);
  }
}
