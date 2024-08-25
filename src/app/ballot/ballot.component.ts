import { Component, Input, OnInit } from '@angular/core'
import { Ballot, Vote } from '../voting/voting.models'
import { VotingService } from '../voting/voting.service'
import { getUsername } from '../login/login'

@Component({
  selector: 'app-ballot',
  standalone: true,
  imports: [],
  templateUrl: './ballot.component.html',
  styleUrl: './ballot.component.scss'
})
export class BallotComponent implements OnInit {

    @Input() ballot!: Ballot
    htmlDescription!: string

    votes!: Vote[]

    constructor(
        private readonly votingService: VotingService,
    ) {
    }

    async ngOnInit() {
        await this.refreshVotes()

        this.htmlDescription = this.ballot.description
        this.htmlDescription
            .split("\s|\n")
            .filter(word => word.startsWith("https://"))
            .forEach(url =>
                this.htmlDescription = this.htmlDescription.replace(url, `<a target="_blank" href="${url}">${url}</a>`)
            )
    }

    async refreshVotes() {
        this.votes = await this.votingService.getVotes(this.ballot)
    }

    countVotes(choice: number) {
        return this.votes.filter(vote => vote.choice === choice).length
    }

    async vote(choice: number) {
        await this.votingService.vote(this.ballot, {
            timestamp: new Date().toISOString(),
            name: getUsername(),
            choice,
        })
        await this.refreshVotes()
    }
}
