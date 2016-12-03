import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image, processColor, TouchableHighlight } from 'react-native';
import Browser from 'react-native-browser';
import _ from 'lodash';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import I18n from './../locales/default';

const styles = require('./../resource/css/stylesheet');
const env = require('./../configs/env');
const base = require('./../configs/base');

const readBaseAPI = env.default.api.readability.base;
const iconBase = base.default.article.icon;
const dummyBase = base.default.article.dummy;

const browserConf = {
        showUrlWhileLoading: false,
        showActionButton: false,
        disableContextualPopupMenu: true,
      };

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isArchived: false,
      archivedColor: iconBase.archive.unSelectedColor
    };
  }

  static defaultProps = {
      title: dummyBase.title,
      description: dummyBase.desc,
      image: dummyBase.img,
      url: dummyBase.url,
      icon: dummyBase.icon,
      bookmarkID: 1111
  };
  static propTypes = {
      title: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      image: React.PropTypes.string,
      url: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string,
      bookmarkID: React.PropTypes.number
  };

  _onPressButton = (e) => {
    Browser.open(readBaseAPI + this.props.bookmarkID, browserConf);
  }

  _onPressShareSource = (e) => {
    Browser.open(this.props.url, browserConf);
  }


  _onPressShareTag = (e) => {
  }

  _onPressShareSocial = (e) => {
  }

  _likeOnclick = (e) => {
    if (this.state.isArchived) {
      this.setState({
        archivedColor: iconBase.archive.unSelectedColor,
        isArchived: false
      });  
    } else {
      this.setState({
        archivedColor: iconBase.archive.selectedColor,
        isArchived: true
      }); 
    } 
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}
                          accessible={true}
                          accessibilityLabel="touchable article item"
                          accessibilityTraits="link">
        <View key={this.props.title} style={ styles.articleListRow }>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image style={styles.articleListIcon} source={{uri: this.props.icon }}/>
                <Text>YAHOO</Text>
              </View>
              <TouchableHighlight onPress={this._likeOnclick}>
                <Text><FaIcon name="bookmark" size={iconBase.archive.size} color={this.state.archivedColor} />{I18n.t('like')}</Text>
              </TouchableHighlight>
          </View>
          <View style={styles.articleListContainer}>
              <Text style={styles.articleListMetaTag}>X 小時前 | </Text>
              <Text style={styles.articleListMetaTag}>約 X 分鐘讀完 | </Text>
              <Text style={styles.articleListMetaTag}>{I18n.t('popular')} 1230</Text>
          </View>
          <View style={styles.articleListContainer}>
              <Text style={styles.articleListTitle}>{this.props.title}</Text>
          </View>
          <View style={styles.articleListContainer}>
              {this.props.image &&
                <Image style={styles.articleListImage} source={{uri: this.props.image }}/>
              }
              <Text style={ styles.articleListDesc }>{this.props.description}</Text>
          </View>
          <View style={styles.articleFooterContainer}>
              <TouchableHighlight onPress={this._onPressShareSocial}
                                  accessible={true}
                                  accessibilityLabel="touchable article share"
                                  accessibilityTraits="button">
                  <Text><FaIcon name="share-alt" size={iconBase.social.size} color={iconBase.social.default} />{I18n.t('share')}</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._onPressShareSource}
                                  accessible={true}
                                  accessibilityLabel="touchable article source"
                                  accessibilityTraits="button">
                  <Text><FaIcon name="link" size={iconBase.social.size} color={iconBase.social.default} />{I18n.t('source')}</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._onPressShareTag}
                                  accessible={true}
                                  accessibilityLabel="touchable article tag"
                                  accessibilityTraits="button">
                  <Text><FaIcon name="tag" size={iconBase.social.size} color={iconBase.social.default} />{I18n.t('tag')}</Text>
              </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Article;