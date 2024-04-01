var users = [
  {
    name: "jhon",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

const express = require("express");
const app = express();

app.use(express.json())

app.get("/", function (req, res) {
  const jhonKidneys = users[0].kidneys;
  const numberOfKidneys = jhonKidneys.length;

  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < jhonKidneys.length; i++) {
    if (jhonKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    jhonKidneys,
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;

  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "done!",
  });
});

//----------***-----------
// const express = require("express");
// const app = express();

// app.use(express.json())

// app.get("/",function(req,res){
//     let jhonKidneys = users[0].kidneys
//     //console.log(kidneys)
//     let numberOfKidneys = jhonKidneys.length;

//     let numberOfHealthyKidneys = 0;

//     for(let i=0; i<jhonKidneys.length; i++){
//         if(jhonKidneys[i].healthy){
//             numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
//         }
//     }

//     let numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnHealthyKidneys
//     })
// })

// //adding a kidney to system;
// app.post("/",function(req,res){

//     const isHealthy = req.body.isHealthy;

//     users[0].kidneys.push({
//         healthy:isHealthy
//     })
//     res.json({
//         msg:'done!'
//     })
// })

// app.put("/",function(req,res){
//     for(let i=0; i<users[0].kidneys.length; i++){
//         users[0].kidneys[i].healthy = true;
//     }
//     res.json({})
// })

// app.delete("/",function(req,res){
//     const newKidneys = [];

//     for(let i=0; i<users[0].kidneys.length; i++){
//         if(users[0].kidneys[i].length){
//             newKidneys.push({
//                 healthy:true
//             })
//         }
//     }
//     users[0].kidneys = newKidneys
//     res.json({
//         msg:"done!"
//     })
// })

app.listen(3000);
