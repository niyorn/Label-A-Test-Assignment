import React, { Component } from 'react'
import {Link } from "react-router-dom";


const BASE_API = 'https://swapi.co/api/'

const styles = {
  'container-categories': {
    textAlign: 'center'
  },
  'categories': {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit,minmax(14rem,1fr))',
    gridGap: '1rem',
    padding: '1rem'
  },
  'category': {
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '2rem',
    textDecoration: 'none',
    color: 'black'
  }
}

class ViewCategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      categories: [],
      test: {}
    }
  }

  api = {
    get(url) {
      return fetch(url)
      .then(response=> response.json())
    }
  }


  componentDidMount() {
    this.api.get(BASE_API)
    .then(result=> {
      this.setState({
        data: result,
        categories: Object.keys(result)
      })
    })
  }

    render() {
    return (
      <article style={styles['container-categories']}>
        <h1>All Star Wars Categories</h1>
        <section style={styles['categories']}>
        {this.state.categories.map((value,index)=> {
          return <Link to={{
                pathname: `list/${value}`,
                state: {
                  api: this.state.data[value]
                }
              }
            } 
              key={index}
              className="button"
              style={styles['category']}
            >
              {value}
            </Link>
        })}
        </section>
      </article>
    )
  }
}

export default ViewCategory;