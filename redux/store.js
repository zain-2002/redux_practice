const { configureStore } = require("@reduxjs/toolkit");
import cartreducer from "./cartslice"
const store=configureStore({

    reducer:{
        data:cartreducer
    }
})
export default store;