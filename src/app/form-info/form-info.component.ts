import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent  implements OnInit{
  title =  "REGISTRATION FORM";
  image = "https://pngset.com/images/new-student-registration-text-word-logo-symbol-transparent-png-1280596.png";
  msg = "Form submitted successfully!"
  userName = " ";


  constructor() { }

  formSubmit(){
    console.log(this.msg);
    alert(this.msg);
  }

  ngOnInit(): void {
  }

}
