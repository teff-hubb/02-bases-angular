import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje: any;
  @Output() clickPost = new EventEmitter<number>();
  // number: le dice a typescript que es lo que emite EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    // Lo que pongas dentro de los () es que lo que va ha recibir el padre en su evento
    this.clickPost.emit(this.mensaje.id);
  }
}
