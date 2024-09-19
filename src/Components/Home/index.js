const {Component} = require('react')

class Home extends Component {
  state = {
    stateList: [],
  }
  componentDidMount() {
    this.fetchedData()
  }

  fetchedData = async () => {
    const url =
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    const options = {
      method: 'GET',
      'content-type': 'application / json',
    }
    const response = await fetch(url, options)
    const res = await response.json()
    this.setState({stateList: res})
  }

  render() {
    const {stateList} = this.state
    return (
      <>
        <h1>hi is this drinks page</h1>
        <div>
          {stateList.map((eachitem) => {
            ;<h1>{eachitem.name}</h1>
          })}
        </div>
      </>
    )
  }
}

export default Home
