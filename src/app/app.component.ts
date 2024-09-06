import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'listaTareasApp';

  listaTareas: string[] = [];
  nuevaTarea:string = '';

  private _tareaService = inject(TareasService);


  ngOnInit(): void {
    this.listaTareas = this._tareaService.getListaTareas();
  }

  agregarTarea(){
    this._tareaService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareaService.getListaTareas();
  }

  eliminarTarea(index: number){
    this._tareaService.eliminarTarea(index);
    this.listaTareas = this._tareaService.getListaTareas();

  }

}
