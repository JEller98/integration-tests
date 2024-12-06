import express from "express";

let num = 10;

const app = express();

app.get("/api/v1/products", (req, res) => {
    res.status(200).json({
        status: "success",
        data:
        [
            {id: 1, name: "Iphone"},
            {id: 2, name: "Car"}
        ]
    });
});

//etc...
app.get("/api/v1/users");

export default app;