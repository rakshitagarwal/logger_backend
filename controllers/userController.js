const {
  addUserService,
  findUserService,
  userLoginService,
} = require("../services/userService");

const addUser = async (req, res) => {
  const user = await addUserService(req.body);
  return res.status(user.code).json(user);
};

const findUser = async (req, res) => {
  const user = await findUserService({ userId: req.params.id });
  return res.status(user.code).json(user);
};
const login = async (req, res) => {
  console.log(req.body);
  const user = await userLoginService(req.body);
  return res.status(user.code).json(user);
};

module.exports = { addUser, findUser, login };
