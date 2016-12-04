import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';
import SearchBar from 'react-native-search-bar';

import I18n from './../locales/default';
const styles = require('./../resource/css/stylesheet');
import Article from './../components/article';

class ArchiveApp extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
  }

  render() {
    return (
          <View style={{flex: 1 }}>
            <View style={styles.statusBar}><Text style={styles.statusBarText}>{I18n.t('archive')}</Text></View>
            <SearchBar placeholder={I18n.t('search')} textFieldBackgroundColor='#FFF' />
            <ListView dataSource={this.state.dataSource}
                      renderRow={(data) => <Article />} />
          </View>
    );
  }
}

export default ArchiveApp;