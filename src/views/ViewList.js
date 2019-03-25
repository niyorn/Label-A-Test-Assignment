import React, { Component } from 'react'
import {Link } from "react-router-dom";


const styles = {
	'container-items': {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit,minmax(14rem,1fr))',
		gridGap: '1rem'
	},
	'item': {
		border: 'solid 1px #e8e8e8',
		padding: '1rem'
	}
}


class ViewList extends Component {
	constructor(props) {
		super(props)
		
    this.state = {
			api: this.props.location.state.api,
			category: this.props.match.params.category,
			items: []
    }
	}
	
	api = {
    get(url) {
      return fetch(url)
      .then(response=> response.json())
    }
  }

	componentDidMount() {
		this.api.get(this.state.api)
		.then(results=> {
			this.setState({items: results.results})
		})
	}

  render() {
    return (
      <article className="container">
          <h1>{this.state.category}</h1>

					<button>Date</button>

					<div style={styles['container-items']}>
						{this.state.items.map((value,index)=> {
							console.log(value)
							return <section key={index} style={styles['item']}>
								<p><span>title: </span> <span>{value.title}</span></p>
								<p><span>name: </span> <span>{value.name}</span></p>
								<p><span>model: </span> <span>{value.model}</span></p>
								<p><span>passenger: </span> <span>{value.passenger}</span></p>
								<p><span>crew: </span> <span>{value.crew}</span></p>
								<p><span>capacity: </span> <span>{value.cargo_capacity}</span></p>
								<p><span>created: </span> <span>{value.created}</span></p>
							</section>
						})}
					</div>

					<Link to='/'>Back to Home</Link>
      </article>
    )
  }
}

export default ViewList;
