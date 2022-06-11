
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class NetworkService {
    constructor(private http: HttpClient) {}

   
    get(url:string): Promise<any> {
        const endPoint = `https://api.github.com/${url}`;
        return this.http
            .get<any>(endPoint, {})
            .pipe(catchError(this.errorHandlerMessage)).toPromise();
    }

   

    errorHandler(response: HttpErrorResponse): Promise<any> {
        return observableThrowError(response.error || 'Internal Server Error').toPromise();
    }

    errorHandlerMessage(error: HttpErrorResponse): Promise<any> {
        return observableThrowError(error).toPromise();
    }
}
