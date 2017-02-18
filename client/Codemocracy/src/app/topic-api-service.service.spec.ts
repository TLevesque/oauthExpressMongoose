/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TopicApiServiceService } from './topic-api-service.service';

describe('TopicApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicApiServiceService]
    });
  });

  it('should ...', inject([TopicApiServiceService], (service: TopicApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
