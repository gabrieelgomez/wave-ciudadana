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
    vote: {}
  }

  componentDidMount() {
    this.service = new PollService(this.props.api)
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
      swal('Voto registrado', '', 'success')
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

  render() {
    const radioStyle = {
      width: '100%'
    };

    const { items, isVoted } = this.props;
    
    return (
      <div className="spacing-top">
        <List>
          <StyledRadioGroup onChange={this.onChange}>
            { items.map((item, i) => {
              return (
                <List.Item key={i}>
                    <StyledRadioButton style={radioStyle} value={item.id} disabled={isVoted}>
                    { item.voted_by_current_user && 
                      <Icon type="check" />
                    }
                    {item.title}
                    </StyledRadioButton>
                </List.Item>
              )
            })}
          </StyledRadioGroup>
        </List>
        { !isVoted && 
          <StyledButton onClick={() => this.voteItem(this.state.vote)}>Votar</StyledButton>        
        }
      </div>
    )
  }

}

export default VoteItems;