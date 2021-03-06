import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { TextFieldDisplay } from './text-field-display';
import { TextFieldValidation } from './text-field-validation';
import { TextFieldData } from './text-field-data';
import { FormApi } from '../../abstract/form-api';
import { ComponentTypes } from '../../../constants/component-types';
import { ErrorStateMatcher } from '@angular/material/core'
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/**
 * Text field form component
 */
@Component({
  selector: 'forge-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends FormComponent implements OnInit {

  public matcher = new MyErrorStateMatcher();
  /**
   * The ID of the component
   */
  public id: string;

  /**
   * Component type
   */
  public type: string = ComponentTypes.TextField;

  /**
   * Display attributes
   */
  public display: TextFieldDisplay = new TextFieldDisplay();

  /**
   * Data attributes
   */
  public data: TextFieldData = new TextFieldData();

  /**
   * Validation attributes
   */
  public validation: TextFieldValidation = new TextFieldValidation();

  /**
   * api attributes
   */
  public api: FormApi = new FormApi();

  /**
   * Value model
   */
  public value: string;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.value = this.data.defaultValue;

    if (!this.display.label) {
      this.display.label = 'Text Field';
    }
  }

  /**
   * Gets the value of the component
   */
  public getValue(): string {
    return this.value;
  }
}
