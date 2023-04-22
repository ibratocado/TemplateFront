import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public progress = false;

  public formData: FormGroup = new FormGroup({
    text: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    select: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    mask: new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public validFormDataControl(control: string){
    return this.formData.controls[control].valid;
  }

}
