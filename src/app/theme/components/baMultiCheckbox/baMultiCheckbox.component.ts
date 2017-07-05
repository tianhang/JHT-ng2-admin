import {Component, Input, Self,forwardRef } from '@angular/core';
import {ControlValueAccessor, NgModel,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ba-multi-checkbox',
  templateUrl: './baMultiCheckbox.html',
  styleUrls: ['./baMultiCheckbox.scss'],
  //providers: [NgModel]
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaMultiCheckbox),
      multi: true,
    }]
})
export class BaMultiCheckbox implements ControlValueAccessor {
  @Input() baMultiCheckboxClass:string;
  @Input() propertiesMapping:any;
  @Input() checkboxModel: any;

  //public model: NgModel;
  public state: boolean;

  // public constructor(@Self() state:NgModel) {
  //   this.model = state;
  //   state.valueAccessor = this;
  // }
  public constructor(){

  }

  public getProp(item: any, propName: string): string {
    const prop = this.propertiesMapping[propName];
    if (!prop) {
      return item[propName];
    } else if (typeof prop === 'function') {
      return prop(item);
    }
    return item[prop];
  }
  public onChange(value: any): void {}
  public onTouch(value: any): void {}
  public writeValue(state: any): void {
    this.state = state;
  }

  public registerOnChange(fn: any): void {
    this.onChange = function(state: boolean) {
      this.writeValue(state);
      //this.model.viewToModelUpdate(state);
    };
  }
  public registerOnTouched(fn: any): void { this.onTouch = fn; }
}
