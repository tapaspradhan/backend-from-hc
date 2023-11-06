import express from "express";

const app=express()

app.get('/',(req,res)=>{
    res.send("We create a server")
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
          "id": "2eac2186-b14c-4792-ab4d-a0aae0293343",
          "name": "ashes",
          "joke": "When the window fell into the incinerator, it was a pane in the ash to retrieve."
        },
        {
          "id": "c526955f-9ef3-4fa1-b60f-3d378580d2e1",
          "name": "pirate's favorite letter",
          "joke": "What's a pirate's favorite letter? It be the Sea"
        },
        {
          "id": "4fd6156b-7c92-4923-bec1-81e81fb15a81",
          "name": "counting cows",
          "joke": "How do you count cows? A 'Cow'culator"
        },
        {
          "id": "651bc854-d416-4c28-9216-07784eaf9390",
          "name": "He's Alright",
          "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."
        },
        {
          "id": "22dea85e-3954-45dd-9425-d149089515ab",
          "name": "Bakery Fire",
          "joke": "My friend's bakery burned down last night. Now his business is toast."
        },
        {
          "id": "74bddcfd-b053-4f24-b989-883b7e83c03b",
          "name": "Nut Assault",
          "joke": "Two peanuts were walking down the street. One was a salted."
        },
    ]

    res.send(jokes)
})

const port = process.env.port || 3000

app.listen(port,()=>{
    console.log(`port running on ${port}`);
})