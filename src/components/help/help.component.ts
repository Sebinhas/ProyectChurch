import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { heroAcademicCap } from '@ng-icons/heroicons/outline'
import {remixAddCircleLine } from '@ng-icons/remixicon'
import { remixSearchLine } from '@ng-icons/remixicon';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  viewProviders: [provideIcons({heroAcademicCap, remixAddCircleLine, remixSearchLine})]
})
export class HelpComponent {

}
