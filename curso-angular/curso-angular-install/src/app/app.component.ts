import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} y tienes {{edad}} años </h1>`,
})
export class AppComponent  { name = 'javi' , edad=24; }

