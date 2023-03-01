const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("hello"));
app.get("/",function(req,res){
	res.sendFile(__dirname+"/signup.html");
});
app.post("/",function (req,res) {
	const fname=req.body.fname;
	const lname=req.body.lname;
	const email=req.body.email;
	const data={
		members:[
             {
             	email_address:email,
             	status:"subscribed",
             	merge_fields:{
             		FNAME:fname,
             		LNAME:lname
             	}
             }
			]
	};
	const jsonData=JSON.stringify(data);
	const url="apikeyurl_to_access"
   const options={
   	method:"POST",
   	auth:"apikey"
   }
   const request=https.request(url,options,function(response){
   	if(response.statusCode===200){
   		res.send("Success");
   	}else {
   		res.send("not success");
   	}
      response.on("data",function(data){
      	console.log(JSON.parse(data));
      })
   })
   request.write(jsonData);
   request.end()
});
app.listen(4000,function(){
	console.log("The server is started");
});

// apikey
// 202ce00abc9179821b37703bf6d4713c-us13
// listid
// 8ec9ab551d
