import { Component } from '@angular/core';
import { VotingService } from '../voting/voting.service'
import { Ballot } from '../voting/voting.models'

@Component({
  selector: 'app-ballots',
  standalone: true,
  imports: [],
  templateUrl: './ballots.component.html',
  styleUrl: './ballots.component.scss'
})
export class BallotsComponent {

    ballots!: Ballot[]

    constructor(
        private readonly votingService: VotingService,
    ) { }

    async ngOnInit() {
        // await this.votingService.storeBallot({
        //     timestamp: new Date().toISOString(),
        //     title: 'Best fruit',
        //     description: 'Which is the best fruit?',
        //     choices: ['Apple', 'Banana', 'Orange']
        // })
        this.ballots = await this.votingService.getBallots()
    }
}
