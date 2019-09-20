export const simpleAction = () => dispatch => {
    var action = Math.random()
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action' + ' ' + action
    })
}
export const hardAction = () => dispatch => {
  
    dispatch({
        type: 'HARD_ACTION',
        payload: 'hard',
        
    })
}