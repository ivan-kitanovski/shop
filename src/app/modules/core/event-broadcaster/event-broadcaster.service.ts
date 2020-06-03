import { Injectable } from '@angular/core';
import { Subject, NEVER } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface BroadcastEvent {
  key: any;
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class EventBroadcasterService {
  private eventBus: Subject<BroadcastEvent>;

  constructor() {
    this.eventBus = new Subject<BroadcastEvent>();
  }

  broadcast(key: string, data?) {
    this.eventBus.next({ key, data });
  }

  on(key: string) {
    if (!key.length) {
      return NEVER;
    }
    return this.eventBus.pipe(
      filter((event) => event.key === key),
      map((event) =>  event.data)
    );
  }
}
