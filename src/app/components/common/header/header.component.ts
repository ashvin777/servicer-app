import { 
  Component, 
  ElementRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "common-header",
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  title: string = "Servicer";
  @ViewChild('para') para: ElementRef; 
  
  constructor(){}

}
