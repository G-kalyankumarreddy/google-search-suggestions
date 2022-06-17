import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearchInput} = props
  const {suggestion} = suggestionItem

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-list">
      <p className="suggestions">{suggestion}</p>

      <button type="button" className="arrow-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
          onClick={onClickSuggestion}
        />
      </button>
    </li>
  )
}

export default SuggestionItem
