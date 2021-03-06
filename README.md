# Softheon Forge

## Angular Form Rendering

This Angular library allows forms to be dynamically built for forms created in Softheon Forge. By providing a simple configuration to a ```<forge>``` Angular component, this library will dynamically render a form within the front end application.

### Using within your application

You can easily render a form within your Angular 7 application by referencing your form through a configuration as shown below.

```html
<forge [formRendererConfig]="formRendererConfig">
```

### Usage

First you will need to install it as a dependency within your project.

`npm install --save @softheon/angular-forge`

You can now include the module in your Angular application as follow.

```js
import { FormRendererLibModule } from '@softheon/angular-forge'
@NgModule({
    imports: [ BrowserModule, CommonModule, FormRendererLibModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Angular Form Builder

The Form builder part of this library allows you to create custom forms for your entities by providing a simple configuration to a '<forge-form-builder>' Angular component, this will show the form builder within your application.

```html
<forge-form-builder [formBuilderConfig]="formBuilderConfig">
```

### Usage

First you will need to install it as a dependency within your project.

npm install --save @softheon/angular-forge

You can now include the module in your Angular application as follow.

```js
import { FormBuilderModule } from '@softheon/angular-forge'
@NgModule({
    imports: [ BrowserModule, CommonModule, FormBuilderModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## API for `forge`

### Properties

- `formRendererConfig` - (`FormRendererConfig`) - configuration object. See using in [ts demo](https://github.com/Softheon/angular-forge/blob/master/projects/forge-lib-tester/src/app/form/form.component.ts) and [html demo](https://github.com/Softheon/angular-forge/blob/master/projects/forge-lib-tester/src/app/form/form.component.html)

Parameters supported by this object:

1. `forgeApiUrl` - URL of Softheon Forge API.
2. `oauthToken` - Auth token that will be applied as 'Authorization' header during file send.
3. `accountName` - Name of the account.
4. `formName` - Name of the form.
5. `displayFormName` - Whether the form name should be displayed and edited.

- `formBuilderConfig` - (`FormBuilderConfig`) - configuration object. See using in [ts demo](https://github.com/Softheon/angular-forge/blob/master/projects/forge-lib-tester/src/app/builder/builder.component.ts) and [html demo](https://github.com/Softheon/angular-forge/blob/master/projects/forge-lib-tester/src/app/builder/builder.component.html)

Parameters supported by this object:

1. `forgeApiUrl` - URL of Softheon Forge API.
2. `oauthToken` - Auth token that will be applied as 'Authorization' header during file send.
3. `accountName` - Name of the account.

### Events

- `finishedRendering` - fires after the form finishes rendering. See using in [ts demo](https://github.com/Softheon/angular-forge/blob/master/projects/forge-lib-tester/src/app/form/form.component.ts) and [html demo](https://github.com/Softheon/angular-forge/blob/masterprojects/forge-lib-tester/src/app/form/form.component.html).

- `formSubmitted` - fires after the form is submitted. See using in [ts demo](https://github.com/Softheon/angular-forge/blob/master/projects/forge-lib-tester/src/app/form/form.component.ts) and [html demo](https://github.com/Softheon/angular-forge/blob/masterprojects/forge-lib-tester/src/app/form/form.component.html).

## Troubleshooting

Please follow these guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues]([https://github.com/valor-software/ng2-file-upload/issues](https://github.com/Softheon/angular-forge/issues)) board to report bugs and feature requests.
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.