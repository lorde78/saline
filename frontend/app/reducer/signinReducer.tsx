export default function SigninReducer(state = false,action) {
    switch (action.type) {
        case 'LOGIN':
            return action.jwt;
        case 'LOGOUT':
            return false;
        case 'REGISTER' :
            return action.data;
        default:
            return state;
    }
}