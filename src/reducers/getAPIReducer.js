<<<<<<< HEAD

export default (state = {}, action) => {
    switch (action.type) {
      case 'callingAPI':
        return {
          result: action.payload
        }
      default:
        return state
    }
=======

export default (state = {}, action) => {
    switch (action.type) {
      case 'callingAPI':
        return {
          result: action.payload
        }
      default:
        return state
    }
>>>>>>> 380f9c6c77cd8be47e233f1cf96a19f1139a92c6
  }