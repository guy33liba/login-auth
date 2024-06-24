import User from "./user.model.js"

const loginUser = (req, res) => {
  res.json({ mssg: "login user" })
}
const signupUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.signup(email, password)
  } catch (error) {}

  res.json({ mssg: "signup user" })
}
export default { signupUser, loginUser }
