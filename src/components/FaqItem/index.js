import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    answerShown: false,
  }

  onToggleAnswerShown = () => {
    this.setState(prevState => ({
      answerShown: !prevState.answerShown,
    }))
  }

  renderAnswer = () => {
    const {answerShown} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    if (answerShown) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderIcon = () => {
    const {answerShown} = this.state
    const buttonUrl = answerShown
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = answerShown ? 'minus' : 'plus'

    return (
      <button
        type="button"
        onClick={this.onToggleAnswerShown}
        className="button"
      >
        <img src={buttonUrl} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="question-list-item">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderIcon()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
