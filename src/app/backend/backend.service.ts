import { Injectable } from '@angular/core'
import { FirebaseApp, initializeApp } from "firebase/app"

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
export class BackendService {

    app!: FirebaseApp

    constructor() { }

    ngOnInit() {
        this.app = initializeApp(firebaseConfig)
    }
}
