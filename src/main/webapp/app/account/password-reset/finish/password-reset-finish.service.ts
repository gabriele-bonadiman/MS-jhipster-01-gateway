import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../../app.constants';

@Injectable()
export class PasswordResetFinishService {

    constructor(private http: Http) {}

    save(keyAndPassword: any): Observable<any> {
        return this.http.post(SERVER_API_URL + 'uaa/api/account/reset-password/finish', keyAndPassword);
    }
}
