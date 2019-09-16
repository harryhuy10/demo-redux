
export default (state = {'changeReducer':''}, action) => {
    switch (action.type) {
      case 'CHANGE_INPUT':
        return {
          result: action.payload
        }
      default:
        return state
    }
  }