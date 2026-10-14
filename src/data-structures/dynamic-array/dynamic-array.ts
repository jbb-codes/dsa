interface HashTable {
  [key: number]: any;
}

export class DynamicArray {
  length: number;
  data: HashTable;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number): any {
    if (index < 0 || index >= this.length) return undefined;

    return this.data[index];
  }

  push(item: any): number {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop(): any {
    if (this.length === 0) return undefined;

    const poppedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return poppedItem;
  }

  insert(index: number, item: any): HashTable {
    if (index < 0 || index > this.length) {
      throw new RangeError(`Index ${index} is out of bounds`);
    }

    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;

    return this.data;
  }

  remove(index: number): any {
    if (index < 0 || index >= this.length) {
      throw new RangeError(`Index ${index} is out of bounds`);
    }

    const itemToBeRemoved = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;

    return itemToBeRemoved;
  }
}
