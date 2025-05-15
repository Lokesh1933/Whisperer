// HINTS:
// 1. Import express and axios
import express from express
import axios from axios
import dotenv from dotenv
dotenv.config()
const API_URL = process.env.API_URI

// 2. Create an express app and set the port number.
const app = express()

// 3. Use the public folder for static files.
app.use(express.static('public'))

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",async (req,res) => {
    // 5. Use axios to get a random secret and pass it to index.ejs to display the
    // secret and the username of the secret.
    try {
        const result = await axios.get(API_URL)
        // res.render("index.ejs",{
        //     secret: result.data.secret,
        //     username: result.data.username
        // })
        console.log(result.data)
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})


// 6. Listen on your predefined port and start the server.
