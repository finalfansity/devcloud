const state = {
  sidebar: {
    opened: true,
  },
  size: "medium",
  system: "dashboard",
};
// 补充
const mutations = {
  // ...
  SET_SYSTEM: (state, system) => {
    state.system = system;
  },
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened;
  },
  CLOSE_SIDEBAR: (state) => {
    state.sidebar.opened = false;
  },
  SET_SIZE: (state, size) => {
    state.size = size;
  },
};

const actions = {
  // ...
  setSystem({ commit }, system) {
    commit("SET_SYSTEM", system);
  },
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit("CLOSE_SIDEBAR", withoutAnimation);
  },
  setSize({ commit }, size) {
    commit("SET_SIZE", size);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
