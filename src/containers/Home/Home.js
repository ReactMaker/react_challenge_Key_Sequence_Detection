import React, { Component } from 'react';

import './Home.less';

export default class Home extends Component {

  state = {
    pressed: [],
    secret: ['r', 'e', 'a', 'c', 't'],
    buttonDisabled: true,
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyPress);
  }

  onKeyPress = (e) => {
    const key = e.key;
    if (key === this.state.secret[this.state.pressed.length]) {
      const newPressed = this.state.pressed;
      newPressed.push(key);
      if (newPressed.join('') === this.state.secret.join('')) {
        this.setState({ pressed: newPressed, buttonDisabled: false });
      } else {
        this.setState({ pressed: newPressed });
      }
    } else {
      this.setState({ pressed: [], buttonDisabled: true });
    }

  }

  render() {
    return (
      <div id="pageHome">
        <button disabled={this.state.buttonDisabled} onClick={() => alert('恭喜解鎖成功')}>Click me</button>
        <div className="notice">請用鍵盤輸入以下英文就可以解鎖按鈕了</div>
        <div className="example">
          {this.state.secret.map(code => (<div key={Math.random()}>{code}</div>))}
        </div>
        <div className="notice">目前輸入</div>
        <div className="example">
          {this.state.pressed.map(code => (<div key={Math.random()}>{code}</div>))}
        </div>
      </div>
    );
  }
}
