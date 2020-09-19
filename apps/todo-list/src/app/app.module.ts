import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TabbuttonComponent } from './tabbutton/tabbutton.component';
import { TaskaddComponent } from './taskadd/taskadd.component';
import { TaskitemComponent } from './taskitem/taskitem.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import {itemservice} from './Task.service';


@NgModule({
  declarations: [AppComponent, CheckboxComponent, TabbuttonComponent, TaskaddComponent, TaskitemComponent, TasklistComponent],
  imports: [BrowserModule],
  providers: [itemservice],
  bootstrap: [AppComponent],
})
export class AppModule {}
