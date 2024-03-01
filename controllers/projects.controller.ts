import projectsModel from "../models/projects.model";

const projectsController = {

  getById: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    const project = projectsModel.getById();
    // SEND RESPONSE
  },

  create: async function () {
    // CODE PARSING REQUEST BODY
    // MAYBE VALIDATION?
    const newProject = projectsModel.create();
    // SEND RESPONSE
  },

  update: async function () {
    // CODE PARSING REQUEST PARAMS AND BODY
    // MAYBE VALIDATION?
    const updatedProject = projectsModel.update();
    // SEND RESPONSE
  },

  delete: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    projectsModel.delete();
    // SEND RESPONSE
  },

  getByUserId: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    const entries = projectsModel.getByUserId();
    // SEND RESPONSE
  }
}

export default projectsController;