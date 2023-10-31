import express  from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); 

//let data;


app.get("/", async (req, res) => {
 // try {
 //   const response = await axios.get("https://bored-api.appbrewery.com/random");
 //   const result = response.data;
 //   console.log(result);
    res.render("index.ejs");
 // } catch (error) {
 //   console.error("Failed to make request:", error.message);
 //   res.render("solution.ejs", {
    //  error: error.message,
 //   });
//  }
});


//app.get("/", async (req, res) => {
 //   try {

// app.get("/",async (req, res) => {
 // try{ 
 //   const result = await axios.get("https://api.adviceslip.com/advice");
 // res.render("index.ejs",{advice: result.data.advice});

//}catch (error) {
 // console.log(error.response.Data);
 // res.status(500);
//});
//});
//catch (error){
 // console.error("Failed to make request:",error.message);
  //    res.render("index.ejs",{
  //      error:"no activities that match your criteria.",
  //    });
  //  }
      //const result = response.data;
     // console.log(result);
    //  res.render("index.ejs", { advice: data });}
    //  catch (error) {
     //   console.error("Failed to make request:", error.message);
     //   res.render("index.ejs", {
     //     error: error.message,
   // });
//}
  //  });

    app.post("/submit", async (req, res) => {
      
    //  console.log(req.body);
     // const advice = req.body.advice;
//const slip = req.body.slip;
    

try {
  const response = await axios.get("https://api.adviceslip.com/advice");
  const result = response.data;
  console.log(result);
  res.render("index.ejs", { data: result });
}
     // const response = await axios.get(
     //  `https://api.adviceslip.com/slip=${slip}&advice=${advice}`
     //);
    
       //data: result[Math.floor(Math.random() * result.length)],
      //});
        catch (error){
      console.error("Failed to make request:",error.message);
         res.render("index.ejs",{
            error:"no activities that match your criteria.",
          });
        }
      });
    
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
      });