import { Component, OnInit } from '@angular/core'
import { VotingService } from '../voting/voting.service'
import { Ballot } from '../voting/voting.models'
import { Router } from '@angular/router'
import { getUsername, isLoggedIn } from '../login/login'
import { BallotComponent } from '../ballot/ballot.component'
import { MatIcon } from '@angular/material/icon'

@Component({
    selector: 'app-ballots',
    standalone: true,
    imports: [
        BallotComponent,
        MatIcon,
    ],
    templateUrl: './list-ballots.component.html',
    styleUrl: './list-ballots.component.scss',
})
export class ListBallotsComponent implements OnInit {

    username: string
    ballots!: Ballot[]

    constructor(
        readonly router: Router,
        private readonly votingService: VotingService,
    ) {
        if (!isLoggedIn()) {
            router.navigate(['/login'])
        }

        this.username = getUsername()
    }

    async ngOnInit() {
        this.ballots = await this.votingService.getBallots()
    }
}
