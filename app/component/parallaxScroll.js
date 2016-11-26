import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image, processColor, TouchableHighlight } from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import BlurImage from 'react-native-blur-image'
import Browser from 'react-native-browser';

import I18n from './../r3/default';
import ArticleItem from './articleItem';
const styles = require('./../css/stylesheet');

const STICKY_HEADER_HEIGHT = 70;
const PARALLAX_HEADER_HEIGHT = 200;

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

    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  componentWillMount() {
      fetch('https://bryanyuan2.tk:8081/api/bookmarks/list', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json()).then((responseData) => {
          this.updateDataSource(responseData);
      });
  }

  updateDataSource(response) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(response)
    });
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView ref="ListView"
                style={styles.container}
                dataSource={ this.state.dataSource }
                renderRow={(data) => (
                    <ArticleItem  title={data.title}
                                  description={data._description}
                                  image={data._image}
                                  url={data.url}
                    />
                )}

                renderScrollComponent={props => (
                  <ParallaxScrollView onScroll={onScroll}
                                      headerBackgroundColor="#333"
                                      stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                                      parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                                      backgroundSpeed={10}
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