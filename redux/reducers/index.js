"use client";
import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,addTocartReducer,myorderreducer, myorderdetailreducer,allvariantreducer} from "./reducers";

const reducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    cart : addTocartReducer,
    feorder :myorderreducer,
    fetchorderdetails : myorderdetailreducer,
    fetchallvarints : allvariantreducer
})

export default reducers