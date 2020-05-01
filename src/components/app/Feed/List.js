import React from 'react';
import FeedCard from './Card';

class List extends React.Component {
  state = {
    polls: []
  }

  componentDidMount() {
    this.getPolls()
  }

  getPolls = async () => {
    const { pollsHome } = this.props;

    this.setState({
      polls: Object.assign([], pollsHome)
    })
  }

  render() {
    const polls = this.state.polls;
    return (
      <div>
        {polls.map((item, i)=> {
          return (
            <FeedCard
              key={i}
              item={item}
              type={item.type}
            />
          )
        })}
      </div>
    )
  }
}

export default List;
