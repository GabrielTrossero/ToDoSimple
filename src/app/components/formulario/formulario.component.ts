import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: Tarea;
  @Output() tareaCreada: EventEmitter<Tarea>;

  constructor() { 
    this.nuevaTarea = new Tarea();
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

}
