const http = require('http')    //Pull in a useful node package                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port
const jokes = [
    "Knock, knock.  \nWho’s there?  \nCows go. \nCows go who? \nNo silly, cows go MOO!",
    "Knock, knock.  \nWho’s there?  \nLettuce.  \nLettuce who?  \nLettuce in, it’s cold out here!",
    "Knock, knock.  \nWho’s there?  \nBoo.  \nBoo hoo?  \nWhy are you crying?",
    "Knock, knock.  \nWho’s there?  \nIce cream.  \nIce cream who?  \nIce cream if you don’t let me in!",
    "Knock, knock.  \nWho’s there?  \nYah.  \nYah who?  \nNo, I prefer google.",
    "Knock, knock.  \nWho’s there?  \nTank.  \nTank who?  \nYou’re welcome!",
    "Knock, knock.  \nWho’s there?  \nSpell. \nSpell who? \nOkay, w-h-o.",
    "Knock, knock.  \nWho’s there?  \nLeaf.  \nLeaf who?  \nLeaf me alone!"
]
const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      console.log("Request recieved")
      console.log(req.url)

      if (req.method === 'GET' ) {
          res.statusCode = 200      //code for OK
          res.setHeader('Content-Type', 'text/plain')
          res.write(jokes[Math.floor(Math.random() * jokes.length)])
          res.end();
        
      } else {
        console.log("Status 404")
        res.statusCode = 404;
        res.end();
      }

    }                           
)
server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})