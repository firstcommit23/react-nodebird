export const initialState = {
    isLoggedIn: false,
    isLoading: false,
    me: null,
    signUpData: {},
    loginData: {},
    isError: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SING_UP_REQUEST = 'SING_UP_REQUEST';
export const SING_UP_SUCCESS = 'SING_UP_SUCCESS';
export const SING_UP_FAILURE = 'SING_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

const dummyUser = (data) => ({
    ...data,
    nickname: '지민',
    id: 1,
    Posts: [],
    Followings: [],
    Followers: [],
    Comments: [],
});

// async action creator (redux-saga)
// action creator
export const loginAction = (data) => {
    return { type: LOG_IN_REQUEST, data };
};
export const logoutAction = () => {
    return { type: LOG_OUT_REQUEST };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                me: dummyUser(action.data),
                isError: action.error,
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                me: null,
            };
        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                me: null,
            };
        case LOG_OUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.error,
            };

        case SING_UP_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case SING_UP_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                me: null,
            };
        case SING_UP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.error,
            };
        default:
            return state;
    }
};

export default reducer;
