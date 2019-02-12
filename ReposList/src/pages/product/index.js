import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import Main from '../main/index';

export default class Product extends Component {
    state = {
        product: {},        
    };
    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`);
        this.setState({ product: response.data });
                                                
    }

    /*prevPage = () => {
        const { page } = this.state;
        if (page ===1) return;
        const pageNumber = page - 1;
        Main.loadProducts(pageNumber);
    }*/
    
    render () {
        const { product } = this.state;
        return (
            <div className="product-info">
                <article>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>
                        URL: <a href={product.url} target="_blank">{product.url}</a>
                    </p>  
                </article>
                <div className="btPrevPage">
                    <button onClick={Main.prevPage}>Voltar</button>
                </div>              
            </div>
            
        );
    }
}