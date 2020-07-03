/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarr�a
 * Github: @josechavarriacr
 */
import { Router } from "express";
import SubCategoryController from "../controllers/SubCategoryController";
const { findAll, findOne, create, update, remove } = SubCategoryController;
const routerSubCategory = Router();

// /api/subcategories
routerSubCategory.route('/')
.get(findAll)
.post(create)

// api/subcategories:id
routerSubCategory.route('/:id')
.get(findOne)
.put(update)
.delete(remove)

export default routerSubCategory;