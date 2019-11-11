import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CameraComponent } from './components/camera/camera.component';
import { HttpClientModule } from '@angular/common/http';
import { CameraFormComponent } from './components/camera-form/camera-form.component';
import {Router, Routes, RouterModule} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes :Routes = [
{
  path:'home',
  component:CameraComponent
},{
  path:'addCamera',
  component:CameraFormComponent
},
{
  path:'',
  component:CameraComponent,
  pathMatch:'full'
}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CameraComponent,
    CameraFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
