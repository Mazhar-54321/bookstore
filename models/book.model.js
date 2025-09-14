import {Schema,model} from 'mongoose';
const bookSchema = new Schema({
    title:{
        type:String,
        required:true,
        
    },
    author:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    inStock:{
        type:Boolean,
        default:true,
    }
    
});
export default model('Book',bookSchema);