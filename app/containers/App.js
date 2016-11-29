import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = this.getStyles();
    return (
        <div >
            <NewHeader/>
            {this.props.children}
        </div>
    );
  }
}

App.propTypes = {

}

function mapStateToProps(state) {
  return {

  }
}


export default connect(mapStateToProps)(App)
