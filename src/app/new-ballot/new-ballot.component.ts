import { Component } from '@angular/core';
import { VotingService } from '../voting/voting.service'
import { Router } from '@angular/router'
import { Ballot } from '../voting/voting.models'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@Component({
    selector: 'app-new-ballot',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    templateUrl: './new-ballot.component.html',
    styleUrl: './new-ballot.component.scss'
})
export class NewBallotComponent {

    ballot: Ballot = {
        timestamp: new Date().toISOString(),
        title: '',
        description: '',
        choices: ['Igen', 'Nem', 'Talán'],
    }

    constructor(
        private router: Router,
        private readonly votingService: VotingService,
    ) {
    }

    async saveBallot() {
        await this.votingService.storeBallot(this.ballot)
        this.router.navigate(['/'])
    }
}
