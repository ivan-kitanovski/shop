import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() isActive = false;
  @Input() title: string = null;
  @Input() text: string = null;
  @Output() cancel = new EventEmitter<null>();
  @Output() confirm = new EventEmitter<null>();

  onCancel() {
    this.cancel.emit(null);
    this.isActive = false;
  }

  onConfirm() {
    this.confirm.emit(null);
    this.isActive = false;
  }
}
