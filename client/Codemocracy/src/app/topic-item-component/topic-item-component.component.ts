import { Component, OnInit, Input } from '@angular/core';

import { Topic } from '../topic-class';

@Component({
  selector: 'app-topic-item-component',
  templateUrl: './topic-item-component.component.html',
  styleUrls: ['./topic-item-component.component.css']
})
export class TopicItemComponentComponent implements OnInit {
  @Input()
    topic: Topic;

    constructor() { }

    ngOnInit() {
    }

}
