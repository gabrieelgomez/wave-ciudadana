import React from 'react';
import UpdatePollCategoryForm from "../../../components/admin/PollCategories/Update";
import { connect } from 'react-redux';
import { api } from '../../../services/api';
import swal from 'sweetalert';

class UpdatePollCategory extends React.Component {

  state = {
    poll_category: {},
    countries: []
  }

  componentDidMount() {
    const poll_categoryID = this.props.match.params.id;
    this.getPollCategoryData(poll_categoryID)
    this.getCountriesData()
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        poll_category: {
          ...prevState.poll_category,
          [name]: value
        }
      }
    });
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState=> {
      return {
        poll_category: {
          ...prevState.poll_category,
          country_id: value
        }
      }
    });
  }

  handleUpdatePollCategory = (e) => {
    e.preventDefault()
    const { poll_category } = this.state;
    this.updatePollCategory(poll_category)
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

    this.setState({
      poll_category: {
        id: data.id,
        ...data.attributes
      }
    })
  }

  updatePollCategory = async (poll_category) => {
    const { uid, client, access_token } = this.props.tokens;
    const res = await this.props.api({
      method: 'PUT',
      endpoint: `v1/wave_citizen/poll_categories/${poll_category.id}/update`,
      payload: {
        poll_category
      },
      headers: {
        'access-token': access_token,
        client, uid
      },
      successCallback: () => {
        swal('País actualizado exitosamente', '', 'success')
        this.props.history.push(`/admin/poll_category/${poll_category.id}`)
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
    return <UpdatePollCategoryForm
      poll_categoryData={this.state.poll_category}
      countriesData={this.state.countries}
      handleUpdatePollCategory={this.handleUpdatePollCategory}
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePollCategory);
