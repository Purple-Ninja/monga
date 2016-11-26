import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';

import SettingsList from 'react-native-settings-list';

const { width, height } = Dimensions.get('window');
const styles = require('./../css/stylesheet');

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
        <View style={styles.statusBar}><Text style={styles.statusBarText}>Setting</Text></View>
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item  hasSwitch={true}
                                switchState={this.state.switchValue}
                                switchOnValueChange={this.onValueChange}
                                hasNavArrow={false}
                                title='Airplane Mode' />
            <SettingsList.Header headerStyle={{marginTop:15}}/>
            <SettingsList.Item  title='Notifications'
                                onPress={() => Alert.alert('Route To Notifications Page')} />
            <SettingsList.Item  title='Control Center'
                                onPress={() => Alert.alert('Route To Control Center Page')} />
            <SettingsList.Item  title='Do Not Disturb'
                                onPress={() => Alert.alert('Route To Do Not Disturb Page')} />
          </SettingsList>
        </View>
    </View>
    );
  }
}

export default SettingApp;