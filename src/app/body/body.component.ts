import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  personForm: FormGroup;
  footerMenuItems: string[];
  footerMenuIcons: any[];
  titleMenuItems: string[];

  constructor() { }

  ngOnInit() {
    this.personForm = new FormGroup({
      'username': new FormGroup({
        'title': new FormControl(''),
        'firstname': new FormControl(null),
        'middleinitial': new FormControl(null),
        'lastname': new FormControl(null)
      }),
      'email': new FormControl(null,Validators.email),
      'dob': new FormControl(null),
      'sin': new FormControl(null),
    });

   
    this.titleMenuItems = ['Miss', 'Mrs', 'Mr'];
   
  }

}