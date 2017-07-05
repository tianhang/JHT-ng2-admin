import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  public checkboxModel = [{
    name: 'air conditioner',
    checked: false,
    class: 'col-md-2'
  }, {
    name: 'washing machine',
    checked: true,
    class: 'col-md-2'
  }, {
    name: 'bridge',
    checked: false,
    class: 'col-md-2'
  }, {
    name: 'bridge',
    checked: false,
    class: 'col-md-2'
  }, {
    name: 'bridge',
    checked: false,
    class: 'col-md-2'
  }, {
    name: 'bridge',
    checked: false,
    class: 'col-md-2'
  }, {
    name: 'bridge',
    checked: false,
    class: 'col-md-2'
  }];

  isDisabled: boolean = false;

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

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
      checkboxModel: [this.checkboxModel]
    });
    //this.form.setValue({name: 'Tom', basic: {age: 10}, tags: []});
  }

  form: FormGroup;
  
  ngOnInit() {
  }
  

}
