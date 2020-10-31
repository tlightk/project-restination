import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    markers: [],
    filteredLocations: [],
    ATMfilter: false,
    Wendysfilter: false,
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
    setATMfilter(state, currentState) {
      state.ATMfilter = currentState;
    },
    setWendysfilter(state, currentState) {
      state.Wendysfilter = currentState;
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
        let filteredLocations = locations.data;
        if (state.ATMfilter) {
          console.log("ATMfilter", state.ATMfilter);
          filteredLocations = locations.data.filter((location) => {
            return location.amenitiesAndServices.includes("ATM");
          });
        }
        if (state.Wendysfilter) {
          console.log("Wendysfilter", state.Wendysfilter);
          filteredLocations = locations.data.filter((location) => {
            return location.restaurants.includes("Wendy's");
          });
        }
        commit("setFilteredLocations", filteredLocations);
      } catch (err) {
        console.error(err);
      }
    },
    changeATMfilter({ state, commit }) {
      let currentState;
      if (state.ATMfilter) {
        currentState = false;
      } else {
        currentState = true;
      }
      commit("setATMfilter", currentState);
    },
    changeWendysfilter({ state, commit }) {
      let currentState;
      if (state.Wendysfilter) {
        currentState = false;
      } else {
        currentState = true;
      }
      commit("setWendysfilter", currentState);
    },
  },
});
