import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatCardModule, MatIconModule} from "@angular/material";
import {HttpClient} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";
import {AlfrescoService} from "./alfresco.service";

class MockAlfrescoService
{
  getData() {
    return mockAlfrescoObj;
  }
}

const mockAlfrescoObj = [
  {
    list:{
      pagination:2,
      count: 7,
      hasMoreItems: false,
      totalItems: 7,
      skipCount: 0,
      maxItems:100
    },
    entries:{}
  }
];

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule],
      declarations: [
        AppComponent
      ],
      providers: [
        HttpClient,
        HttpHandler,
        AlfrescoService,
        { provide: AlfrescoService, useClass: MockAlfrescoService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture).toBeDefined();
  });
  // TODO: getAlfrescoList should return value
});
