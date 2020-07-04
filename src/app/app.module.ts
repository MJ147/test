import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './component/board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardService } from './service/board.service';
import { StartComponent } from './component/start/start.component';
import { SquareComponent } from './component/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StartComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
