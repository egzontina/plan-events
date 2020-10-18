import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) {
  }

  public getCategories() {
    return this.httpClient
      .get(environment.apiUrl + 'event/categories/ecabae94cade4077b96b900037571605venues?searchPhrase=');
  }

}
