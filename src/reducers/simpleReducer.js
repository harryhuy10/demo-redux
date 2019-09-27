<<<<<<< HEAD
export default (state = {"simpleReducer":"sth"}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'HARD_ACTION':
      return {
        result: action.payload
      }
    default:
      return state
  }
=======
export default (state = {"simpleReducer":"sth"}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'HARD_ACTION':
      return {
        result: action.payload
      }
    default:
      return state
  }
>>>>>>> 380f9c6c77cd8be47e233f1cf96a19f1139a92c6
}