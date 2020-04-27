const initialState = { playAmbience: true }
export default (state = initialState, action) => {
  switch (action.type) {
    case 'MUTE_AMBIENCE':
      return { ...state, playAmbience: action.payload }
    default:
      return state
  }
}
