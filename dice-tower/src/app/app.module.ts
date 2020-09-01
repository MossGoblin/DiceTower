import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceManagerComponent } from './dice-manager/dice-manager.component';
import { PodManagerComponent } from './dice-manager/pod-manager/pod-manager.component';
import { PoolManagerComponent } from './dice-manager/pool-manager/pool-manager.component';
import { DiceLibraryComponent } from './dice-manager/dice-library/dice-library.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DiceManagerComponent,
    PodManagerComponent,
    PoolManagerComponent,
    DiceLibraryComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
