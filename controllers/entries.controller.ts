import entriesModel from "../models/entries.model";

const entriesController = {

  getById: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    const entry = entriesModel.getById();
    // SEND RESPONSE
  },

  create: async function () {
    // CODE PARSING REQUEST BODY
    // MAYBE VALIDATION?
    const newEntry = entriesModel.create();
    // SEND RESPONSE
  },

  update: async function () {
    // CODE PARSING REQUEST PARAMS AND BODY
    // MAYBE VALIDATION?
    const updatedEntry = entriesModel.update();
    // SEND RESPONSE
  },

  delete: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    entriesModel.delete();
    // SEND RESPONSE
  },

  getByProjectId: async function () {
    // CODE PARSING REQUEST PARAMS
    // MAYBE VALIDATION?
    const entries = entriesModel.getByProjectId();
    // SEND RESPONSE
  }
}

export default entriesController;