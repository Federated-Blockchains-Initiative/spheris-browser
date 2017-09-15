import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppComponent from './AppComponent';

class AppListComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="app-list">
                {
                    this.props.applications.map((application,key)=>{

                        if ( this.props.categoryFilter > 0 && this.props.categoryFilter != application.categoryId ) return;
                        return (
                            <AppComponent
                                key={"application_"+ key}
                                application={application}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

AppListComponent.propTypes = {
    // myProp: PropTypes.string.isRequired
};

AppListComponent.defaultProps = {
    applications: {}
};


function mapStateToProps(state) {
    return {
        applications: state.catalog.applications,
        categoryFilter: state.ui.filters.category
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
)(AppListComponent);