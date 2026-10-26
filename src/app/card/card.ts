import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.scss',
  templateUrl: './card.html',
})
export class Card {
  @Input({ required: true }) nombre: string = '';
  @Input({ required: true }) email: string = '';
  @Input() rol: string = '';
  @Input() estado: boolean = false;
  @Input({ required: true }) grupo: string = '';

  @Output() agregarUsuario = new EventEmitter();

  agregar() {
    this.agregarUsuario.emit('mensaje desde el componente hijo');
  }
}
