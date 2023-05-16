const mongoose_delete = require('mongoose-delete')
const mongoose=require("mongoose")


const Schema=mongoose.Schema

const expenseSchema=new Schema({
    name:{
      type:String,
      required:true
    },
    amount:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:true
        
    },
    categoryId:{
        type:String,
        required:true,
     
    },
    date:{
        type: String,
        required:true,
    },
    invoice:{
        type:String
    }
   

},{timestamps:true})


expenseSchema.plugin(mongoose_delete,{overrideMethods:true})

const ExpenseData=mongoose.model('ExpenseData',expenseSchema)

module.exports=ExpenseData