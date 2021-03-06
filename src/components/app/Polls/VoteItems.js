import React from 'react';
import PollService from '../../../services/api/poll';
import swal from 'sweetalert';
import { List, Radio, Icon } from 'antd';
import { StyledButton } from '../../styled';
import styled from 'styled-components';

const StyledRadioButton = styled(Radio.Button)`
  i {
    margin-right: 5px;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const StyledRadioGroup = styled(Radio.Group)`
  .ant-list-item {
    border-bottom: 0;
    padding-bottom: 10px;
    padding-top: 0;
  }
`

class VoteItems extends React.Component {
  state = {
    vote: {},
    voted: false,
    items: [],
    selectedItem: null
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
    this.setState({
      voted: this.props.isVoted,
      items: this.props.items
    })
  }
  
  voteItem = vote => {
    const {tokens} = this.props;
    const payload = {
      vote: {
        ...vote,
        votable_type: 'WaveCitizen::Item'
      }
    }

    const successCallback = () => {
      if (this.props.isVoted === false) {
        const newItems = this.state.items.map(i => {
          if (i.id === this.state.selectedItem) {
            i.voted_by_current_user = true
          }
  
          return i
        })
  
        this.setState({
          voted: true,
          items: newItems
        })
      }

      swal('Voto registrado', '', 'success').then(()=> {
        window.location.reload()
      });
    }

    const errorCallback = err => {
      swal({
        title: "Hubo un error",
        text: err.toString(),
        icon: 'error'
      })
    }

    this.service.createVote({payload, tokens, successCallback, errorCallback})
  }

  onChange = e => {
    this.setState({
      vote: {
        votable_id: e.target.value
      }
    })
  };

  handleSelectedItem = id => {
    this.setState({
      selectedItem: id
    })
  }

  render() {
    const radioStyle = {
      width: '100%'
    };

    const { items, voted } = this.state;
    const { total_poll_votes, poll_voted } = this.props;
    
    return (
      <div className="spacing-top">
        <List>
          <StyledRadioGroup onChange={this.onChange}>
            { items.map((item, i) => {
              const percentageItem = item.total_item_votes * 100 / total_poll_votes;

              return (
                <List.Item key={i} onClick={()=> this.handleSelectedItem(item.id)}>
                    <StyledRadioButton style={radioStyle} value={item.id} disabled={voted}>
                    <div>
                      { item.voted_by_current_user &&
                        <Icon type="check" />
                      }
                      {item.title}
                    </div>
                    { total_poll_votes !== 0 && poll_voted &&
                      <div>{percentageItem.toFixed(0) + '%'}</div>
                    }
                    </StyledRadioButton>
                </List.Item>
              )
            })}
          </StyledRadioGroup>
        </List>
        { !voted && 
          <StyledButton onClick={() => this.voteItem(this.state.vote)}>Votar</StyledButton>        
        }
      </div>
    )
  }

}

export default VoteItems;