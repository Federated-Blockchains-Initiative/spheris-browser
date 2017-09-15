import { createAction } from 'redux-actions';
import catalogActions from './catalog';
import {ETHEREUM_NODE} from '../constants/Config';
import {NETWORK_ID} from '../constants/Config';

export default {
  setContractData: createAction('BLOCKCHAIN_SET_CONTRACT_DATA'),
  fetchConfig: (configUrl)=> {
      return async (dispatch, getState) => {
          fetch(configUrl)
              .then((response) => response.json())
              .then((responseJson) => {
                  dispatch({type:'BLOCKCHAIN_SET_CONTRACT_DATA',data:{
                      address:responseJson.networks[NETWORK_ID].address,
                      abi:responseJson.abi
                  }});

                  dispatch(catalogActions.loadCategories(ETHEREUM_NODE,responseJson.abi,responseJson.networks[NETWORK_ID].address));
                  dispatch(catalogActions.loadApplications(ETHEREUM_NODE,responseJson.abi,responseJson.networks[NETWORK_ID].address));
              })
              .catch((error) => {
                  console.error(error);
              });
      };
  }
};
