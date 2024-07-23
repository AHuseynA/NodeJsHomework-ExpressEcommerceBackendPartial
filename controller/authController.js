const User = require("/models/User");
const { tokenUtil } = require("utils/tokenUtils");

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw "email and password doesnt exist"
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw "User Doesnt exist"
    }
    const correctPassword = await user.comparePassword(password);

    if (!correctPassword) {
        throw "Wrong Password"
    }

    const userToken = tokenUtil(user);

    res
        .status(StatusCodes.OK)
        .json({ user: userToken, msg: "Login successful!" });
};

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw "email already exists"
    }

    const user = await User.create({ name, email, password, role });
    const userToken = tokenUtil(user);
    res.status(StatusCodes.CREATED).json({ user: userToken });
};

module.exports = {
    register,
    login,
};