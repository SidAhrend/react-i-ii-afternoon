import React, {Component} from 'react';
import data from '../data';

class Main extends Component{
    constructor(){
        super()
        this.state = {
            currentId: 0,
        }
        
    }

    nextCurrentId(value){
      this.setState({
        currentId: value += 1
      })
    }

    previousCurrentId(value){
      this.setState({
        currentId: value -= 1
      })
    }

    render(){
        return(
            <div className="App">
    <header className="App-header">
        <div className='Header-content'>
          HOME
        </div>
    </header>
        <div className='Main-content'>
          <div className='White-container'>
            <div className='Name-plus-numbers'>
              
              <div className='Name'>Name: {data[this.state.currentId].name.first} {data[this.state.currentId].name.last}</div>
              
              <div className='Numbers'>{`${data[this.state.currentId].id}`}/25</div>
          </div>

            <div className='Text-details'>
              <div className='lists'>
              𝗙𝗿𝗼𝗺: {data[this.state.currentId].city}, {data[this.state.currentId].country}
                <br/>
                <br/>
                𝗘𝗺𝗽𝗹𝗼𝘆𝗲𝗿: {data[this.state.currentId].employer}
                <br/>
                <br/>
                𝗧𝗶𝘁𝗹𝗲: {data[this.state.currentId].title}
                <br/>
                
              </div>
            </div>
            
            <div className='Favorites'>
            <p>𝗙𝗮𝘃𝗼𝗿𝗶𝘁𝗲 𝗠𝗼𝘃𝗶𝗲𝘀</p>
            𝟭. {data[this.state.currentId].favoriteMovies[0]}
            <br/>
            <br/>
            𝟮. {data[this.state.currentId].favoriteMovies[1]}
            <br/>
            <br/>
            𝟯. {data[this.state.currentId].favoriteMovies[2]}
            </div>

          </div>
          <div className='Bottom-container'>
            <div className='Outer-buttons'>
            <div>
            <button className='white-buttons' onClick={() => this.previousCurrentId(this.state.currentId)}> {`<-PREVIOUS`} </button>
            </div>
            <button className='Blue-buttons'>EDIT</button>
            <button className='Blue-buttons'>DELETE</button>
            <button className='Blue-buttons'>NEW</button>
            <div>
            <button className='white-buttons' onClick={() => this.nextCurrentId(this.state.currentId) }>{`NEXT ->`}</button>
            </div>
            
            </div>
          </div>
        </div>
    </div>
        
    );
  };
}
export default Main;