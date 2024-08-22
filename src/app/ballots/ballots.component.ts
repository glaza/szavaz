import { Component, OnInit } from '@angular/core'
import { VotingService } from '../voting/voting.service'
import { Ballot } from '../voting/voting.models'
import { Router } from '@angular/router'
import { isLoggedIn } from '../login/login'
import { BallotComponent } from '../ballot/ballot.component'

@Component({
    selector: 'app-ballots',
    standalone: true,
    imports: [
        BallotComponent,
    ],
    templateUrl: './ballots.component.html',
    styleUrl: './ballots.component.scss',
})
export class BallotsComponent implements OnInit {

    ballots!: Ballot[]

    constructor(
        private router: Router,
        private readonly votingService: VotingService,
    ) {
        if (!isLoggedIn()) {
            router.navigate(['/login'])
        }
    }

    async ngOnInit() {
        this.ballots = await this.votingService.getBallots()
    }

    createBallot() {
        this.router.navigate(['/new'])
    }
}
