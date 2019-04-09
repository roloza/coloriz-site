import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItems(key: string) {
    let storageElts = [];
    const elts = localStorage.getItem(key);
    if (elts !== null) {
      storageElts = JSON.parse(elts);
    }
    return storageElts.reverse();
  }

  public storeItem(value: string, key: string, max: number) {
    let storageElts = [];
    const elts = localStorage.getItem(key);
    if (elts !== null) {
      storageElts = JSON.parse(elts);
    }
    const eltPos = storageElts.indexOf(value);
    if (eltPos !== -1 ) {
      storageElts.splice(eltPos, 1);
    }
    storageElts.push(value);
    if (storageElts.length > max ) {
      storageElts.shift();
    }
    localStorage.setItem(key, JSON.stringify(storageElts));
  }
}
