import React, { Component } from 'react'
import { Link } from "react-router-dom";


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

	  // This binding is necessary to make `this` work in the callback
		this.reOrder.old = this.reOrder.old.bind(this)
		this.reOrder.new = this.reOrder.new.bind(this)
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

	//rearranged items based on the oldest first or the newest first
	reOrder = {
		new() {
			const data = this.state.items.sort((a, b)=> {
				return new Date(b.created) - new Date(a.created);
			})
			this.setState({
				items: data
			})
		},
		old() {
			const data = this.state.items.sort((a, b)=> {
				return new Date(a.created) - new Date(b.created);
			})
			this.setState({
				items: data
			})
		}
	}

  render() {
    return (
      <article className="container">
          <h1>{this.state.category}</h1>
	
					<button onClick={this.reOrder.new} className="button">newest First</button>
					<button onClick={this.reOrder.old} className="button">Oldest First</button>

					<div style={styles['container-items']}>
						{this.state.items.map((value,index)=> {
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
