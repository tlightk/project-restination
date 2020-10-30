import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    markers: [],
    //ATMfilter: false
  },
  mutations: {
    setMarkers(state, markers) {
      state.markers = markers;
    },
    setLocations(state, locations) {
      state.locations = locations;
    },
  },
  actions: {
    async loadMarkers({ commit }) {
      try {
        const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        const markers = locations.map((location) => ({
          position: {
            lat: location.latitude,
            lng: location.longitude,
          },
          key: location.name,
          defaultAnimation: 2,
        }));
        console.log("MARKERS", markers);
        commit("setMarkers", markers);
      } catch (err) {
        console.error(err);
      }
    },
    async loadLocations({ commit }) {
      try {
        const locations = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        console.log("LOCATIONS", locations);
        commit("setLocations", locations);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
