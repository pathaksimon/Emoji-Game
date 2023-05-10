import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import Smallcards from './App'

class Components extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    clicked: false,
    newest: [],
    clickpassword: false,
    filtering: '',
  }

  webChange = event => {
    this.setState({website: event.target.value})
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  clickingonsubmit = event => {
    event.preventDefault()
    const {website, username, password, newest} = this.state

    const finest = {
      website1: website,
      username1: username,
      password1: password,
      id: v4(),
    }
    this.setState({
      newest: [...newest, finest],
      website: '',
      username: '',
      password: '',
    })
    this.setState({clicked: true})
    console.log(website)
  }

  whileClicking = () => {
    const {clicked} = this.state
    return (
      <div className="melvin-photo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          className="melvin"
          alt="no passwords"
        />
        <p>No Passwords</p>
      </div>
    )
  }

  bindelete = mid => {
    const {newest} = this.state
    const arya = newest.filter(aich => aich.id !== mid)
    this.setState({newest: arya})
  }

  passwordChange1 = () => {
    const {clickpassword} = this.state
    this.setState(prevState => ({clickpassword: !prevState.clickpassword}))
  }

  bottomside = () => {
    const {clicked, newest, filtering} = this.state
    const {username1, website1} = newest
    const newresult = newest.filter(ques =>
      ques.website1.toLowerCase().includes(filtering.toLowerCase()),
    )
    if (clicked === false) {
      return this.whileClicking()
    }
    return (
      <ul className="ul">
        {newresult.map(eachone => (
          <Smallcards
            first={eachone}
            key={eachone.id}
            bindelete1={this.bindelete}
            second={this.state}
          />
        ))}
      </ul>
    )
  }

  dots = () => {
    const {clickpassword} = this.state

    if (clickpassword === false) {
      return 'password'
    }
    return 'text'
  }

  searching = event => {
    this.setState({filtering: event.target.value})
  }

  render() {
    const {
      website,
      password,
      username,
      newest,
      clickpassword,
      filtering,
    } = this.state

    const {password1} = newest

    const {username1, website1} = newest
    const newresult = newest.filter(ques =>
      ques.website1.toLowerCase().includes(filtering.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="manager-photo"
        />
        <div className="card">
          <h1>Yours Passwords</h1>
          <div className="card1">
            <div className="addPassword">
              <form onSubmit={this.clickingonsubmit}>
                <h1>Add New Password</h1>

                <div className="website">
                  <div className="paras">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      className="website-photo"
                      alt="website"
                    />
                  </div>
                  <input
                    onChange={this.webChange}
                    className="Website-input"
                    type="text"
                    value={website}
                    placeholder="Enter Website"
                  />
                </div>

                <div className="website">
                  <div className="paras">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      className="website-photo"
                      alt="username"
                    />
                  </div>
                  <input
                    onChange={this.usernameChange}
                    className="Website-input"
                    type="text"
                    value={username}
                    placeholder="Enter Username"
                  />
                </div>

                <div className="website">
                  <div className="paras">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      className="website-photo"
                      alt="password"
                    />
                  </div>
                  <input
                    onChange={this.passwordChange}
                    className="Website-input"
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                  />
                </div>
                <button type="submit" className="bitta">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              className="password-manager"
              alt="password manager"
            />
          </div>
          <div className="card2">
            <div className="first">
              <h1>Your Passwords </h1>
              <p>{newresult.length}</p>
              <div className="website123">
                <div className="paras">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    className="website-photo"
                    alt="search"
                  />
                </div>
                <input
                  onChange={this.searching}
                  className="Website-input"
                  type="search"
                  alt="search"
                />
              </div>
            </div>
            <hr className="horizontal" />
            <div className="auto">
              <input
                onClick={this.passwordChange1}
                type="checkbox"
                id="check"
              />
              <label htmlFor="check">Show passwords</label>
            </div>
            <div className="second">{this.bottomside()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Components
