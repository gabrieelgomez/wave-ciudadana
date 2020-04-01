import React from 'react';
import AdminCountriesList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminCountries extends React.Component {

  render() {
    const {
      countries
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <h3>Países</h3>
          <LinkButton name="Crear nuevo" action="/admin/country/new" />
        </div>
        <AdminCountriesList data={countries}/>
      </div>
    )
  }
}

export default AdminCountries;
