import React from 'react';
import CommentService from '../../services/api/comment';
import moment from 'moment';
import swal from 'sweetalert'
import { Avatar, Icon } from 'antd';
import { StyledCard } from '../styled';

const CardComment = (props) => {
  const { api, currentUser, comment } = props;
  const service = new CommentService(api);

  const author = comment.user;
  const commentDate = moment(comment.created_at).startOf('day').fromNow();

  const handleRemoveComment = (id) => {
    swal({
      title: "¿Estás seguro de eliminar?",
      text: "Si elimina este comentario, no podrá recuperarlo",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        removeComment(id)
      } else {
        swal(`Comentario está a salvo`);
      }
    });
  }

  function removeComment(id) {
    const { tokens } = props;

    const successCallback = () => {
      swal(`Encuesta eliminada`, {
        icon: "warning",
      }).then(()=> {
        window.location.reload()
      });
    }

    const errorCallback = (err) => {
      swal(`Hubo un error, no se ha podido eliminar`, {
        icon: "error",
      })
    }

    service.delete({id, tokens, successCallback, errorCallback})
  }

  return (
    <StyledCard>
      <div>
        <div className="info-card-header">
          <div className="info-card-name">
            <Avatar size={30} src={author.avatar ? author.avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
            <span className="name">{author.name}</span>
          </div>
          {  author.id == currentUser.id &&
            <div className="info-card-actions">
              <Icon type="edit"></Icon>
              <div onClick={()=> handleRemoveComment(comment.id)}><Icon type="delete"></Icon></div>
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
