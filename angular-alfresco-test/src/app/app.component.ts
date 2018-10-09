import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {AlfrescoService} from "./alfresco.service";
import {Alfresco} from "./alfresco-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlfrescoService]
})
export class AppComponent implements OnInit {
  alfresco: Alfresco;

  constructor(private alfrescoService: AlfrescoService)
  {
    this.alfresco = null;
  }

  ngOnInit() {
    this.getAlfrescoList();
  }

  getAlfrescoList() {
    this.alfrescoService.getData()
      .subscribe((data: Alfresco) => this.alfresco = data);
  }
}
