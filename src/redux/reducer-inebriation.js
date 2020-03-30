const initialState = { inebriationLevel: 0 }
export default (state = initialState, action) => {
  switch (action.type) {
    case 'INEBRIATION_LEVEL':
      return { ...state, inebriationLevel: action.inebriationLevel + 1 }
    default:
      return state
  }
}
