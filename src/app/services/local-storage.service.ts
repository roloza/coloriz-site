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

  public deleteItem(id: string, key: string) {
    const elts = this.getItems(key);
    console.log(elts);
    const index = elts.indexOf(id);
    if (index !== -1) {
      elts.splice(index, 1);
    }
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(elts));

    return  this.getItems(key);
  }


}
