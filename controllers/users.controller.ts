import usersModel from "../models/users.model";

const usersController = {

  getById: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    const user = usersModel.getById();
    // SEND RESPONSE
  },

  create: async function () {
    // CODE PARSING REQUEST BODY
    // MAYBE VALIDATION?
    const newUser = usersModel.create();
    // SEND RESPONSE
  },

  update: async function () {
    // CODE PARSING REQUEST PARAMS AND BODY
    // MAYBE VALIDATION?
    const updatedUser = usersModel.update();
    // SEND RESPONSE
  }
}

export default usersController;