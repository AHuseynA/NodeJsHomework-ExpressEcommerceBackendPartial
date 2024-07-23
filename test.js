const express = require("express");
const app = express();
const authRouter = require("/Routes/authRoute");
const userRouter = require("/Routes/userRoutes");
const orderRouter = require("/Routes/orderRoute");


app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const port = process.env.PORT || 5000;
const start = async () => {
    try {
        mongoose.connect('mongodb://localhost/homework')
            .then(() => console.log('Connected to MongoDB'))
            .catch(err => console.error('errpr connecting to MongoDB:', err));

        app.listen(port, () =>
            console.log(`server listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();