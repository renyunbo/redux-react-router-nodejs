const express = require('express');
const mongoose = require('mongoose');

//链接mongo 并且会使用imooc这个集合，若果没有回创建
const DB_RUL = 'mongodb://127.0.0.1:27017/admin';
mongoose.connect(DB_RUL);
mongoose.connection.on('connected',function(){
    console.log('mongo connect success');
});
//类似于MySQL的表，mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,required:true},
    age:{type:Number,required:true}
}));
//创建一条数据
// User.create({
//     user:'xiaohua',
//     age:10
// },function(err,doc){
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// });
// User.update({'user':'xiaohua'},{'$set':{age:26}},function(err,doc){
//     console.log(doc);
// });

// User.remove({_id:'5d12d7ce7d24d5163c9afeab'},function(err,doc){
//     console.log(doc);
// });
//新建app
const app = express();

app.get('/',function(req,res){
    res.send('<h1>this is a test</h1>');
});

app.get('/data',function(req,res){
    // User.find({},function(err,doc){
    //     res.json(doc);
    // });
    User.findOne({},function(err,doc){
        res.json(doc);
    })

    // res.json({name:'imooc a',type:'IT'});
})

app.listen(9093,function(){
    console.log('Node app start at port 9093');
});