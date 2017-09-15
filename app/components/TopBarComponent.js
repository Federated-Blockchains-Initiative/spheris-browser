import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import uiActions from '../actions/ui';
import {connect} from 'react-redux';

class TopBarComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="top-bar p1">
                <div className="row">
                    <div className="col-xs-6 cursor-pointer"
                         onClick={()=>{this.props.uiActions.clearFilters();}}
                    >
                        <img className="top-bar-logo" src="images/sphere.png"/>
                        <span className="top-bar-name">BROWSER</span>
                    </div>
                    <div className="col-xs-6 top-bar-info text-right">
                        Network: TEST-NET<br/>
                        Contract: {this.props.blockchain.catalogConfig.contractAddress}
                    </div>
                </div>
            </div>
        );
    }
}

TopBarComponent.defaultProps = {
    blockchain: {
        catalogConfig: {
            contractAddress: ''
        }
    }
};

TopBarComponent.propTypes = {
    // myProp: PropTypes.string.isRequired
};


function mapStateToProps(state) {
    return {
        blockchain: state.blockchain
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
)(TopBarComponent);