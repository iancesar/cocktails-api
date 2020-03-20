import firebase from 'firebase'

class LoginService {


    signUp(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signIn(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    recovery(email) {
        return firebase.auth().sendPasswordResetEmail(email);
    }

}

export default LoginService;