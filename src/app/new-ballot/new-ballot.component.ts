import { Component } from '@angular/core';
import { VotingService } from '../voting/voting.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-ballot',
  standalone: true,
  imports: [],
  templateUrl: './new-ballot.component.html',
  styleUrl: './new-ballot.component.scss'
})
export class NewBallotComponent {

    constructor(
        private router: Router,
        private readonly votingService: VotingService,
    ) {
    }

    async saveBallot() {
        await this.votingService.storeBallot({
            timestamp: new Date().toISOString(),
            title: 'New title',
            description: 'New Desc',
            choices: ['Yes', 'No'],
        })
        this.router.navigate(['/'])
    }
}
