const {Schema,model}=require('mongoose');
const ProductionSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    
description:{
    type:String,
    required:true
},
salelingPrice:{
    type:Number,
    required:false
},
purchasingPrice:{
    type:String,
    required:false
},
image:{
    type:String,
    require:false
}

})
module.exports=model('Production',ProductionSchema,"production");