import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { FormComponent } from '../../abstract/form-component';
import { getRegistryType } from '../../registry';
import { FormsService } from '../../../../../lib/core/services/forms.service';

@Component({
  selector: 'forge-builder-component',
  templateUrl: './forge-component.component.html',
  styleUrls: ['./forge-component.component.css']
})
export class ForgeComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  @Input() public component: FormComponent;

  @Input() public createModal = true;

  public hovered = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private formsService: FormsService
  ) { }

  public ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(getRegistryType(this.component.type));

    const newComponent = this.vc.createComponent(factory);
    newComponent.instance.id = this.component.id;
    newComponent.instance.api = this.component.api;
    newComponent.instance.data = this.component.data;
    newComponent.instance.display = this.component.display;
    newComponent.instance.validation = this.component.validation;
    this.component = newComponent.instance;

    for (let i = 0; i < this.formsService.form.components.length; i++) {
      if (this.formsService.form.components[i].id === newComponent.instance.id) {
        this.component = newComponent.instance;
        this.formsService.form.components[i] = this.component;
      }
    }  
  }
}

