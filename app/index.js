import React, { Component } from 'react';
import { Dimensions, Image, ListView, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import NavigationBar from 'react-native-navigation-bar';
import Icon from 'react-native-vector-icons/Ionicons';

import CarouselApp from './components/carousel';
import ArchiveApp from './pages/archive';
import SettingApp from './pages/setting';
import FeaturesApp from './pages/features';
import BlogApp from './pages/blog';

import I18n from './locales/default';
const styles = require('./resource/css/stylesheet'); 
const { width, height } = Dimensions.get('window');

class appContainer extends React.Component {
  state = {
    selectedTab: 'bookmarksTab',
    notifCount: 0
  };

  render() {
    return (
      <View style={styles.defaultFlex}>
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
          <Icon.TabBarItem  title={I18n.t('features')}
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
          <Icon.TabBarItem  title={I18n.t('archive')}
                            iconName="ios-bookmark-outline"
                            selectedIconName="ios-bookmark"
                            selected={this.state.selectedTab === 'archiveTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'archiveTab',
                              });
                            }}>
            <ArchiveApp />
          </Icon.TabBarItem>
          <Icon.TabBarItem  title={I18n.t('blog')}
                            iconName="ios-at-outline"
                            selectedIconName="ios-at"
                            selected={this.state.selectedTab === 'blogTab'}
                            onPress={() => {
                              this.setState({
                                selectedTab: 'blogTab',
                              });
                            }}>
            <BlogApp />
          </Icon.TabBarItem>
          <Icon.TabBarItem  title={I18n.t('setting')}
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