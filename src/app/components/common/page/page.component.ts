import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "page",
  templateUrl: "./page.component.html",
  styleUrls: ['./page.component.scss']
})

export class PageComponent {
  @Input() dataPage: string;
}
