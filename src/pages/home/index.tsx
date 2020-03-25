import Taro, { Component, Config } from "@tarojs/taro";
import "./index.scss";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstList: [
        { height: 100 },
        { height: 150 },
        { height: 200 },
        { height: 90 },
        { height: 130 },
        { height: 110 },
        { height: 90 },
        { height: 100 }
      ],
      secondList: [
        { height: 130 },
        { height: 120 },
        { height: 140 },
        { height: 90 },
        { height: 80 },
        { height: 210 },
        { height: 160 },
        { height: 100 },
        { height: 130 }
      ]
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config: Config = {};

  render() {
    return (
      <View>
        <View className="swiperContent">
          <Swiper
            indicatorColor="#999"
            indicatorActiveColor="#333"
            interval={3000}
            circular
            autoplay
            indicatorDots
          >
            <SwiperItem>
              <View style="width: 100%; height: 100%">
                <Image className="imgStyle" src={img1}></Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View style="width: 100%; height: 100%">
              <Image className="imgStyle" src={img2}></Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View style="width: 100%; height: 100%">
              <Image className="imgStyle" src={img3}></Image>
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        <View className="tabContent">
          <View className="dobuleItemContent"></View>
          <View className="itemContent"></View>
          <View className="itemContent"></View>
          <View className="itemContent"></View>
          <View className="itemContent"></View>
        </View>
        <View className="productContent">
          <View className="firstList">
            {this.state.firstList.map((item, index) => {
              const style: any = {
                height: item.height + "px"
              };
              return <View className="itemContent" style={style} key={'firstList' + index}></View>;
            })}
          </View>
          <View className="secondList">
            {this.state.secondList.map((item, index) => {
              const style: any = {
                height: item.height + "px"
              };
              return <View className="itemContent" style={style} key={'secondList' + index}></View>;
            })}
          </View>
        </View>
      </View>
    );
  }
}
