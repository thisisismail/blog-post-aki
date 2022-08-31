let initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
