import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Icon } from 'antd';
import { StyledCard } from '../../styled';
import VoteItems from './VoteItems';
import Like from '../Like';

const PollInfo = (props) => {
  const { api, tokens, currentUser, item } = props;
  const info = item;

  const formatDueDateShow = moment.utc(info.due_date).format("L");
  const isVoted = info.voted_by_current_user;
  const isAdminPoll = info.type_poll === 'poll_admin'
  const human = isAdminPoll ? info.user : info.citizen;

  function noEdit() {
    if (info.total_likes > 0 || info.total_comments > 0 || info.total_poll_votes) {
      return true
    }
  }

  return (
    <StyledCard>
      { human &&
        <div>
          <div className="info-card-header">
            <div className="info-card-name">
              <Avatar size={20} src={human.avatar ? human.avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
              <span className="name">{human.name}</span>
            </div>
            { isAdminPoll &&
              <Badge count="Encuesta Oficial" style={{ backgroundColor: '#ff663b' }} />
            }
            { human.id === currentUser.id &&
              <div className="info-card-actions">
                { !noEdit() &&
                  <Link to={`/poll/${info.id}/update`}><Icon type="edit"></Icon></Link>
                }
                <span onClick={() => props.handleRemove(info.id)}><Icon type="delete"></Icon></span>
              </div>
            }
          </div>
          <div className="info-card-body">
            <small>{info.poll_category.name}</small>
            <h3><Link to={`/poll/${info.id}`}>{info.title}</Link></h3>
            <p>{info.description}</p>
            { info.items.length !== 0 &&
              <VoteItems
                api={api}
                tokens={tokens}
                items={info.items}
                isVoted={isVoted}
                total_poll_votes={info.total_poll_votes}
                poll_voted={info.voted_by_current_user}
              />
            }
          </div>
          <div className="info-card-footer">
            <div className="info-card-footer-info"> {info.total_poll_votes} votos | Vence el {info.due_date ? formatDueDateShow : ''}</div>
            <div className="footer-icons-l">
              <Badge count={info.total_comments}><Icon type="message"></Icon></Badge>
              <Like
                poll={info}
                api={api}
                tokens={tokens}
                currentUser={currentUser}
              />
            </div>
          </div>
        </div>
      }
    </StyledCard>
  )
}

export default PollInfo;
