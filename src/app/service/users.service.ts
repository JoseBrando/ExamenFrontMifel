import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http_client: HttpClient) { }

  getUsers() {
    return this.http_client.get(this.url);
  }

  public async saveUser(data: any): Promise<any> {
    return this.http_client.post("http://httpbin.org/post", JSON.stringify(data)).toPromise();
  }
}
