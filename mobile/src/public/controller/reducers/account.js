const initialState = {
    loggedIn: false,
    username: '',
    name: '',
    email: '',
    message: '',
    isLoading: false,
    isError: false,
    
}

const account = (state = initialState, action) => {
    switch (action.type) {
        
        case "REGISTER_PENDING":
            return {...state, isLoading: true}
        case "REGISTER_FULFILLED":
            if(action.payload.validation === 'unique')
            return {
                ...state,
                isLoading: false,
                message: 'Email already registered'
            }
            else if (action.payload.validation === 'required')
            return {
                ...state,
                isLoading: false,
                message: 'Field cannot empty'
            }
            else return {
                ...state,
                isLoading: false,
                message: 'success',
                loggedIn: true,
                name: action.payload.data.user.name,
                username: action.payload.data.user.username,
                email: action.payload.data.user.email
            }
        case "REGISTER_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        case "LOGIN_PENDING":
            return {...state, isLoading: true}
        case "LOGIN_FULFILLED":
            if(action.payload.field === 'email')
            return {
                ...state,
                isLoading: false,
                message: 'Email already registered'
            }
            else if (action.payload.field === 'password')
            return {
                ...state,
                isLoading: false,
                message: 'Wrong Password'
            }
            else return {
                ...state,
                isLoading: false,
                message: 'success',
                loggedIn: true,
                name: action.payload.data.user.name,
                username: action.payload.data.user.username,
                email: action.payload.data.user.email
            }
        case "LOGIN_REJECTED":
            return {...state, isLoading: false, isError: true}
        
        case "LOGOUT":
            return {...state, initialState}

        default:
            return state;
    }
}

export default account;