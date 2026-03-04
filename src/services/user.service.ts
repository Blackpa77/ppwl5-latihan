import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userService = {
  getAll() {
    return userRepository.findAll().map(u => new UserModel(u));
  },

  delete(id: number) {
    userRepository.delete(id);
  }
};
