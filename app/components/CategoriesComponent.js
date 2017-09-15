import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import uiActions from '../actions/ui';
import {connect} from 'react-redux';

class CategoriesComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="categories">
                <h1 className="category-header">Categories</h1>
                {
                    this.props.categories.length > 0 && this.props.categories.map((category,key)=>{
                        if( category.visible ) {
                            return (
                                <div
                                    key={"category_" + key}
                                    className="category-title"
                                    onClick={()=>{this.props.uiActions.setCategoryFilter(key);}}
                                >{category.name}</div>
                            )
                        }
                    })
                }
            </div>
        );
    }
}

CategoriesComponent.propTypes = {
    // myProp: PropTypes.string.isRequired
};
CategoriesComponent.defaultProps = {
    categories: {}
};


function mapStateToProps(state) {
    return {
        categories: state.catalog.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesComponent);