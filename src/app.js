import express from "express";

const app = express();

app.get("/api/v2/products", (req, res) => {
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