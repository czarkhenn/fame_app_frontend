/* eslint-disable no-unused-vars */
import backend from "@/backend";

const state = {
  persons: [],
  newperson: ''

  
};

const actions = {
  newPersonDialog({commit}, person_index) {
    commit("newPersonDialog", person_index)
  },
  async fetchPersons({ commit }) {
    const response = await backend.fetchResource();

    commit("setPersons", response.data);
  },
  async addPerson({ commit }, new_person) {
    const response = await backend.addPerson(new_person);

    commit("savePerson", response.data);
  },
  async deletePerson({ commit }, payload) {
    var p_id = payload.person_id
    var p_index = payload.person_index
    const response = await backend.deletePerson(p_id);
    commit("delPerson", p_index);
  },
  async updatePerson({ commit }, edited_person) {
    const person_id = edited_person.id;
    const response = await backend.updatePerson(person_id, edited_person);
    commit("updatePerson", response.data);
  }
};


const mutations = {
  newPersonDiag: (state, person_index) => (this.state.newperson = person_index),
  setPersons: (state, persons) => (state.persons = persons),
  savePerson: (state, new_person) => state.persons.push(new_person),
  delPerson: (state, person_index) =>
    (state.persons.splice(person_index, 1)),
  updatePerson: (state, edited_person) => {
    const index = state.persons.findIndex(
      person => person.id === edited_person.id
    );
    if (index !== -1) {
      state.persons.splice(index, 1, edited_person);
    }
  }
};

const getters = {
  getPersonIndex: state => state.newperson,
  allPersons: state => state.persons,
};

export default {
  state,
  getters,
  actions,
  mutations
};
