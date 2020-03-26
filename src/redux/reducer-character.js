export default (state = {}, action) => {
  switch (action.type) {
    case 'CHARACTER_NAME':
      return { ...state, characterName: action.characterName }
    default:
      return state
  }
}
