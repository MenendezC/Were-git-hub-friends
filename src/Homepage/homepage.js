import React from 'react';
import './homepage.css';

class Sluth extends React.Component {
  state = {background: 'baby'}

  componentDidMount(){
    this.interval = setInterval(this.changeBackground, 5000)
  }

  changeBackground = () => {
    let backgrounds = ['baby', 'Sloopy', 'Sloothy']
    backgrounds = backgrounds.filter(background => background !== this.state.background)
    const background = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    this.setState({ background : background})
  }


  render(){
    return(
      <div className={this.state.background}>
        <div id='shrink'>          
              <button id='title' unselectable="on" className='unselectable' >Sloths 4 Lyfe </button>
              <h1>Insert your edits here</h1>
          </div>
          <div>
            <h2 id="Tots">Insert your edits here</h2>
          </div>
      </div>
   )
  }
}
     
export default Sluth 
