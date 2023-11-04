import { Component ,Input} from '@angular/core';
import { Activity } from 'src/app/classes/activity';

@Component({
  selector: 'app-listenfant',
  templateUrl: './listenfant.component.html',
  styleUrls: ['./listenfant.component.css']
})
export class ListenfantComponent {

  @Input()li:Activity;

}
