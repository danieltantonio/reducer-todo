export const initToDos = {
  list: [
      {
          item: 'Learn about reducers',
          completed: false,
          id: 3892987589
      }
  ]
};

const formReducer = (state, action) => {
  switch(action.type) {
      case 'ADD_TODO':
          return { list: [action.value]};
      default:
          return state;
  }
};

export default formReducer;