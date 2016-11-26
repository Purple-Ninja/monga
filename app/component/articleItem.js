import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image, processColor, TouchableHighlight } from 'react-native';
import Browser from 'react-native-browser';

import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from './../r3/default';
const styles = require('./../css/stylesheet');

const DUMMY = {
  title: '出師表',
  desc: '臣亮言：先帝創業未半，而中道崩殂。今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衛之臣，不懈於內；忠志之士，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣',
  img: 'https://facebook.github.io/react/img/logo_og.png'
}

class ArticleItem extends Component {
  static defaultProps = {
      title: DUMMY.title,
      description: DUMMY.desc,
      image: DUMMY.img,
      url: 'https://google.com/'
  };
  static propTypes = {
      title: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      image: React.PropTypes.string,
      url: React.PropTypes.string.isRequired
  };

  _onPressButton = (e) => {
    Browser.open(this.props.url);
  }

  _onPressShareTag = (e) => {
  }

  _onPressShareSource = (e) => {
  }

  _onPressShareAbstract = (e) => {
  }

  _onPressShareSocial = (e) => {
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}
                          accessible={true}
                          accessibilityLabel="touchable article item"
                          accessibilityTraits="link">
        <View key={this.props.title} style={ styles.articleListRow }>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>YAHOO</Text>
              <Text><Icon name="bookmark" size={14} color="#900" />{I18n.t('like')}</Text>
          </View>
          <View style={styles.articleListContainer}>
              <Text style={styles.articleListMetaTag}>X 小時前 | </Text>
              <Text style={styles.articleListMetaTag}>約 X 分鐘讀完 | </Text>
              <Text style={styles.articleListMetaTag}>熱門度 1230</Text>
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
                  <Text><Icon name="share-alt" size={14} color="#900" />{I18n.t('share')}</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._onPressShareAbstract}
                                  accessible={true}
                                  accessibilityLabel="touchable article abstract"
                                  accessibilityTraits="button">
                  <Text><Icon name="flag" size={14} color="#900" />{I18n.t('abstract')}</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._onPressShareTag}
                                  accessible={true}
                                  accessibilityLabel="touchable article source"
                                  accessibilityTraits="button">
                  <Text><Icon name="link" size={14} color="#900" />{I18n.t('source')}</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this._onPressShareTag}
                                  accessible={true}
                                  accessibilityLabel="touchable article tag"
                                  accessibilityTraits="button">
                  <Text><Icon name="tag" size={14} color="#900" />{I18n.t('tag')}</Text>
              </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ArticleItem;