import React, {Component} from 'react';
import { connect } from 'react-redux'
import {filterSort} from '../../../actions'
import {getVisibleproducts} from '../../../services';

class FilterBar extends Component {

    

    //List Layout View
    listLayout(){
        document.querySelector(".collection-grid-view").style = "opacity:0";
        document.querySelector(".product-wrapper-grid").style = "opacity:0.2";
        document.querySelector(".product-wrapper-grid").classList.add("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-12');
        });
        setTimeout(function(){
            document.querySelector(".product-wrapper-grid").style = "opacity: 1";
        }, 500);
    }

    //Grid Layout View
    gridLayout(){
        document.querySelector(".collection-grid-view").style = "opacity:1";
        document.querySelector(".product-wrapper-grid").classList.remove("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-3');
        });
    }

    // Layout Column View
    LayoutView = (colSize) =>{
        if(!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
            var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
            [].forEach.call(elems, function(el) {
                el.className = '';
                el.classList.add('col-lg-'+colSize);
            });
        }

        this.props.onLayoutViewClicked(colSize);
    }

    render (){
        return (
            <div className="product-filter-content">
                                <div className="product-page-filter">
                    <select onChange={(e) => this.props.filterSort(e.target.value)}>
                        <option value="">Tri des articles</option>
                        <option value="HighToLow">Prix: décroissant</option>
                        <option value="LowToHigh">Prix: croissant</option>
                        <option value="Newest">Articles les plus récents</option>
                        <option value="AscOrder">Trier par Nom: A à Z</option>
                        <option value="DescOrder">Trier par Nom: Z à A</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: getVisibleproducts(state.data, state.filters),
    filters: state.filters
})

export default connect(mapStateToProps, {filterSort})(FilterBar);