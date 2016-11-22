import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image, processColor, TouchableHighlight } from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import BlurImage from 'react-native-blur-image'
import Icon from 'react-native-vector-icons/FontAwesome';
import Browser from 'react-native-browser';
 
const styles = require('./../css/stylesheet');

const STICKY_HEADER_HEIGHT = 70;
const PARALLAX_HEADER_HEIGHT = 200;


class ParallaxScroll extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Simplicity Matters',
        'Hammock Driven Development',
        'Value of Values',
        'Are We There Yet?',
        'The Language of the System',
        'Design, Composition, and Performance',
        'Clojure core.async',
        'The Functional Database',
        'Deconstructing the Database',
        'Hammock Driven Development',
        'Value of Values'
      ])
    };
  }

  _onPressButton = (e) => {
    Browser.open('https://google.com/');
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => (
          <TouchableHighlight onPress={this._onPressButton}>
            <View key={rowData} style={ styles.row }>
              <Text style={ styles.rowText }>
                { rowData }
              </Text>
              <Text style={ styles.rowText }>
                test
              </Text>
            </View>
          </TouchableHighlight>
         )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
              <View key="background">
                <BlurImage
                  source={require('./../img/engineer.jpg')}
                  blurRadius={12}
                />
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <Text style={ styles.sectionSpeakerText }>
                  Engineering
                </Text>
                <Text style={ styles.sectionTitleText }>
                  CTO of Cognitec, Creator of Clojure
                </Text>
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
              </View>
            )}

            renderFixedHeader={() => (
              <View key="fixed-header" style={styles.fixedSection}>
                <Text style={styles.fixedSectionText}
                      onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                  Scroll to top
                </Text>
              </View>
            )}/>
        )}
      />
    );
  }
}

export default ParallaxScroll;