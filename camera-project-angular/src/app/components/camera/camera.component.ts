import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Camera } from 'src/app/model/camera';
import { CameraServiceService } from 'src/app/services/camera-service.service';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  name:string;
  cameras: Camera[] = [];
  names: string[] = [];
  resolutions: number[] = [];
  lineChart: any;
  hide:boolean = false;
  constructor(private service: CameraServiceService) {}



  ngOnInit() {
    this.getAllCameras();
    this.drawChart();
  }

  drawChart(){
      this.lineChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        
        labels: this.names,
        datasets: [{
          label: 'Resolution',
          data: this.resolutions,
          fill: true,
          hidden: false,
          lineTension: 0.2,
          borderColor: 'red',
          borderWidth: 1
  
        }]
      },
      options:{
        title: {
          text:'Camera Resolution Graph',
          display: true
        },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }  
      }
    });
  } //END OF DRAW CHART


  getAllCameras() {
    this.service.getAllCameras().subscribe(
      response => { 
        this.cameras = response;
        this.getData();
      }
    );
  }//END OF GETALLCAMERAS

  getData(){
    for(var i = 0;i<this.cameras.length;i++){
      this.resolutions.push(this.cameras[i].resolution);
      this.names.push(this.cameras[i].name);
      }
  }//END OF GETDATA

  deleteCamera(camera:Camera){
    this.service.deleteCamera(camera.id).subscribe(
      response=>{
        for(var i=0;i<this.cameras.length;i++){
          if(this.cameras[i].id==camera.id){
            this.cameras.splice(i, 1);
            this.resolutions.splice(i, 1);
            this.names.splice(i, 1);
            this.lineChart.destroy();
            this.drawChart();
          }
        }
      }
    );
  }// END OF DELETECAMERA

  whileSearching(){
      return this.service.search(this.name).subscribe(
        response=>{
          this.cameras=response;
        }
      );
  }// END OF WHILESEARCHING


}
