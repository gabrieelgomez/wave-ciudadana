import React from 'react';
import PollService from '../../../../services/api/poll';
import FeedCard from './Card';

class List extends React.Component {
  state = {
    polls: []
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    this.getPolls()
  }

  getPolls = async () => {
    const { tokens } = this.props;
    const data = await this.service.getAll({tokens})

    this.setState({
      polls: data
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