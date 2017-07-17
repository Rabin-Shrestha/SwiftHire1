var express = require('express');
var mongoose  = require('mongoose')

mongoose.connect('mongodb://admin1:admin1@ds161262.mlab.com:61262/swifthire', {useMongoClient : true})

let postSchema = new mongoose.Schema({
    title       :   String,
    description :   String,
    category    :   String,
    location    :   [String, String],
    duration    :   {value:   Number, unit: String},
    hourlyFee   :   Number,
    preferredDate:  Date,
    preferredTime:  Date,
    status      :   String,
    waitingList :   [
        {
            userName:  String,
            applicationDetails:     {
                summary     :   String,
                createdOn   :   Date
            },
            notification:   String
        }
    ],
    grantedTo   :   [
        {
            userName    :   String,
            deadline    :   Date,
            notification:   String
        }
    ],
    createdOn   :   Date
})

postSchema.statics.get = function(id=null){
    return new Promise((res, rej)=>{
    
        if (id === null){ 
            Post.find({}, function(err, data){
                if (err) rej(err)
                res(JSON.stringify(data))
            })
        } else {
            Post.find({_id : id}, function(err, data){
                if (err) rej(err)
                res(JSON.stringify(data))
            })
        }
    })
}

postSchema.methods.add = function() {
    this.save(function(err){
        if (err) throw err
        console.log("Successfully Added!")
    })
}
postSchema.methods.update = function() {
    Post.find({_id : this._id}, function(err, post){
        if(err) throw err
        console.log(post)
        post = this
        post.add()
    })
}
postSchema.methods.remove = function(id) {
    let p = Post.get(id)
    p.remove(function(err){
        if (err) throw err
    })
}

let Post = mongoose.model('Post', postSchema)

module.exports = Post;