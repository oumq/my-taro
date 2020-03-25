import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";
import Home from '../../pages/home'
import Menu from '../../pages/menu'
import Order from '../../pages/order'
import ShoppingCart from '../../pages/shopping-cart'
import User from '../../pages/user'

export default class PageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let resultDom: any = null
    if (this.props.current === 0) {
      resultDom = <Home current={this.props.current}></Home>
    } else if (this.props.current === 1) {
      resultDom = <Menu current={this.props.current}></Menu>
    } else if (this.props.current === 2) {
      resultDom = <Order current={this.props.current}></Order>
    } else if (this.props.current === 3) {
      resultDom = <ShoppingCart current={this.props.current}></ShoppingCart>
    } else if (this.props.current === 4) {
      resultDom = <User current={this.props.current}></User>
    }
    const style: any = {
      paddingTop: Taro.$navBarMarginTop + 'px',
      height: Taro.$contentHeight + 'px'
    }
    return (
      <View className='content' style={style}>
        {resultDom}
      </View>
    );
  }
}
