import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
import { View } from '@tarojs/components'

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config: Config = {}

  render() {
    return (
      <View>
        ShoppingCart
      </View>
    )
  }
}
