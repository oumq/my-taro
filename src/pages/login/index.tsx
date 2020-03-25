import Taro, { Component, Config } from "@tarojs/taro";
import { AtToast, AtIcon } from "taro-ui"
import "./index.scss";
import { View, Button } from "@tarojs/components";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastOpen: false,
      text: '加载中',
      icon: '',
      duration: 0
    };
  }

  componentWillMount() {
    this.setState({
      page: this.$router.params.page
    })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config: Config = {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "账户登录",
    navigationBarTextStyle: "black"
  };

  getUserInfo = res => {
    if (res.detail.rawData) {
      console.log(res)
      const {avatarUrl, nickName} = res.detail.userInfo
      Taro.getUserInfo().then(res => {
        Taro.setStorage({
          key: "avatarUrl",
          data: avatarUrl
        });
        Taro.setStorage({
          key: "nickName",
          data: nickName
        });
        Taro.navigateBack({
          delta: 1
        }).then(res => {
          Taro.eventCenter.trigger(this.state.page + '-loginSuccess', avatarUrl, nickName)
        })
      });
    }
  };

  locationClick = () =>{
    Taro.authorize({
      scope: 'scope.userLocation'
    }).then(res => {
      this.setState({
        duration: 0,
        toastOpen: true,
        icon: 'loading-2',
        text: '加载中'
      })
      return Taro.getLocation()
    }).then(res => {
      this.setState({
        toastOpen: false
      })
      // this.setState({
      //   lon: res.longitude,
      //   lat: res.latitude
      // })
      Taro.openLocation({
        latitude: res.latitude,
        longitude: res.longitude,
        scale: 15
      })
      console.log(res)
    }).catch(err => {
      this.setState({
        duration: 3000,
        toastOpen: true,
        icon: 'close',
        text: '网络异常'
      })
    })
  }

  render() {
    return (
      <View>
        <Button
          type="primary"
          openType="getUserInfo"
          onGetUserInfo={res => {
            this.getUserInfo(res);
          }}
        >
          微信登陆
        </Button>
        <Button onClick={() => {this.locationClick()}}>获取地理位置</Button>
        <AtToast icon={this.state.icon} duration={this.state.duration} isOpened={this.state.toastOpen} text={this.state.text}></AtToast>
      </View>
    );
  }
}
