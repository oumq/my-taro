import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtAvatar } from 'taro-ui'
import "./index.scss";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: '',
      nickName: ''
    };
  }

  componentWillMount() {
    Taro.getStorage({
      key: 'avatarUrl'
    }).then(res => {
      this.setState({
        avatarUrl: res.data
      })
    }).catch(err => {
      // console.log(err)
    })

    Taro.getStorage({
      key: 'nickName'
    }).then(res => {
      this.setState({
        nickName: res.data
      })
    }).catch(err => {
      // console.log(err)
    })

    Taro.eventCenter.on("user-loginSuccess", (...arg) => {
      const [avatarUrl, nickName] = [...arg]
      this.setState({
        avatarUrl: avatarUrl,
        nickName: nickName
      })
    })
  }

  componentDidMount() {}

  componentWillUnmount() {
    Taro.eventCenter.off("user-loginSuccess")
  }

  componentDidShow() {}

  componentDidHide() {}

  config: Config = {}

  login = () => {
    Taro.navigateTo({
      url: '/pages/login/index?page=user'
    })
  }

  render() {
    const {avatarUrl, nickName} = this.state
    let top: any = null;
    if (avatarUrl !== '' && nickName !== '') {
      top = (
        <View className="top">
          <AtAvatar circle image={avatarUrl}></AtAvatar>
          <Text className="label">{nickName}</Text>
        </View>
      )
    } else {
      top = (
        <View className="top">
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
          <Text className="label" onClick={() => {this.login()}}>登陆/注册</Text>
        </View>
      )
    }
    return (
      <View>
        {top}
      </View>
    );
  }
}
