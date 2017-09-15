import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import uiActions from '../actions/ui';
import blockchainActions from '../actions/blockchain';
import SplashScreenComponent from '../components/SplashScreenComponent';
import TopBarComponent from '../components/TopBarComponent';
import CategoriesComponent from '../components/CategoriesComponent';
import AppListComponent from '../components/AppListComponent';
import {connect} from 'react-redux';
import {SPHERIS_CATALOG_CONFIG_URL} from '../constants/Config';

class MainPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.props.blockchainActions.fetchConfig(SPHERIS_CATALOG_CONFIG_URL);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.props.uiActions.splashOpen();
        setTimeout(function() { this.props.uiActions.splashClose(); }.bind(this), 10000);

    }

    render() {
        return (
            <div>
                { this.props.ui.splash.open && <SplashScreenComponent/> }

                <TopBarComponent/>
                <div className="row">
                    <div className="col-xs-5 col-sm-4 col-md-4 col-lg-3">
                        <CategoriesComponent/>
                    </div>
                    <div className="col-xs-7 col-sm-8 col-md-8 col-lg-9 p1">
                        <AppListComponent/>
                    </div>
                </div>
            </div>
        );
    }
}

MainPage.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        ui: state.ui
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch),
        blockchainActions: bindActionCreators(blockchainActions, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);