
export interface User {
    name: string
    rank?: string
    votes: number
}

export const users: User[] = [
    {
        name: 'Herédi Marika néni',
        rank: 'cscst',
        votes: 1,
    },
    {
        name: 'Glaser-Hille Ildikó',
        rank: 'cscst',
        votes: 1,
    },
    {
        name: 'Pelikán Anikó bá',
        rank: 'cst',
        votes: 1,
    },
    {
        name: 'Glaser-Hille Heidi bá',
        rank: 'cst',
        votes: 1,
    },
    {
        name: 'Laza Gyuri',
        rank: 'cst',
        votes: 1,
    },
    {
        name: 'Edvi István',
        rank: 'cst',
        votes: 1,
    },
    {
        name: 'Csukly Erzsi',
        rank: 'cst',
        votes: 1,
    },
    {
        name: 'Rüll Kriszti bá',
        rank: 'st',
        votes: 1,
    },
    {
        name: 'Kerkai Béla',
        rank: 'st',
        votes: 1,
    },
    {
        name: 'Pelikán Anikó',
        rank: 'st',
        votes: 1,
    },
    {
        name: 'Edvi Krisztina',
        rank: 'st',
        votes: 1,
    },
    {
        name: 'Rüll Sebi',
        rank: 'st',
        votes: 1,
    },
    {
        name: 'Viski Timi',
        rank: 'st',
        votes: 1,
    },
    {
        name: 'Károly Isti',
        rank: 'st',
        votes: 1,
    },
    {
        name: 'Edvi Diana',
        rank: 'st',
        votes: 1,
    },
    {
        name: 'Borgula Detti',
        votes: 0,
    },
    {
        name: 'Hajzer Sanyi',
        votes: 0,
    },
    {
        name: 'Nemoda Zsófi',
        votes: 0,
    },
    {
        name: 'Nagy Ági',
        votes: 0,
    },
    {
        name: 'Zsiga János',
        votes: 0,
    },
]

export function isOfficer(user: User) {
    return user.rank && /(cs)?c?st/.test(user.rank)
}

export function getOfficerCount() {
    return users.filter(user => isOfficer(user)).length
}
