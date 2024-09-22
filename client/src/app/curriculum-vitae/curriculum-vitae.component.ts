import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-curriculum-vitae',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.css'
})
export class CurriculumVitaeComponent {

}
