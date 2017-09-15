import { createAction } from 'redux-actions';
import Web3 from 'web3';

export default {
  updateCategoriesList: createAction('CATALOG_UPDATE_CATEGORIES_LIST'),
  updateApplicationsList: createAction('CATALOG_UPDATE_APPLICATIONS_LIST'),
  loadCategories: (node,abi,address)=> {
      return async (dispatch) => {


          const web3 = new Web3();


          web3.setProvider(new web3.providers.HttpProvider(node));

          web3.eth.defaultAccount = web3.eth.accounts[0];
          const contract = web3.eth.contract(abi).at(address);
          const categoriesCount = contract.getCategoriesCount.call().toNumber();

          let categories = [];

          for (let i = 0; i < categoriesCount; i++) {
              let categoryDetails = contract.CategoriesList(i);

              let categoryEntry = {
                  name: categoryDetails[0],
                  parentCategory: categoryDetails[1].toNumber(),
                  visible: categoryDetails[2]
              };
              categories.push(categoryEntry);
          }
          dispatch({type:'CATALOG_UPDATE_CATEGORIES_LIST',data:categories});
      };
  },
  loadApplications: (node,abi,address)=> {
      return async (dispatch) => {


          const web3 = new Web3();
          web3.setProvider(new web3.providers.HttpProvider(node));
          web3.eth.defaultAccount = web3.eth.accounts[0];
          const contract = web3.eth.contract(abi).at(address);
          const applicationsCount = contract.getApplicationsCount.call().toNumber();

          let applications = [];

          for (let i = 0; i < applicationsCount; i++) {
              let applicationDetails = contract.ApplicationsList(i);
              let applicationEntry = {
                  developer: applicationDetails[0],
                  name: applicationDetails[1],
                  categoryId: applicationDetails[2].toNumber(),
                  platform: applicationDetails[3].toNumber(),
                  downloadUrl: applicationDetails[4],
                  description: applicationDetails[5],
                  imageUrl: applicationDetails[6],
              };
              applications.push(applicationEntry);
          }
          dispatch({type:'CATALOG_UPDATE_APPLICATIONS_LIST',data:applications});
      };
  }
};
