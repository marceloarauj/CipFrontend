import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }

  files:string [] = [];

  onFileChange(event) {
   
    for (var i = 0; i < event.target.files.length; i++) { 
        this.files.push(event.target.files[i]);
    }
  }

  teste(){
    var formData = new FormData();

    axios.post('http://localhost:5000/File', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
  }


}
