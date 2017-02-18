import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopicItemComponentComponent } from './topic-item-component/topic-item-component.component';
import { TopicListComponentComponent } from './topic-list-component/topic-list-component.component';
import { CreateTopicComponentComponent } from './create-topic-component/create-topic-component.component';

import { TopicApiServiceService } from './topic-api-service.service';
import { Topic } from './topic-class';

@NgModule({
  declarations: [
    AppComponent,
    TopicItemComponentComponent,
    TopicListComponentComponent,
    CreateTopicComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TopicApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
