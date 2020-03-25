import Taro, { Component, Config } from "@tarojs/taro";
import "./index.scss";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";
import PageWrapper from "../../components/PageWrapper";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      iconSize: 18,
      fontSize: 12,
      tabList: [
        { title: "首页", iconType: "home" },
        { title: "菜单", iconType: "menu" },
        { title: "订单", iconType: "folder" },
        { title: "购物车", iconType: "shopping-cart" },
        { title: "我的", iconType: "user" }
      ]
    };
  }

  componentWillMount() {}

  componentDidMount() {
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config: Config = {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom"
  };

  handleClick = value => {
    this.setState({
      current: value
    });
  };

  render() {
    return (
      <View className='content'>
        <PageWrapper current={this.state.current} />
        <AtTabBar
          fixed
          tabList={this.state.tabList}
          iconSize={this.state.iconSize}
          fontSize={this.state.fontSize}
          current={this.state.current}
          onClick={value => this.handleClick(value)}
        />
      </View>
    );
  }
}
