import {TestBed, inject} from '@angular/core/testing';
import {AlfrescoService} from './alfresco.service';
import {HttpClient} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";
import {Alfresco} from "./alfresco-list";

describe('AlfrescoService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        AlfrescoService
      ]
    });
  });

  it('should be created', inject([AlfrescoService], (service: AlfrescoService) => {
    expect(service.getData()).toBeTruthy();
  }));
});
