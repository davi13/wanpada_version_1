import React, {Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import FilterSearch from './filter/FilterSearch';
import BarSearch from './bar/BarSearch';
import { styles } from './style';
import URL from '../../constants/Connect'

class SearchScreen extends Component {

  SubmitBarSearch(values) {
    self = this;

    fetch(URL.urlApp, {
      method: POST,
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'search='+value.search
    })
    .then((resp) => {
      resp.json();
    })
    .then((data) => {
      console.log(data);
      self.props.SearchBarsend(data);
    })
  }
  render() {
    return(
      <View style={styles.container}>
        {/* <FilterSearch /> */}
        <BarSearch onSubmit={this.SubmitBarSearch.bind(this)}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SearchBarsend: () => {
      dispatch({ type: 'SEARCH_COMP', payload: data})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchScreen)
