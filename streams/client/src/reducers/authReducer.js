import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INIT_STATE = {
    isSignedIn: null,
    //userID:null
}


export default (state = INIT_STATE, action) => {

   

    switch (action.type) {

        case SIGN_IN:
            return { ...state, isSignedIn: true }
            console.log('signIn')
        case SIGN_OUT:
            return { ...state, isSignedIn: false }
             console.log('signOut')
        default:
            return state;
    }


};

