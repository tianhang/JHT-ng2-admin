import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  public checkboxModel = [{
    name: 'Check 1',
    checked: false,
    class: 'col-md-4'
  }, {
    name: 'Check 2',
    checked: true,
    class: 'col-md-4'
  }, {
    name: 'Check 3',
    checked: false,
    class: 'col-md-4'
  }];

  isDisabled: boolean = false;

  public checkboxPropertiesMapping = {
    model: 'checked',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    });
    //this.form.setValue({name: 'Tom', basic: {age: 10}, tags: []});
  }

  form: FormGroup;
  
  ngOnInit() {
  }
  

}
