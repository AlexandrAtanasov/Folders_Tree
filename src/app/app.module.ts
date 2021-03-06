import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeManagerService } from './services/tree-manager/tree-manager.service';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TreeManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
