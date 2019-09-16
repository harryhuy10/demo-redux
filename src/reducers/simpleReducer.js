export default (state = {"simpleReducer":"sth"}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    default:
      return state
  }
}