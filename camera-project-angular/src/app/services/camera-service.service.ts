import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Camera } from '../model/camera';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraServiceService {

  constructor(private http:HttpClient) { }

  getAllCameras() : Observable<Camera[]> {
    return this.http.get<Camera[]>('http://localhost:8080/cameras');
  }

  addCamera(camera:Camera) {
    
    return this.http.post<Camera>('http://localhost:8080/camera', camera);
  }

  deleteCamera(id:string){
    return this.http.delete('http://localhost:8080/camera/'+id);  
  }

  search(name:string){
    if(name==""){
      return this.http.get<Camera[]>('http://localhost:8080/cameras');
    }else{
      return this.http.get<Camera[]>('http://localhost:8080/camera/'+name);
    }
  }
    
}
