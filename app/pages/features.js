import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';

import I18n from './../locales/default';
const styles = require('./../resource/css/stylesheet');

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
      <View style={styles.defaultFlex}>
          <View style={styles.statusBar}><Text style={styles.statusBarText}>{I18n.t('features')}</Text></View>
      </View>
    );
  }
}

export default FeaturesApp;