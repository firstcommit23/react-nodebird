export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: '지민',
            },
            content: '첫번째 게시글 ㅎㅎ',
            Images: [
                {
                    src: 'https://avatars.githubusercontent.com/u/3303885?s=48&v=4',
                },
                {
                    src: 'https://avatars.githubusercontent.com/u/3303885?s=48&v=4',
                },
                {
                    src: 'https://avatars.githubusercontent.com/u/3303885?s=48&v=4',
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: 'nero',
                    },
                    content: '잼써영',
                },
            ],
        },
    ],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: '더미더미',
    User: {
        id: 1,
        nickname: '지민',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;
