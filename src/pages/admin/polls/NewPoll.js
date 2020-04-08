import React from 'react';
import NewPollForm from "../../../components/admin/Polls/New";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewPoll extends React.Component {

  state = {
    poll_categories: []
  }

  componentDidMount() {
    this.getPolllCategoriesData()
  }

  getPolllCategoriesData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/poll_categories',
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    if (res.data) {
      data = res.data.data.map((item) => {
        const attrs = item.attributes;

        return {
          id: item.id,
          ...attrs
        }
      });
    }

    this.setState({
      poll_categories: data
    })
  }

  createPoll = async (poll) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/polls/create',
      payload: {
        poll: {
          user_id: this.props.currentUser.id,
          ...poll
        }
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Encuesta creada exitosamente', '', 'success')
        this.props.history.push(`/admin/polls`)
      },
      errorCallback: (err) => {
        swal({
          title: "Hubo un error",
          text: err.toString(),
          icon: 'error'
        })
      }
    })
    console.log(res)
  }

  render() {
    return <NewPollForm
      createPoll={this.createPoll}
      pollCategoriesData={this.state.poll_categories}
      currentUser={this.props.currentUser}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens } = state.session;
  const { currentUser } = state.session;
  return { tokens, currentUser };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);
