import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { EventBroadcasterService } from '../../core/event-broadcaster/event-broadcaster.service';
import { eventConstants } from '../../../constants/event.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  faBars = faBars;

  constructor(private eventBroadcaster: EventBroadcasterService) { }

  toggleSidebar() {
    this.eventBroadcaster.broadcast(eventConstants.OPEN_SIDEBAR);
  }
}
