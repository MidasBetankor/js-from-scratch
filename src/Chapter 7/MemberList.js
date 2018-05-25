import React, {Component} from 'react'
import {getFakeMembers} from './FakeMembers'

class MemberList extends Component {
  constructor() {
    super()
    this.state = {
      members: [],
      loading: false,
      error: null
    }
  }

  componentWillMount() {
    this.setState({loading: true})
    getFakeMembers(this.props.count)
      .then(
        members => this.setState({members, loading: false}),
        error => this.setState({error, loading: false})
      )
  }

  componentWillUpdate() {
    console.log(`Will update is running`)
  }

  render() {
    const {members, loading, error} = this.state
    return (
      <div>
        {(loading)
          ? <span>Loading Members</span>
          : (members.length)
            ? members.map((member, i) => <Member key={i} {...user} />)
            : <span>0 members loaded...</span>
        }
        {(error) ? <p>Error Loading Members: {error}</p> : ''}
      </div>
    )
  }
}

