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
          return { list: [action.value, ...state.list]};
      case 'TOGGLE_TODO':
          return Object.assign({}, state, {
              list: state.list.map((todo, index) => {
                  if(index === action.index) {
                      return Object.assign({}, todo, {
                          completed: !todo.completed
                      })
                  }
              })
          });
      default:
          return state;
  }
};

export default formReducer;