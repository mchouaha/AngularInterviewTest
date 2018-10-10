import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable, throwError} from "rxjs";
import {Alfresco} from "./alfresco-list";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/internal/operators";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlfrescoService {

  private apiUrl = "https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json";

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Alfresco>(this.apiUrl)
      .pipe(
        tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
        )
      );
  }
}
