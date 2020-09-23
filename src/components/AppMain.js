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

class PhoneList extends Component {
  render() {
    return <div className={this.props.value}>
      <h1 className='category-name'>{this.props.value}</h1>
      <div className = 'phone-list'>
        {
          this.props.phoneList.map((phone, index) => {
              return <PhoneItem value={phone} key = {`phone${index}`}  add={this.props.onIncrement}></PhoneItem>;
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
      // iphoneList : [],
      // huaweiList : []
      categoryList: [],
      phoneList: []
    }
  }

  render() {
    return <section className = 'app-main'>
      {
        this.state.categoryList.map((category, index) => {
          return <PhoneList onIncrement = {this.props.onIncrement}
                            value = {category}
                            key={`category${index}`}
                            phoneList = {this.state.phoneList.filter(phone => phone.category === category)}>
          </PhoneList>
        })
      }

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

      const categories = data.map(phone => phone.category);
      const categoryList =[...new Set(categories)];
      const phoneList = data;
      this.setState({
        categoryList,
        phoneList
      });
    }).catch(err => {
      console.log(err);
    })
  }
}


