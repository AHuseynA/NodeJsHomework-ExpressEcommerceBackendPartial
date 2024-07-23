const { Create } = require("jsonwebtoken");

const tokenUtil = (user) => {
    const userID = user._id.toString();
    const userToken = Create({ userId: userID, role: user.role });

    return {
        name: user.name,
        id: userID,
        token: userToken,
    };
};

module.exports = tokenUtil;