import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';

const styles = require('./../css/stylesheet');

import ArticleItem from './articleItem';
import SearchBar from 'react-native-search-bar';


class FeaturesApp extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1']),
      };
  }

  render() {
    return (
      <View style={{flex: 1 }}>
          <View style={styles.statusBar}><Text style={styles.statusBarText}>Features</Text></View>
           <SearchBar   placeholder='Search'
                        textFieldBackgroundColor='#FFF' />
            <ListView   dataSource={this.state.dataSource}
                        renderRow={(data) => <ArticleItem />} />
      </View>
    );
  }
}

export default FeaturesApp;