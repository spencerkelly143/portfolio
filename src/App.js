import React from 'react';

import './App.scss';

let stars = null

class App extends React.Component {
  constructor(){
    super();
    let randomNums = []
    for (let i = 0; i<1; i++) {
      randomNums[i] = [Math.random()*(72-28)+28, Math.random()*(97-3)+3, Math.random()*(0.2-0.1)+0.1, Math.random()*(0.05-0.01)+0.01, i, Math.random()*(5-2)+2,Math.random()*(73-23)+23, Math.random()*(97-3)+3]
    }
    this.state = {
      
      randomNums: randomNums,
    }
  }
  handleClick() {

    this.setState({})
  }
  render(){
  return (
    <div>
    <div className="container">
    </div>
    <svg viewBox="0 25 100 50">
      <defs>
        {this.state.randomNums.map(p =>
              <filter id={p[4]}>
                <feGaussianBlur in="SourceGraphic" stdDeviation={p[3]} />
              </filter>
            )}
      </defs>
      {this.state.randomNums.map(p =>
        <circle className="stars" cx={p[1]} cy={p[0]} r={p[2]} key={p[4]} fill="#dbd2d2" stroke="#ffecbe" stroke-width="0.01" filter={`url(#${p[4]})`}>
          <animate attributeType="XML" id={`x${p[4]}`}  attributeName="cx"  to={p[7]} dur={p[5]} repeatCount="indefinite"/>
          <animate attributeType="XML" id={`y${p[4]}`}  attributeName="cy"  to={p[6]} dur={p[5]} repeatCount="indefinite"/>
        </circle>
      )}
      <circle cx="50" cy="50" r="5" onClick={this.handleClick}/>
      {this.state.randomNums.map(p =>
          <circle className="stars_next" cx={p[7]} cy={p[6]} r={p[2]} key={p[4]} fill="#dbd2d2"  stroke="#ffecbe" stroke-width="0.01" filter={`url(#${p[4]})`}>
            <animate attributeType="XML" id={`_x${p[4]}`} attributeName="cx" to={p[1]} dur={p[5]} repeatCount="indefinite"/>
            <animate attributeType="XML" id={`_y${p[4]}`} attributeName="cy" to={p[0]} dur={p[5]} repeatCount="indefinite"/>
          </circle>
        )}
    </svg>
    </div>
  );}
}

export default App;
