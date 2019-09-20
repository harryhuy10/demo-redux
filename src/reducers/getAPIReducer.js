
export default (state = {}, action) => {
    switch (action.type) {
      case 'callingAPI':
        return {
          result: action.payload
        }
      default:
        return state
    }
  }