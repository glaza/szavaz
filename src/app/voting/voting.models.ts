
export interface Ballot {
    timestamp: string
    title: string
    description: string
    choices: string[]
}

export interface Vote {
    timestamp: string
    name: string
    choice: number
}
