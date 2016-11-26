import React, { Component } from 'react';
import { Dimensions, Image, ListView, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import CarouselApp from './component/carousel';
import ArchiveApp from './component/archive';
import SettingApp from './component/setting';
import FeaturesApp from './component/features';

import I18n from './r3/default';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = require('./css/stylesheet'); 
const { width, height } = Dimensions.get('window');

import NavigationBar from 'react-native-navigation-bar';
 
class appContainer extends React.Component {
  state = {
    selectedTab: 'bookmarksTab',
    notifCount: 0
  };

  render() {
    return (
      <View style={{flex: 1 }}>
      <TabBarIOS  unselectedTintColor="#888888"
                  tintColor="#888888"
                  barTintColor="#FFFFFF">
          <Icon.TabBarItem  title={I18n.t('bookmarks')}
                            selected={this.state.selectedTab === 'bookmarksTab'}
                            iconName="ios-flame-outline"
                            selectedIconName="ios-flame"
                            onPress={() => {
                              this.setState({
                                selectedTab: 'bookmarksTab',
                              });
                            }} >
            <CarouselApp />
          </Icon.TabBarItem>
          <Icon.TabBarItem  title="Features"
                            iconName="ios-heart-outline"
                            selectedIconName="ios-heart"
                            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                            selected={this.state.selectedTab === 'featuresTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'featuresTab',
                                notifCount: this.state.notifCount + 1,
                              });
                            }}>
            <FeaturesApp />
          </Icon.TabBarItem>
          <Icon.TabBarItem  title="Offline"
                            iconName="ios-bookmark-outline"
                            selectedIconName="ios-bookmark"
                            selected={this.state.selectedTab === 'offlineTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'offlineTab',
                              });
                            }}>
            <ArchiveApp />
          </Icon.TabBarItem>
          <Icon.TabBarItem  title="Blog"
                            iconName="ios-at-outline"
                            selectedIconName="ios-at"
                            selected={this.state.selectedTab === 'rssTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'rssTab',
                              });
                            }}>
            <View></View>
          </Icon.TabBarItem>
          <Icon.TabBarItem  title="Setting"
                            iconName="ios-settings-outline"
                            selectedIconName="ios-settings"
                            selected={this.state.selectedTab === 'settingTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'settingTab',
                              });
                            }}>
            <SettingApp />
          </Icon.TabBarItem>
      </TabBarIOS>
      </View>
    );
  }
}

export default appContainer;