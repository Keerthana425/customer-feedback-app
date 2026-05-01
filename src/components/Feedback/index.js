// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBack: false}

  onEmoji = () => {
    this.setState({isFeedBack: true})
  }

  renderEmojis = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card_contanier">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojisname">
          {emojis.map(eachuser => (
            <li key={eachuser.id}>
              <button
                type="button"
                onClick={this.onEmoji}
                className="buttonemoji"
              >
                <img
                  src={eachuser.imageUrl}
                  alt={eachuser.name}
                  className="imagesize"
                />
                <p className="names">{eachuser.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderthank = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="card_contaniers">
        <img src={loveEmojiUrl} alt="love emoji" className="imagesize" />
        <h1 className="heaidng">Thank You!</h1>
        <p className="names">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state
    return (
      <div className="main-container">
        {isFeedBack ? this.renderthank() : this.renderEmojis()}
      </div>
    )
  }
}
export default Feedback
