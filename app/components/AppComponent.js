import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class AppComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const style = {
            backgroundImage: 'url('+ this.props.application.imageUrl +')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top-center',
        };

        let applicationCategory;

        if( this.props.application.categoryId && this.props.categories && this.props.categories[this.props.application.categoryId] ) {
            applicationCategory = this.props.categories[this.props.application.categoryId];
        }

        return (
            <div className="app row">
                <div className="col-xs-2" style={style}/>
                <div className="col-xs-10 col-sm-6 col-md-7 p1 bg-color-grey">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="app-title">{this.props.application.name}</div>
                        </div>
                        <div className="col-xs-12">
                            { (applicationCategory && applicationCategory.name) && <span className="app-category">In: {applicationCategory.name}</span> }
                        </div>
                        <div className="col-xs-12">
                            <div className="app-description">{this.props.application.description}</div>
                        </div>
                        <div className="col-xs-12">
                            <div>
                                <i className="fa fa-star text-gold"/>
                                <i className="fa fa-star text-gold"/>
                                <i className="fa fa-star text-gold"/>
                                <i className="fa fa-star text-gold"/>
                                <i className="fa fa-star text-gold"/>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            { this.props.application.platform === 0 && <div>Windows <i className="fa fa-windows"/></div> }
                            { this.props.application.platform === 1 && <div>Linux <i className="fa fa-linux"/></div> }
                            { this.props.application.platform === 2 && <div>Android <i className="fa fa-android"/></div> }
                            { this.props.application.platform === 3 && <div>macOS <i className="fa fa-apple"/></div> }
                        </div>
                        <div className="col-xs-12">
                            <span className="developer-address">Developer: { this.props.application.developer }</span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-3 p1 bg-color-grey">
                    <div className="app-download-button">
                        <a href={this.props.application.downloadUrl}><i className="fa fa-download"/> Download</a>
                    </div>
                </div>
            </div>
        );
    }
}

AppComponent.propTypes = {
    // myProp: PropTypes.string.isRequired
};

AppComponent.defaultProps = {
    categories: {}
};

function mapStateToProps(state) {
    return {
        categories: state.catalog.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(myActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);