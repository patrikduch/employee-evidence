import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WorkingPositionService {
  constructor(private httpClient: HttpClient) {}
  getWorkingPosition() {
    return this.httpClient.get(`http://fakerestapi-4274.rostiapp.cz/positions`).pipe(
      map((data: any) => {
        return data;
      }),
      catchError(error => {
        return throwError("Something went wrong!");
      })
    );
  }
}
