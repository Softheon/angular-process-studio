import { Component, OnInit } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { TextFieldDisplay } from './text-field-display';
import { TextFieldValidation } from './text-field-validation';
import { TextFieldData } from './text-field-data';

/**
 * Text field form component
 */
@Component({
  selector: 'forge-builder-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends FormComponent implements OnInit {
  /**
   * The ID of the component
   */
  public id: string;

  /**
   * Component type
   */
  public type: string = 'Text Field';

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
   * Value model
   */
  public value: string;

  /**
   * Initializes the component
   */
  public ngOnInit(): void {
    this.value = this.data.defaultValue;
  }

  /**
   * Gets the value of the component
   */
  public getValue(): string {
    return this.value;
  }
}