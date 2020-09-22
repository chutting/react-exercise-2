import React, { Component } from 'react';
import placeholders from '../assets/product_image_placeholder.png';
import '../styles/AppMain.scss';

class PhoneItem extends Component {
  render() {
    return <div className = 'phone-item'>
      <p className = 'item-name'>{this.props.value.name}</p>
      <img src={this.props.value.img_url ? this.props.value.img_url : placeholders} alt={this.props.value.name} />
      <div className='item-footer'>
        <p>{this.props.value.price}</p>
        <button className='add-to-cart-btn' onClick = {this.props.add}>add to cart</button>
      </div>
    </div>
  }
}

class HuaweiList extends Component {
  render() {
    return <div className = 'huawei'>
      <h1>HUAWEI</h1>
      <div className = 'phone-list'>
        {
          this.props.value.map((phone, index) => {
            return <PhoneItem value={phone} key={`iphone${index}`} add={this.props.onIncrement}></PhoneItem>;
          })
        }
      </div>
    </div>
  }
}

class IphoneList extends Component {
  render() {
    return <div className = 'iphone'>
      <h1>iPhone</h1>
      <div className = 'phone-list'>
        {
          this.props.value.map((phone, index) => {
            return <PhoneItem value={phone} key = {`huawei${index}`}  add={this.props.onIncrement}></PhoneItem>;
          })
        }
      </div>
    </div>
  }
}

export default class AppMain extends Component {
  constructor() {
    super();
    this.state = {
      iphoneList : [],
      huaweiList : []
    }
  }

  render() {
    return <section className = 'app-main'>
      <IphoneList onIncrement = {this.props.onIncrement} value = {this.state.iphoneList}></IphoneList>
      <HuaweiList onIncrement = {this.props.onIncrement} value = {this.state.huaweiList}></HuaweiList>
    </section>
  }

  componentDidMount () {
    fetch("http://localhost:3000/products").then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        Promise.reject('请求失败')
      }
    }).then(data => {
      const iphoneList = data.filter(phone => phone.category === 'iPhone');
      const huaweiList = data.filter(phone => phone.category === 'HUAWEI');
      this.setState({
        iphoneList, huaweiList
      });
    }).catch(err => {
      console.log(err);
    })
  }
}


