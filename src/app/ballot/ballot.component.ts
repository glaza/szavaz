import { Component, Input } from '@angular/core'
import { Ballot } from '../voting/voting.models'

@Component({
  selector: 'app-ballot',
  standalone: true,
  imports: [],
  templateUrl: './ballot.component.html',
  styleUrl: './ballot.component.scss'
})
export class BallotComponent {

    @Input() ballot!: Ballot
}
