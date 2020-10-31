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
    wififilter: false,
    Arbysfilter: false,
    Wendysfilter: false,
    Subwayfilter: false,
    oilChangefilter: false,
    lightMechanicalfilter: false,
    tirePassfilter: false,
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
    resetFilteredLocations(state, filteredLocations) {
      state.filteredLocations = filteredLocations;
    },
    setATMfilter(state, currentState) {
      state.ATMfilter = currentState;
    },
    setWififilter(state, currentState) {
      state.wififilter = currentState;
    },
    setWendysfilter(state, currentState) {
      state.Wendysfilter = currentState;
    },
    setArbysfilter(state, currentState) {
      state.Arbysfilter = currentState;
    },
    setSubwayfilter(state, currentState) {
      state.Subwayfilter = currentState;
    },
    setOilChangefilter(state, currentState) {
      state.oilChangefilter = currentState;
    },
    setLightMechanicalfilter(state, currentState) {
      state.lightMechanicalfilter = currentState;
    },
    setTirePassfilter(state, currentState) {
      state.tirePassfilter = currentState;
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
    filterMarkers({ commit, state }) {
      const markers = state.filteredLocations.map((location) => ({
        position: {
          lat: location.latitude,
          lng: location.longitude,
        },
        key: location.name,
        defaultAnimation: 2,
      }));
      console.log("FILTERED MARKERS", markers);
      commit("setMarkers", markers);
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
          filteredLocations = filteredLocations.filter((location) => {
            return location.amenitiesAndServices.includes("ATM");
          });
        }
        if (state.wififilter) {
          console.log("wififilter", state.wififilter);
          filteredLocations = filteredLocations.filter((location) => {
            return location.amenitiesAndServices.includes("WirelessInternet");
          });
        }
        if (state.Arbysfilter) {
          console.log("Arbysfilter", state.Arbysfilter);
          filteredLocations = filteredLocations.filter((location) => {
            return location.restaurants.includes("Arby's");
          });
        }
        if (state.Wendysfilter) {
          console.log("Wendysfilter", state.Wendysfilter);
          filteredLocations = filteredLocations.filter((location) => {
            return location.restaurants.includes("Wendy's");
          });
        }
        if (state.Subwayfilter) {
          console.log("Subwayfilter", state.Wendysfilter);
          filteredLocations = filteredLocations.filter((location) => {
            return location.restaurants.includes("Subway");
          });
        }
        if (state.oilChangefilter) {
          console.log("oilChangefilter", state.oilChangefilter);
          filteredLocations = filteredLocations.filter((location) => {
            return location.amenitiesAndServices.includes("Oil Cha");
          });
        }
        if (state.lightMechanicalfilter) {
          console.log("lightMechanicalfilter", state.lightMechanicalfilter);
          filteredLocations = filteredLocations.filter((location) => {
            return location.amenitiesAndServices.includes("LightMechanical");
          });
        }
        if (state.tirePassfilter) {
          console.log("tirePassfilter", state.tirePassfilter);
          filteredLocations = filteredLocations.filter((location) => {
            return location.amenitiesAndServices.includes("TirePass");
          });
        }
        console.log("filtered locations: ", filteredLocations);
        commit("setFilteredLocations", filteredLocations);
      } catch (err) {
        console.error(err);
      }
    },
    async changeFilteredLocations({ commit }) {
      try {
        const locations = await axios.get("/api/locations");
        console.log("Filtered locations reset!");
        commit("resetFilteredLocations", locations);
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
    changeWififilter({ state, commit }) {
      let currentState;
      if (state.wififilter) {
        currentState = false;
      } else {
        currentState = true;
      }
      commit("setWififilter", currentState);
    },
    changeArbysfilter({ state, commit }) {
      let currentState;
      if (state.Arbysfilter) {
        currentState = false;
      } else {
        currentState = true;
      }
      commit("setArbysfilter", currentState);
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
    changeSubwayfilter({ state, commit }) {
      let currentState;
      if (state.Subwayfilter) {
        currentState = false;
      } else {
        currentState = true;
      }
      commit("setSubwayfilter", currentState);
    },
    changeOilChangefilter({ state, commit }) {
      let currentState;
      if (state.oilChangefilter) {
        currentState = false;
      } else {
        currentState = true;
      }
      commit("setOilChangefilter", currentState);
    },
    changeLightMechanicalfilter({ state, commit }) {
      let currentState;
      if (state.lightMechanicalfilter) {
        currentState = false;
      } else {
        currentState = true;
      }
      commit("setLightMechanicalfilter", currentState);
    },
    changeTirePassfilter({ state, commit }) {
      let currentState;
      if (state.tirePassfilter) {
        currentState = false;
      } else {
        currentState = true;
      }
      commit("setTirePassfilter", currentState);
    },
  },
});
