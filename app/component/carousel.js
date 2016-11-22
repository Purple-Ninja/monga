import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';

import Carousel from 'react-native-looped-carousel';
import ParallaxScroll from './parallaxScroll';

const { width, height } = Dimensions.get('window');
const styles = require('./../css/stylesheet');

class CarouselApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel style={this.state.size}
                  autoplay={false}
                  pageInfo
                  onAnimateNextPage={(p) => console.log(p)}
                  >
          <View style={this.state.size}>
            <ParallaxScroll />
          </View>
          <View style={this.state.size}>
            <ParallaxScroll />
          </View>
          <View style={this.state.size}>
            <ParallaxScroll />
          </View>
        </Carousel>
      </View>
    );
  }
}

export default CarouselApp;