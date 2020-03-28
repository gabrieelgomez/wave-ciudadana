import React from 'react';
import UpdateProposalCategoryForm from "../../../components/admin/ProposalCategories/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdateProposalCategory extends React.Component {

  state = {
    proposal_category: {},
    countries: []
  }

  componentDidMount() {
    const proposal_categoryID = this.props.match.params.id;
    this.getProposalCategoryData(proposal_categoryID)
    this.getCountriesData()
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        proposal_category: {
          ...prevState.proposal_category,
          [name]: value
        }
      }
    });
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState=> {
      return {
        proposal_category: {
          ...prevState.proposal_category,
          country_id: value
        }
      }
    });
  }

  handleUpdateProposalCategory = (e) => {
    e.preventDefault()
    const { proposal_category } = this.state;
    this.updateProposalCategory(proposal_category)
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

    this.setState({
      proposal_category: {
        id: data.id,
        ...data.attributes
      }
    })
  }

  updateProposalCategory = async (proposal_category) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `v1/wave_citizen/proposal_categories/${proposal_category.id}/update`,
      payload: {
        proposal_category
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('País actualizado exitosamente', '', 'success')
      }
    })
    console.log(res)
  }

  render() {
    return <UpdateProposalCategoryForm
      proposal_categoryData={this.state.proposal_category}
      countriesData={this.state.countries}
      handleUpdateProposalCategory={this.handleUpdateProposalCategory}
      handleChange={this.handleChange}
      handleSelectChange={this.handleSelectChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProposalCategory);
