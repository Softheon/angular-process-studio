import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TextFieldFormComponent } from './text-field.component';

describe('TextFieldFormComponent', () => {
  let component: TextFieldFormComponent;
  let fixture: ComponentFixture<TextFieldFormComponent>;


  const id = '0';
  const label = 'User Name';
  const tooltip = 'Enter your user name here';
  const prefix = '$';
  const suffix = 'ish';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextFieldFormComponent
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldFormComponent);
    component = fixture.componentInstance;
    component.id = id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getValue should get value', () => {
    component.value = 'Test Value';
    expect(component.getValue()).toEqual('Test Value');
  });

  it('should display label', () => {
    component.display.label = label;
    fixture.detectChanges();
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector(`#label_${id}`);
    expect(labelElement.innerText).toEqual(label);
  });

  it('should hide label', () => {
    component.display.label = label;
    component.display.hideLabel = true;
    fixture.detectChanges();
    const labelElement: HTMLLabelElement = fixture.nativeElement.querySelector(`#label_${id}`);
    expect(labelElement).not.toBeTruthy();
  });

  it('should display tooltip', () => {
    component.display.tooltip = tooltip;
    fixture.detectChanges();
    const tooltipElement: HTMLDivElement = fixture.nativeElement.querySelector(`#tooltip_${id}`);
    expect(tooltipElement).toBeTruthy();
  });

  it('should disable component', () => {
    component.display.disabled = true;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(inputElement.attributes['ng-reflect-is-disabled'].value).toEqual('true');
  });

  it('should enable component', () => {
    component.display.disabled = false;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(inputElement.attributes['ng-reflect-is-disabled'].value).toEqual('false');
  });

  it('should display prefix', () => {
    component.display.prefix = prefix;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector(`#prefix_${id}`);
    expect(button.innerHTML).toEqual(prefix);
  });

  it('should display suffix', () => {
    component.display.suffix = suffix;
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(`#suffix_${id}`);
    expect(button.innerHTML).toEqual(suffix);
  });

  it('should validate required', () => {
    component.validation.required = true;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(inputElement.attributes['required']).toBeTruthy();
  });

  it('should show required error message', () => {
    component.validation.required = true;
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    inputElement.value = 'Test';
    fixture.detectChanges();
    inputElement.value = '';
    fixture.detectChanges();

  });

  it('should validate optional', () => {
    component.validation.required = false;
    fixture.detectChanges();
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector(`#input_${id}`);
    expect(inputElement.attributes['required']).not.toBeTruthy();
  });
});
