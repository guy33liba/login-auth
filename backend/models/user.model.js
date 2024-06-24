import mongoose, { mongo } from "mongoose"
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "users" },
)
userSchema.statics.signUp = async (email, password) => {
  const exist = await this.findOne({ email, password: hash })
  if (exist) {
    throw Error("Email already exists")
  }
  const salt = await bcrypt.genSalt(12)
  const hash = bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })
  return user
}
const User = mongoose.model("User", userSchema)
export default User
