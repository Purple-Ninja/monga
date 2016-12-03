import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image, processColor, TouchableHighlight } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import BlurImage from 'react-native-blur-image'
import Browser from 'react-native-browser';

import I18n from './../locales/default';
import Article from './../components/article';
const styles = require('./../resource/css/stylesheet');
const base = require('./../configs/base');
const env = require('./../configs/env');

const stickyHeader = base.default.stickyHeader;
const parallaxSroll = base.default.parallaxSroll;
const bookmarksListAPI = env.default.api.bookmarks;

class ParallaxScroll extends Component {
  static defaultProps = {
      name: 'Engineering',
      subtitle: 'Engineering subtitle',
      blur: 2
  };
  static propTypes = {
      name: React.PropTypes.string.isRequired,
      subtitle: React.PropTypes.string.isRequired,
      blur: React.PropTypes.number,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state =  {
      loaded: false,
      dataSource: ds.cloneWithRows(['placeholder'])
    };
  }
  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(bookmarksListAPI.list + bookmarksListAPI.defaultReuqest, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .catch((error) => console.warn("fetch error:", error))
    .then((response) => response.json()).then((responseData) => {
        console.log("responseData type", typeof(responseData));
        this.updateDataSource(responseData);
    })
    .done();
  }

  updateDataSource(data) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      loaded: true
    });
  }

  renderDeaultPlaceHolderRow() {
    return (
        <Article placeholder={true} />
    );
  }

  renderRow(data) {
    if (!this.state.loaded) {
      return this.renderDeaultPlaceHolderRow();
    } else {
      return (
        <Article  title={data.title}
                  description={data._description}
                  image={data._image}
                  url={data.url}
                  favicon={data._favicon}
                  bookmarkID={data.bookmark_id}
                  host={data.host} />
      );
    }
  }


  render() {
    const { onScroll = () => {} } = this.props;

    return (
      <ListView ref="ListView"
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                renderScrollComponent={props => (
                  <ParallaxScrollView
                    onScroll={onScroll}
                    headerBackgroundColor={parallaxSroll.HEADER_BG_COLOR}
                    backgroundSpeed={parallaxSroll.BG_SPEED}
                    stickyHeaderHeight={stickyHeader.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={stickyHeader.PARALLAX_HEADER_HEIGHT}
                    renderBackground={() => (
                      <View key="background">
                          <BlurImage  source={this.props.cover}
                                      blurRadius={this.props.blur} />
                          <View style={styles.parallaxScrollView} />
                      </View>
                    )}
                    renderForeground={() => (
                      <View key="parallax-header" style={ styles.parallaxHeader }>
                        <View>
                            <Text style={ styles.articleListHeroTitle }>{this.props.name}</Text>
                            <Text style={ styles.articleListHeroSubtitle }>{this.props.subtitle}</Text>
                        </View>
                      </View>
                    )}
                    renderStickyHeader={() => (
                      <View key="sticky-header" style={styles.stickySection}>
                        <Text style={styles.stickySectionText}>{this.props.name}</Text>
                      </View>
                    )}
                    renderFixedHeader={() => (
                      <View key="fixed-header" style={styles.fixedSection}>
                        <Text style={styles.fixedSectionText}
                              onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                          {I18n.t('scrollTop')}
                        </Text>
                      </View>
                    )} />
                )}
      />
    );
  }
}

export default ParallaxScroll;