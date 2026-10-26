import { Component, signal } from '@angular/core';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  imports: [Card, CommonModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  public usuarios = {
    id: 1,
    nombre: 'Ana Gómez',
    email: 'ana.gomez@example.com',
    rol: 'admin',
    activo: true,
    grupo: 'Grupo 1',
  };

  public lista = [
    {
      id: 1,
      nombre: 'Ana Gómez',
      email: 'ana.gomez@correo.com',
      rol: 'Administrador',
      activo: true,
      grupo: 'Grupo 1',
    },
    {
      id: 2,
      nombre: 'Juan Pérez',
      email: 'juan.perez@correo.com',
      rol: 'Usuario',
      activo: false,
      grupo: 'Grupo 2',
    },
    {
      id: 3,
      nombre: 'María López',
      email: 'maría.lopez@correo.com',
      rol: 'Usuario',
      activo: true,
      grupo: 'Grupo 1',
    },
  ];

  desdeElPadre(event: string) {
    console.log('Mensaje desde el componente padre');
    console.log(event);
  }
}
