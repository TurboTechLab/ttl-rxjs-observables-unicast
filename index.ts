
import { Observable } from 'rxjs';

const randomValue = () => Math.round(Math.random() * 10);

const unicastByDefault = new Observable((observer) => {
  observer.next(randomValue());
  observer.complete();
});

//Each subscription is likely to get different output
unicastByDefault.subscribe(v => console.log(v))
unicastByDefault.subscribe(v => console.log(v))
unicastByDefault.subscribe(v => console.log(v))

