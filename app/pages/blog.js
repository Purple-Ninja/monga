import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';
import SearchBar from 'react-native-search-bar';

import I18n from './../locales/default';
const styles = require('./../resource/css/stylesheet');

class BlogApp extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
  }

  render() {
    return (
          <View style={styles.defaultFlex}>
            <View style={styles.statusBar}><Text style={styles.statusBarText}>{I18n.t('blog')}</Text></View>
            <SearchBar placeholder={I18n.t('search')} textFieldBackgroundColor='#FFF' />
          </View>
    );
  }
}

export default BlogApp;