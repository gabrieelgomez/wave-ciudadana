import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Icon } from 'antd';
import { StyledCard } from '../../styled';
import VoteItems from './VoteItems';

const PollInfo = (props) => {
  const info = props.item;
  const { api, tokens, currentUser } = props;

  const formatDueDateShow = moment.utc(info.due_date).format("L");

  const isVoted = info.voted_by_current_user;

  return (
    <StyledCard>
      { props.type === "wave_citizen_polls" &&
        <div>
          <div className="feed-card-header">
            <div className="feed-card-name">
              <Avatar size={20} src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
              { info.type_poll === 'poll_admin' ? (
                <span className="name">{info.user.name}</span>
              ) : (
                <span className="name">{info.citizen.name}</span>
                )
              }
            </div>
            { info.type_poll === 'poll_admin' &&
              <Badge count="Encuesta Oficial" style={{ backgroundColor: '#ff663b' }} />
            }
            { info.citizen.id === currentUser.id &&
              <div>
                <Link to={`/poll/${info.id}/update`}><Icon type="edit"></Icon></Link>
                <span onClick={() => props.removePoll(info.id)}><Icon type="delete"></Icon></span>
              </div>
            }
          </div>
          <small>{info.poll_category.name}</small>
          <h3><Link to={`/poll/${info.id}`}>{info.title}</Link></h3>
          <p>{info.description}</p>
          { info.items.length !== 0 &&
            <VoteItems
              api={api}
              tokens={tokens}
              items={info.items}
              isVoted={isVoted}
            />
          }
          <div className="feed-card-footer">
            <div className="feed-card-footer-info"> {info.total_poll_votes} votos | Vence el {info.due_date ? formatDueDateShow : ''}</div>
            <div>
              <Icon type="message"></Icon>
              <Icon type="like"></Icon>
            </div>
          </div>
        </div>
      }
    </StyledCard>
  )
}

export default PollInfo;