// const fs = require('fs');
//文件读写
// fs.writeFile('./log.txt','hello Node!',(err,data)=>{
//     if(err){

//     }else{
//         console.log('OK!')
//     }
// })
// console.log(process.argv)

//http



const request = require('request');
var token;
const express=require('express');
var app=express();

request({
  url: 'https://aip.baidubce.com/oauth/2.0/token',
  method: "POST",
  headers: {
      "Content-Type": "application/x-www-form-urlencoded",
  },
  body:new URLSearchParams( {'grant_type':'client_credentials',
  'client_id':'LelwGgly4284Y9NfRmbG2Gzu',
  'client_secret':'gkfG3oLvnGqKvyVLPFnMVBGIfSu8xSLW'
  }).toString()
}, function(error, response, body) {
  token = JSON.parse(body).access_token
});


app.all('*', function (req, res, next) {
  // 解决跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
  next();
  }
 });

app.post('/',function(req,res){
	req.on('data',function(data){
		var obj=JSON.parse(data);

    request({
      url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token='+token,
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
      body:new URLSearchParams( {
        'image': obj.base64
      }).toString()
    }, function(error, response, body) {
      res.send(body);
    });
	})
})
app.listen(3000,()=>{console.log('3000服务器已启动')});