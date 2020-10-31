import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    markers: [],
    filteredLocations: [],
    ATMfilter: true,
  },
  mutations: {
    setMarkers(state, markers) {
      state.markers = markers;
    },
    setLocations(state, locations) {
      state.locations = locations;
    },
    setFilteredLocations(state, filteredLocations) {
      state.filteredLocations = filteredLocations;
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
    async filterLocations({ state, commit }) {
      try {
        const locations = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        let filteredLocations;
        if (state.ATMfilter) {
          console.log("ATMfilter", state.ATMfilter)
          filteredLocations = locations.data.filter(location => {
                return location.amenitiesAndServices.includes("ATM")})
        }
        commit("setFilteredLocations", filteredLocations);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
