// import React, { Component, PropTypes } from 'react'
// import TextField from 'material-ui/lib/text-field'
// import FlatButton from 'material-ui/lib/flat-button'

// const style = {
//   textField: {
//     marginLeft: 20,
//     width: '90%',
//   },
//   flatButton: {
//     float: 'right',
//     margin: '20px 20px 0'
//   }
// }

// export default class TextItems extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       functionId: this.props.functions.functionId,
//       functionName: this.props.functions.functionName, //todo 复用这里怎么使用变量替代呢？2016.12.12
//     }
//   }

//   handleChange(name, event) {
//     let newState = {}
//     newState[name] = event.target.value
//     this.setState(newState)
//   }

//   render() {
//     const { functions, itemsActions, array } = this.props
//     let submitContent = array.map(arr => this.state[arr])

//     return (
//       <span>
//         {
//           array.map((arr, i) => 
//             <TextField 
//               value={this.state[arr]} 
//               hintText={arr} 
//               floatingLabelText={arr}
//               onChange={this.handleChange.bind(this, arr)}
//               style={style.textField} />
//           )
//         }
//         <FlatButton
//           style={style.flatButton} 
//           label="Submit" 
//           primary={true} 
//           keyboardFocused={true}
//           onTouchTap={() => itemsActions.handleSubmit(...submitContent)} />
//       </span>
//     )
//   }
// }