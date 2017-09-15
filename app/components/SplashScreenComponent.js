import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SplashScreenComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <div className="splash-screen row middle-xs">
                <div className="col-xs-12 text-center">
                    <div className="px1">
                        <img className="splash-screen-fade-in" src="images/logo_white.png"/>
                    </div>
                    <div className="mt-40">
                        <div>
                            <h4 className="type-dosis splash-screen-fade-in-wait">CONNECTING TO BLOCKCHAIN</h4>
                        </div>
                        <div className="my2">
                            <span className="type-dosis splash-screen-fade-in">{this.props.blockchain.catalogConfig.contractAddress && <span className="type-dosis text-muted">ABI LOADED</span>}</span>
                        </div>
                        <div>
                            <span className="type-dosis splash-screen-fade-in text-muted">CONTRACT ADDRESS:
                            </span>
                        </div>
                        <div>
                            <span className="type-dosis splash-screen-fade-in text-muted">
                                { this.props.blockchain.catalogConfig.contractAddress &&
                                    this.props.blockchain.catalogConfig.contractAddress }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SplashScreenComponent.propTypes = {
    // myProp: PropTypes.string.isRequired
};

SplashScreenComponent.defaultProps = {
    blockchain: {
        catalogConfig: {
            contractAddress: '',
            abi: ''
        }
    }
};


function mapStateToProps(state) {
    return {
        blockchain: state.blockchain
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
)(SplashScreenComponent);