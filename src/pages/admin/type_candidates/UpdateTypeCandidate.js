import React from 'react';
import UpdateTypeCandidateForm from "../../../components/admin/TypeCandidates/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdateTypeCandidate extends React.Component {

  state = {
    type_candidate: {}
  }

  componentDidMount() {
    const type_candidateID = this.props.match.params.id;
    this.getTypeCandidateData(type_candidateID)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        type_candidate: {
          ...prevState.type_candidate,
          [name]: value
        }
      }
    });
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState=> {
      return {
        type_candidate: {
          ...prevState.type_candidate,
          status_type_candidate: value
        }
      }
    });
  }

  handleUpdateTypeCandidate = (e) => {
    e.preventDefault()
    const { type_candidate } = this.state;
    this.updateTypeCandidate(type_candidate)
  }

  getTypeCandidateData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/type_candidacies/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data

    this.setState({
      type_candidate: {
        id: data.id,
        ...data.attributes
      }
    })
  }

  updateTypeCandidate = async (type_candidacy) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `v1/wave_citizen/type_candidacies/${type_candidacy.id}/update`,
      payload: {
        type_candidacy
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Datos actualizados exitosamente', '', 'success')
      }
    })
    console.log(res)
  }

  render() {
    return <UpdateTypeCandidateForm
      type_candidateData={this.state}
      handleUpdateTypeCandidate={this.handleUpdateTypeCandidate}
      handleSelectChange={this.handleSelectChange}
      handleChange={this.handleChange}
    />
  }
}

const mapStateToProps = (state) => {
  const { tokens } = state.session;
  return { tokens };
}

const mapDispatchToProps = {
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTypeCandidate);
