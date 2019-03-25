import React, { Component } from 'react'

const BASE_API = 'https://swapi.co/api/'

const styles = {
  'container-categories': {
    backgroundColor: 'red'
  },
  'categories': {
    display: 'flex',
    flexDirection: 'column'
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
          return <a href="#" key={index}>{value}</a>
        })}
        </section>
      </article>
    )
  }
}

export default ViewCategory;