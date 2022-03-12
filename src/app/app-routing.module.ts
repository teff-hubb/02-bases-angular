import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'contact',
    component: ContactComponent
  },
  {
  //  Ejemplo de carga perezoza o lazy load antigua y nueva
    path: 'posts',
    // loadChildren: './pages/posts/posts.module#PostsModule'
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]



@NgModule({
  
  imports: [
    // CommonModule: es el utizado para especificar a Angular como utilizar la directiva NgFor, NgIf entre otras cosas
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
