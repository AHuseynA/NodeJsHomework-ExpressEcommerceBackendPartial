const jwt = require("jsonwebtoken");

const Create = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1 day",
    });

    return token;
};

const isValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
    Create,
    isValid,
};