/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarr�a
 * Github: @josechavarriacr
 */
import Controller from  './Controller';
import SubCategoryService from  "./../services/CategoryService";
import SubCategory from  "./../models/Category";

const subCategoryService = new SubCategoryService(
  new SubCategory().getInstance()
);

class SubCategoryController extends Controller {
  constructor(service) {
    super(service);
  }
  
}

export default new SubCategoryController(subCategoryService);
