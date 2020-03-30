import React from 'react';
import ProposalCategoryShowCard from "../../../components/admin/ProposalCategories/Show";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class ShowProposalCategory extends React.Component {

  state = {
    proposal_category: {},
    country: {}
  }

  componentDidMount() {
    this.proposal_categoryID = this.props.match.params.id
    this.getProposalCategoryData(this.proposal_categoryID)
  }

  getProposalCategoryData = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: `v1/wave_citizen/proposal_categories/${id}`,
      headers: {
        'access-token': access_token,
        client, uid
      }
    })

    const data = res.data.data
    const proposal_categoryData = data.attributes

    this.setState({
      proposal_category: {
        id: data.id,
        ...proposal_categoryData
      },
      country: {
        name: proposal_categoryData.country.name
      }
    })
  }

  deleteProposalCategory = async (id) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'DELETE',
      endpoint: `v1/wave_citizen/proposal_categories/${id}/destroy`,
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal(`Categoría de propuesta eliminada con exito`, {
          icon: "success",
        }).then(()=> {
          this.props.history.push('/admin/proposal_categories');
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
        this.deleteProposalCategory(this.proposal_categoryID)
      } else {
        swal(`Categoría de propuesta está a salvo`);
      }
    });
  }

  render() {
    return <ProposalCategoryShowCard
      proposal_category={this.state.proposal_category}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowProposalCategory);
