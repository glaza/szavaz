import { Injectable } from '@angular/core'
import { FirebaseApp, initializeApp } from "firebase/app"
import { getFirestore, Firestore, collection, getDocs, setDoc, doc, QueryDocumentSnapshot, CollectionReference } from 'firebase/firestore'
import { Ballot } from './voting.models'

const firebaseConfig = {
    apiKey: "AIzaSyDowxTuauAVSF_keiMEPOH78bUkEF1giVQ",
    authDomain: "szavaz.firebaseapp.com",
    projectId: "szavaz",
    storageBucket: "szavaz.appspot.com",
    messagingSenderId: "176597772908",
    appId: "1:176597772908:web:71bc6db3ea843103684649",
    measurementId: "G-DZ6WG8EQRH"
}

@Injectable({
    providedIn: 'root'
})
export class VotingService {

    app!: FirebaseApp
    db!: Firestore
    ballotCollection!: CollectionReference
    ballotDocs!: QueryDocumentSnapshot[]

    constructor() {
        this.app = initializeApp(firebaseConfig)
        this.db = getFirestore(this.app)
        this.ballotCollection = collection(this.db, 'ballots')
    }

    async getBallots(): Promise<Ballot[]> {
        console.log(`get ballots`)
        const snapshot = await getDocs(this.ballotCollection)
        this.ballotDocs = snapshot.docs
        const ballots = this.ballotDocs.map(doc => doc.data()) as Ballot[]
        return ballots.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    }

    async storeBallot(ballot: Ballot) {
        await setDoc(doc(this.ballotCollection, `${ballot.timestamp}`), ballot)
    }

    // async getResults(ballot: Ballot): Promise<Ballot[]> {
    //
    // }

    async castVote(ballot: Ballot) {
        const ballotDoc = this.ballotDocs.find(b => (b.data() as Ballot).timestamp === ballot.timestamp)

        await setDoc(doc(this.ballotCollection, `ballots`), ballot)
    }
}

