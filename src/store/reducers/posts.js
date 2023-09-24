import {ADD_POST} from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Castello',
      email: 'g@c.com',
      image: require('../../../assets/imgs/fence,jpg'),
      comments: [
        {
          nickname: 'FulanoA',
          comment: 'legal',
        },
        {
          nickname: 'FulanoB',
          comment: 'legal B',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'Castello',
      email: 'g@c.com',
      image: require('../../../assets/imgs/fence,jpg'),
      comments: [],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload,
        }),
      };
    default:
      return state;
  }
};

export default reducer;
