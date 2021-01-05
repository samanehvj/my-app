import React  from 'react';
 class Clock extends React.Component {
    constructor(props) {
      super(props);
      let rightNow = new Date();
      this.state = {
          date: rightNow,
          formattedDate: rightNow.toLocaleString(),
          aNewDate: new Date()
        };
        this.newDate = this.newDate.bind(this);
    }
    
   componentDidMount() { 
    this.timerID = setInterval(
        () => this.newDate(),
        1000
      );
   }
   tick(){
        console.log('Tick has been called at', new Date());
        // this.componentDidUpdate(this.props, this.state);
        // this.componentWillUnmount();
   }
   componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
   }
   componentWillUnmount() { 
    clearInterval(this.timerID);
   }
   newDate(){
    let nD = new Date();
       this.setState({
           aNewDate: nD,
           formattedDate: nD.toLocaleString()
       });
   }
    render() {
      return (
        <div>
          {/* <button onClick={this.componentWillUnmount()}>Update State</button> */}
          <h2>It is {this.state.formattedDate}.</h2>
        </div>
      );
    }
  }
  export default Clock;






// import React, { Component } from 'react';

// class App extends Component {

//   constructor() {
//     super()
//     this.state={time:new Date()}
//   }

//   currentTime()
//   {
//     this.setState({
//       time: new Date()
//     })
//   }

//   componentWillMount()
//   {
//     setInterval(()=>this.currentTime(),1000)
//   }


//   render() {
//     return (
//       <h1> It is : 
//         {this.state.time.toLocaleTimeString()}
//       </h1>
//     )
//   }
// }

// export default App;

