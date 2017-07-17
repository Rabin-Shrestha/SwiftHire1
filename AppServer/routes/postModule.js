var express = require('express');
var path = require('path');
var router = express.Router();
var appRootDir = require('app-root-dir').get();

//requiring the dataservice
var Post = require(path.join(appRootDir, '/service/postdbservice'));

//get all posts
router.get('/', function (req, res, next) {
    let data = Post.get();
    data.then(data => res.json(data)).catch(err => res.json(err));
});

// //get single user posts 
// router.get('/:userid', function (req, res, next) {
//     console.log("Inside user id");
//     let userId = req.param('userid');
//     let fetchString = { "grantedTo.userName": userId }
//     let data = Post.get(fetchString);
//     data.then(data => res.json(data)).catch(err => res.json(err));
// });


//Add new post route
router.get('/addnewpost', (req, res) => {
    console.log("Inside Add component");
    let postObject = new Post(addNewPost(req));
    let result = postObject.add();
    result.then(msg =>{
        console.log(msg);
        res.send({status:true});
    }).catch(err => res.send(err));
})


//search for post based on title,location and fees
router.get('/search', (req, res, next) => {
    let fetchString = { 'title': req.params.title, 'location': req.params.location, 'fees': req.params.minimunFees };
    let data = dataService.get(title, location, fees);
    data.then(data => res.json(data)).catch(err => res.json({ status: false }))

})

//update post 
router.get('update', function (request, response) {

    let postId = request.params.postId;
    dataService.update(postId);
    if (true) {
        res.json({ status: "success" });
    }
})

//delete a post 
router.get('delete', function (request, response) {

    let postId = request.params.postId;
    dataService.delet(postId);
    if (true) {
        res.json({ 'status': true });
    }
})


//add new post to the database function
function addNewPost(request) {
    let bodyData = request.body;
    // return data = {
    //     'title': bodyData.name,
    //     'description': bodyData.description,
    //     'category': bodyData.catagory,
    //     'duration': {
    //         'value': bodyData.durationValue,
    //         'unit': bodyData.durationUnit
    //     },
    //     'preferedTime': bodyData.preferedTime,
    //     'hourlyFee': bodyData.hourlyFee,
    //     'createdOn': bodyData.createdOn
    // }
let data = {
    'title': "bodyData.name",
    'description': "bodyData.description",
    'category': "bodyData.catagory",
    'duration': {
        'value': 7,
        'unit': "month"
    },
    'preferedTime': "bodyData.preferedTime",
    'hourlyFee':100,
    'createdOn': Date.now()
}

return data;

}

module.exports = router;

