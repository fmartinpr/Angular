import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['../../aplication4.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() public items: any[];
  @Output() vistaSeleccionada: EventEmitter<string>;
  @Output() artistaIdSeleccionado: EventEmitter<string>;

  constructor() {
    this.vistaSeleccionada = new EventEmitter();
    this.artistaIdSeleccionado = new EventEmitter();
    this.items = [];
  }

  ngOnInit(): void {
  }

  public mostrarArtista(item: any): void {
    let artistaId: string;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.vistaSeleccionada.emit('artista');
    this.artistaIdSeleccionado.emit(artistaId);
  }

}
