import React, { Component } from 'react'
import { Link } from "react-router-dom";

const styles = {
	'container-error': {
		fontSize: '7rem',
		textAlign: 'center',
		padding: '2rem'
	}
}

class ViewError extends Component {
    render() {
      return (
        <div style={styles['container-error']}>
          <p>We could not find what you are looking for.</p>
					<p>Go back <Link to="/">Home</Link></p>
        </div>
      )
    }
  }

export default ViewError
