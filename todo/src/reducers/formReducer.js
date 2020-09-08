export const initToDos = {
  list: [
      {
          item: 'Learn about reducers',
          completed: false,
          id: 3892987589
      }
  ],
  completed: []
};

const formReducer = (state, action) => {
  switch(action.type) {
      case 'ADD_TODO':
          return { ...state, list: [action.value, ...state.list]};
      case 'TOGGLE_TODO':
          state.list.map(item => {
              if(item.id === action.id) {
                  item.completed = !item.completed;
                  return item;
              }
          })
          return { ...state }
      default:
          return state;
  }
};

export default formReducer;