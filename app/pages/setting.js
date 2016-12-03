import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';
import SettingsList from 'react-native-settings-list';

import I18n from './../locales/default';
const styles = require('./../resource/css/stylesheet');
const { width, height } = Dimensions.get('window');

class SettingApp extends Component {
  constructor(props) {
      super(props);
      this.onValueChange = this.onValueChange.bind(this);
      this.state = {switchValue: false};
  }

  _onLayoutDidChange = (e) => {
      const layout = e.nativeEvent.layout;
      this.setState({ size: { width: layout.width, height: layout.height } });
  }
  onValueChange(value){
    this.setState({switchValue: value});
  }

  render() { 
    return (
      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <View style={styles.statusBar}><Text style={styles.statusBarText}>{I18n.t('setting')}</Text></View>
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item  hasSwitch={true}
                                switchState={this.state.switchValue}
                                switchOnValueChange={this.onValueChange}
                                hasNavArrow={false}
                                title={I18n.t('nightMode')} />
            <SettingsList.Header headerStyle={{marginTop:10}}/>
            <SettingsList.Item  title={I18n.t('notification')}
                                onPress={() => console.log('Route To Notifications Page')} />
          </SettingsList>
        </View>
    </View>
    );
  }
}

export default SettingApp;