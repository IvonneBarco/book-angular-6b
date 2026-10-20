import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-labs',
  styleUrl: './labs.scss',
  templateUrl: './labs.html',
})
export class Labs {
  name = 'Ivonne Carolina';
  info = true;

  person = {
    name: 'Ivonne Carolina',
    age: 25,
    email: 'ivonne@correo.com',
    profileImg: 'https://placehold.co/80x100',
  };

  inputText = {
    name: 'Edad',
    placeholder: 'Ingrese su edad',
    type: 'text',
    length: 3,
  };

  color = signal('rojo');

  usuarios = signal([
    { id: 1, nombre: 'Ana Gómez', email: 'ana.gomez@example.com', rol: 'admin', activo: true },
    { id: 2, nombre: 'Carlos López', email: 'carlos.lopez@example.com', rol: 'user', activo: true },
    {
      id: 3,
      nombre: 'María Rodríguez',
      email: 'maria.rodriguez@example.com',
      rol: 'user',
      activo: false,
    },
    { id: 4, nombre: 'Juan Pérez', email: 'juan.perez@example.com', rol: 'editor', activo: true },
    {
      id: 5,
      nombre: 'Laura Martínez',
      email: 'laura.martinez@example.com',
      rol: 'user',
      activo: true,
    },
  ]);

  nameCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  colorCtrl = new FormControl();

  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log('.:: FormControl - Color', value);
    })
  }

  saludo() {
    alert('Hola ' + this.name);
    console.log('.:: Ejecutando Event Binding');
  }

  recibirEdad(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('.:: Evento Change', value);
  }

  recibirEdadConInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('.:: Evento Input', value);
    if (value.toLowerCase() === 'a') {
      console.log('.:: Evento Input', value);
      console.error("Error: No se permite la letra 'a'");
    }
  }

  eventoTeclado() {
    alert('Evento de teclado ejecutado');
  }

  recibirColor(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('.:: Evento Change - Color', value);
    this.color.set(value);
  }

  mostrarMasInformacion() {
    this.info = !this.info;
  }

  verFomulario() {
    console.log('.:: Formulario Reactivo', this.nameCtrl);
    console.log('.:: ¿El input es valido?', this.nameCtrl.valid);
  }
}
