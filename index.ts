import { BehaviorSubject } from 'rxjs';
// burada subscribe daki degeri ilk deger olarak alir

// ornek 1
// const sub = new BehaviorSubject(0);
// sub.next(1);
// sub.subscribe((x) => {
//   console.log('Subscriber A', x);
// });
// sub.next(2);
// sub.subscribe((x) => {
//   console.log('Subscriber B', x);
// });
// sub.next(3);

// ornek 2
const subject = new BehaviorSubject(123);

subject.subscribe(console.log);
subject.subscribe(console.log);
subject.next(456);
subject.subscribe(console.log);
subject.next(789);
