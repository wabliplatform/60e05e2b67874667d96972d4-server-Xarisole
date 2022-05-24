
const { ProjectProjectImageSchema } =require('./ProjectProjectImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


projectTitle:String , 


projectImage:  
ProjectProjectImageSchema
 



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

