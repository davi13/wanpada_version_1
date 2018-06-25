import React, {Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import FilterSearch from './filter/FilterSearch';
import BarSearch from './bar/BarSearch';
import { styles } from './style';

class SearchScreen extends Component {

  SubmitBarSearch(values) {
    self = this;
    let url = 'http://10.2.1.232:3000/signup'
    fetch(url, {
      method: POST,
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'search='+value.search
    })
    .then((resp) => {
      resp.json();
    })
    .then((data) => {
      console.log(data);
      $elf.props.SearchBarsend(data);
    })
  }
  render() {
    return(
      <View style={styles.container}>
        <FilterSearch />
        <BarSearch onSubmit={this.SubmitBarSearch.bind(this)}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SearchBarsend: () => {
      dispatch({ type: 'SEARCH_COMP', payload: ''})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchScreen)
