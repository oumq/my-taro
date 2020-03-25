import Taro, { Component, Config, Events } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.scss";
import "taro-ui/dist/style/index.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {
    console.log(Taro);
    Taro.getSystemInfo({}).then(res => {
      console.log(res);
      Taro.$navBarMarginTop = res.statusBarHeight || 0;
      Taro.$contentHeight = res.windowHeight - res.statusBarHeight - 54 || 0;
    });
    Taro.login({}).then(res => {
      console.log(res);
    });
    Taro.getSetting({}).then(res => {
      if (res) {
        console.log("getSetting Success!", res)
        if (res.authSetting["scope.userInfo"]) {
          return Taro.getUserInfo()
        }
      }
    }).then(res => {
      if (res) {
        console.log("getUserInfo Success!", res)
        console.log(res.userInfo)
        Taro.setStorage({
          key:"avatarUrl",
          data:res.userInfo.avatarUrl
        })
        Taro.setStorage({
          key:"nickName",
          data:res.userInfo.nickName
        })
      }
    })
    // Taro.getSetting({
    //   success: res => {
    //     console.log(res);
    //     if (res.authSetting["scope.userInfo"]) {
    //       Taro.getUserInfo({
    //         success: res => {
    //           console.log(res);
    //         }
    //       });
    //     }
    //   }
    // });

    // 全局事件监听
    const events = new Events()
    Taro.eventCenter = events
    console.log(Taro.eventCenter)
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ["pages/index/index", "pages/login/index"],
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于小程序位置接口的效果展示"
      }
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
