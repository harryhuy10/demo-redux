
export default (state = {}, action) => {
    switch (action.type) {
      case 'POST_API_SUCCESS':
        return {
          result: action.payload
        }
    case 'PUT_API_SUCCESS':
        return {
          result: action.payload
        }
      default:
        return state
    }
  }