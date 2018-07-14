// User defined class
// to store element and its priority
class QElement<T> {
  public element: T;
  public priority: number;

  constructor( element: T, priority: number ) {
    this.element = element;
    this.priority = priority;
  }
}

// PriorityQueue class
export default class PriorityQueue<T> {
  public items: Array<QElement<T>>;
  // An array is used to implement priority
  constructor() {
    this.items = [];
  }

  // functions to be implemented
  public enqueue( element, priority ) {
    // creating object from queue element
    const qElement = new QElement( element, priority );
    let contain = false;

    // iterating through the entire
    // item array to add element at the
    // correct location of the Queue
    for ( let i = 0; i < this.items.length; i++ ) {
      if ( this.items[i].priority > qElement.priority ) {
        // Once the correct location is found it is
        // enqueued
        this.items.splice( i, 0, qElement );
        contain = true;
        break;
      }
    }

    // if the element have the highest priority
    // it is added at the end of the queue
    if ( !contain ) {
      this.items.push( qElement );
    }
  }
  public dequeue() {
    // return the dequeued element
    // and remove it.
    // if the queue is empty
    // returns Underflow
    return this.items.shift();
  }
  // front function
  public front() {
    // returns the highest priority element
    // in the Priority queue without removing it.
    if ( this.isEmpty() ) return 'No elements in Queue';
    return this.items[0];
  }
  // rear function
  public rear() {
    // returns the lowest priorty
    // element of the queue
    if ( this.isEmpty() ) return 'No elements in Queue';
    return this.items[this.items.length - 1];
  }
  public isEmpty() {
    // return true if the queue is empty.
    return this.items.length === 0;
  }
  // printQueue function
  // prints all the element of the queue
  public printPQueue() {
    let str = '';
    for ( const i of this.items ) {
      str += i.element + ' ';
    }
    return str;
  }
}
