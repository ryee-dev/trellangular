import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoardComponent } from './board/board.component';
import { BoardDetailsComponent } from './board-details/board-details.component';
import { ColumnComponent } from './column/column.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    BoardComponent,
    BoardDetailsComponent,
    ColumnComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
