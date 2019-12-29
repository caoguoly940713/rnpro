import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BlinkApp extends Component {

  render() {
    return (
      <View>
        <BlinkView text='I love to blink' />
        <BlinkView text='Yes blinking is so great' />
        <BlinkView text='Why did they ever take this out of HTML' />
        <BlinkView text='Look at me look at me look at me' />
      </View>
    );
  }
}


class BlinkView extends Component {

  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

