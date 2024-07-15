import { UserRepository } from "../respository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signin(data) {
    try {
      const { email, password } = data;
      const user = await this.getUserByEmail(email);
      if (!user) {
        throw {
          success: false,
          message: "User not found",
        };
      }
      if (!user.comparePassword(password)) {
        throw {
          success: false,
          message: "Invalid email or password",
        };
      }
      const token = await user.genJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
