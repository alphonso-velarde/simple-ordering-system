import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private server = environment.basePath;
  constructor(private http: HttpClient) {}

  getInventory(): Observable<any> {
    return this.http.get<any>(`${this.server}/inventory.json`).pipe(
      map((res: any) => <any>res),
      catchError(this.handleError)
    );
  }

  private handleError(error: any, caught: any): any {
    throw error;
  }
}
