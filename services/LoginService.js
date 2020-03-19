import firebase from 'firebase'


class LoginService {


    async signUp(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(record => {
                return record.user;
            }).catch(err => {
                console.log(err)
                throw new Error(err.message);
            })
    }

    async signIn(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(record => {
                return record.user;
            }).catch(err => {
                console.log(err)
                throw new Error(err.message);
            })
    }

    async recovery(email) {
        return firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                return { 'sent': true };
            }).catch(err => {
                console.log(err)
                throw new Error(err.message);
            })
    }

}

export default LoginService;