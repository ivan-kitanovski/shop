import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem(key: string, value: any = null): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      // return null because that's the default for the 'native' localStorage for non-existing keys
      return null;
    }
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
