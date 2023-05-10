import {Component} from 'react'

class Smallcards extends Component {
  deleting = () => {
    const {first, bindelete1} = this.props
    const {website1, password1, username1, id} = first
    bindelete1(id)
  }

  pass = () => {
    const {first, second} = this.props
    const {website1, password1, username1, id} = first
    const {clickpassword} = second
    console.log(clickpassword)

    if (clickpassword === false) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="staring"
          />
        </div>
      )
    }
    return <p className="staring">{password1}</p>
  }

  render() {
    const {first, second} = this.props
    const {website1, password1, username1, id} = first

    return (
      <li className="lista">
        <div>{username1[0]}</div>
        <div className="lepru">
          <p className="paragraph">{website1}</p>
          <div>{this.pass()}</div>
          <p className="p2">{username1}</p>
        </div>
        <button onClick={this.deleting} className="bitta12">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="bin-photo"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default Smallcards
