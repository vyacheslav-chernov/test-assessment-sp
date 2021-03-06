import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoundInputFormComponent } from './components/round-input-form/round-input-form.component';
import { FrameListComponent } from './components/frame-list/frame-list.component';
import { MatchResultComponent } from './components/match-result/match-result.component';
import { MatchService } from './services/match-service';

@NgModule({
  declarations: [
    AppComponent,
    RoundInputFormComponent,
    FrameListComponent,
    MatchResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MatchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
