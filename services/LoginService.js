import firebase from 'firebase'


class LoginService {


    async create(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(record => {
                return record.user;
            }).catch(err => {
                console.log(err)
                throw new Error(err.message);
            })
    }

    teste() {
        firebase.auth().signInWithEmailAndPassword('iancesarvidinharego@gmail.com', '33619987')
            .then(user => {
                console.log('logou', user)
            }).catch(err => {
                console.log('err', err);
            })
    }

}

export default LoginService;