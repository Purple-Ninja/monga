import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';

const styles = require('./../css/stylesheet');

import ArticleItem from './articleItem';

class OfflineApp extends Component {
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
            <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
              <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
            </View>
            <ListView dataSource={this.state.dataSource}
                      renderRow={(data) => <ArticleItem />} />
          </View>
    );
  }
}

export default OfflineApp;