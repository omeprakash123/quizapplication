import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { GetquestionsService } from './services/getquestions.service';
import { QuestionsComponent } from './questions/questions.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [GetquestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
