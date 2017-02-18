import { Component, OnInit, Input } from '@angular/core';

import { TopicApiServiceService } from '../topic-api-service.service';
import { Topic } from '../topic-class';

@Component({
  selector: 'app-topic-list-component',
  templateUrl: './topic-list-component.component.html',
  styleUrls: ['./topic-list-component.component.css'],
  providers: [ TopicApiServiceService ]
})
export class TopicListComponentComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  topic: Topic;
  topicList: Topic[];
  errMsg: string;

  constructor(private client: TopicApiServiceService) { }

  ngOnInit() {
    this.client.getTopics()
    .then(topics => this.topicList = topics)
    .catch(err => this.errMsg = err.message )
  }
}
