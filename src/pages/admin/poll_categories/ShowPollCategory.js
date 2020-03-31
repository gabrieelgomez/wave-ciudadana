import React from 'react';
import PollCategoryShowCard from "../../../components/admin/PollCategories/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class ShowPollCategory extends React.Component {

  state = {
    poll_category: {},
    country: {}
  }

  componentDidMount() {
    this.poll_categoryID = this.props.match.params.id
    this.getPollCategoryData(this.poll_categoryID)
  }

  getPollCategoryData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/poll_categories/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data
    const poll_categoryData = data.attributes

    this.setState({
      poll_category: {
        id: data.id,
        ...poll_categoryData
      },
      country: {
        name: poll_categoryData.country.name
      }
    })
  }

  deletePollCategory = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'DELETE',
      endpoint: `v1/wave_citizen/poll_categories/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal(`Categoría de encuesta eliminada con exito`, {
          icon: "success",
        }).then(()=> {
          this.props.history.push('/admin/poll_categories');
        });
      },
      errorCallback: () => {
        swal(`Hubo un error, no se ha podido eliminar`, {
          icon: "error",
        })
      }
    })
  }

  handleDelete = (e) => {
    e.preventDefault();
    swal({
      title: "¿Estás seguro de eliminar?",
      text: "Si elimina este record, afectará todos los subrecords que han sido creados a partir de él, siendo eliminados también",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deletePollCategory(this.poll_categoryID)
      } else {
        swal(`Categoría de encuesta está a salvo`);
      }
    });
  }

  render() {
    return <PollCategoryShowCard
      poll_category={this.state.poll_category}
      country={this.state.country}
      handleDelete={this.handleDelete}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowPollCategory);
