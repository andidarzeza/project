import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from 'src/app/model/camera';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { CameraServiceService } from 'src/app/services/camera-service.service';
@Component({
  selector: 'app-camera-form',
  templateUrl: './camera-form.component.html',
  styleUrls: ['./camera-form.component.css']
})
export class CameraFormComponent implements OnInit {

  camera:Camera;
  name:string;
  model:string;
  ip:string;
  resolution: number;

  cameraAdded:boolean=false;
  cameraError:boolean=false;

  

  constructor(private service:CameraServiceService) { }
  ngOnInit() {}

  addCamera(form: NgForm){
    this.camera = new Camera(null, this.name, this.model, this.resolution, this.ip);
    this.service.addCamera(this.camera).subscribe(
      response =>{
        this.camera = response;
        this.cameraAdded=true;
      },
      error =>{
        this.cameraError=true;
      }
    ); 
    form.resetForm(); 
  }


}
