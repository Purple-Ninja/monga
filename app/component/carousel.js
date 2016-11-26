import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, ListView, Image } from 'react-native';

import Carousel from 'react-native-looped-carousel';
import ParallaxScroll from './parallaxScroll';

const { width, height } = Dimensions.get('window');
const styles = require('./../css/stylesheet');

const STATIC_PATH = {
    COVER: {
        ENGINEERING: require("./../image/cover/engineering.jpg"),
        PRODUCT: require("./../image/cover/product.jpg"),
        MARKETING: require("./../image/cover/marketing.jpg")
    },
    NAME: {
        ENGINEERING: 'Engineering',
        PRODUCT: 'Product',
        MARKETING: 'Marketing'
    },
    SUBTITLE: {
        ENGINEERING: 'Engineering Subtitle',
        PRODUCT: 'Product Subtitle',
        MARKETING: 'Marketing Subtitle'
    },
    BLUR_RADIUS: 2
}

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
                    onAnimateNextPage={(p) => console.log(p)}>
              <View style={this.state.size}>
                  <ParallaxScroll name={STATIC_PATH.NAME.ENGINEERING}
                                  subtitle={STATIC_PATH.SUBTITLE.ENGINEERING}
                                  cover={STATIC_PATH.COVER.ENGINEERING}
                                  blur={STATIC_PATH.BLUR_RADIUS} />
              </View>
              <View style={this.state.size}>
                  <ParallaxScroll name={STATIC_PATH.NAME.PRODUCT}
                                  subtitle={STATIC_PATH.SUBTITLE.PRODUCT}
                                  cover={STATIC_PATH.COVER.PRODUCT}
                                  blur={STATIC_PATH.BLUR_RADIUS} />
              </View>
              <View style={this.state.size}>
                  <ParallaxScroll name={STATIC_PATH.NAME.MARKETING}
                                  subtitle={STATIC_PATH.SUBTITLE.MARKETING}
                                  cover={STATIC_PATH.COVER.MARKETING}
                                  blur={STATIC_PATH.BLUR_RADIUS} />
              </View>
          </Carousel>
      </View>
    );
  }
}

export default CarouselApp;