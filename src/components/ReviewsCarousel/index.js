import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[activeReviewIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onleft = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(preState => ({
        activeReviewIndex: preState.activeReviewIndex - 1,
      }))
    }
  }

  onright = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(preState => ({
        activeReviewIndex: preState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    console.log(activeReviewIndex)

    return (
      <div className="app-container">
        <button
          data-testid="leftArrow"
          className="btn"
          onClick={this.onleft}
          type="button"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            alt="left arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          data-testid="rightArrow"
          className="btn"
          onClick={this.onright}
          type="button"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
