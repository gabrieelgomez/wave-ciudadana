import React from 'react';
import moment from 'moment';
import { Avatar, Icon } from 'antd';
import { StyledCard } from '../styled';

const CardComment = (props) => {
  const { currentUser, comment } = props;
  const author = comment.user;

  const commentDate = moment(comment.created_at).startOf('day').fromNow();

  return (
    <StyledCard>
      <div>
        <div className="info-card-header">
          <div className="info-card-name">
            <Avatar size={30} src={author.avatar ? author.avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
            <span className="name">{author.name}</span>
          </div>
          { author.id === currentUser.id &&
            <div className="info-card-actions">
              <Icon type="edit"></Icon>
              <Icon type="delete"></Icon>
            </div>
          }
        </div>
        <div className="info-card-body">
          <p>{comment.body}</p>
        </div>
        <div className="info-card-footer">
          <div className="footer-icons-r">
            <Icon type="clock-circle-o" />
            <small>{commentDate}</small>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

export default CardComment;
