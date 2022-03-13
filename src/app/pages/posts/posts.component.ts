import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor( private dataService: DataService) { }

  // Recibimos unos observables del dataService (getPost) y para poder consumirlos hay que suscribir
  ngOnInit()  {
    this.mensajes = this.dataService.getPosts();
  // .subscribe( (posts: any) => {
  // console.log(posts);
  // this.mensajes = posts;
  //   });
  }
  escuchaClick( id: number ) {
    console.log('Click en:' , id);
  }
}
