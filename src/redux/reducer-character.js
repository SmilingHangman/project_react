const initialState = { characterName: 'some random loser' }
export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHARACTER_NAME':
      return { ...state, characterName: action.characterName }
    default:
      return state
  }
}
