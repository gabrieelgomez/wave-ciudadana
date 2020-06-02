import React from 'react';
import swal from 'sweetalert'
import { Icon, Badge } from 'antd';
import LikeService from '../../services/api/like';

const Like = (props) => {
  const { poll } = props;
  const service = new LikeService(props.api);

  function createLike() {
    const { tokens } = props;
    const payload = {
      likeable_id: poll.id,
	    likeable_type: "WaveCitizen::Poll"
    }

    const successCallback = () => {
      swal(`Te ha gustado esta encuesta`, {
        icon: "success",
      }).then(()=> {
        window.location.reload()
      });
    }

    const errorCallback = (err) => {
      swal(`Hubo un error, no se ha podido crear tu like`, {
        icon: "error",
      })
    }

    service.create({payload, tokens, successCallback, errorCallback})
  }

  function removeLike() {
    const { tokens } = props;
    const payload = {
      likeable_id: poll.id,
	    likeable_type: "WaveCitizen::Poll"
    }

    const successCallback = () => {
      swal(`Ya no te gusta esta encuesta`, {
        icon: "success",
      }).then(()=> {
        window.location.reload()
      });
    }

    const errorCallback = (err) => {
      swal(`Hubo un error, no se ha podido eliminar tu like`, {
        icon: "error",
      })
    }

    service.delete({payload, tokens, successCallback, errorCallback})
  }

  return (
    <Badge count={poll.total_likes}>
      { poll.liked_by_current_user ? (
        <Icon className="like-active" type="heart" onClick={()=> removeLike()}></Icon>
      ) : (
        <Icon type="heart" onClick={()=> createLike()}></Icon>
      )}
    </Badge>
  )
}

export default Like;