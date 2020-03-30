import React from 'react';
import NewProposalCategoryForm from "../../../components/admin/ProposalCategories/New";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class NewProposalCategory extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.getCountriesData()
  }

  getCountriesData = async () => {
    let data = [];
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'GET',
      endpoint: 'v1/wave_citizen/countries',
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
      countries: data
    })
  }

  createProposalCategory = async (proposal_category) => {
    const { uid, client, access_token } = this.props.tokens;
    await this.props.api({
      method: 'POST',
      endpoint: 'v1/wave_citizen/proposal_categories/create',
      payload: {
        proposal_category
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('Categoría de Propuesta creada exitosamente', '', 'success')
        this.props.history.push(`/admin/proposal_categories`)
      },
      errorCallback: (err) => {
        swal({
          title: "Hubo un eror",
          text: err.toString(),
          icon: 'error'
        })
      }
    })
  }

  render() {
    return <NewProposalCategoryForm
      createProposalCategory={this.createProposalCategory}
      countriesData={this.state.countries}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewProposalCategory);
