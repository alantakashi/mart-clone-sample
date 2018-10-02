import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import ProductDetail from './ProductDetail';

export default class ProductList extends Component {
	state = {
		products: []
	};

	componentWillMount() {
		// console.log('componentWillMount in ProductList');
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ products: response.data }));
        // axios.get('http://localhost:3000/v1/product').then(response => this.setState({ products: response.data }));
	}

	renderProducts() {
		return this.state.products.map(product => <ProductDetail product={product} key={product.title} />);
	}

    render() {
        return (

            <ScrollView>
                {this.renderProducts()}
            </ScrollView>
        );
    }
}

