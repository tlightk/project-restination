import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
// import Searchbox from "@/components/Searchbox.vue";
// import Locations from "@/components/Locations.vue";
// import Services from "@/components/Services.vue";
// import Amenities from "@/components/Amenities.vue";
// import Restaurants from "@/components/Restaurants.vue";

describe("App.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App, {
      computed: {
        currentNavIndex() {
          return 1;
        },
      },
    });
  });

  it("should contain 3 div element children", () => {
    const divs = wrapper.findAll("div");
    expect(divs.length).to.equal(3);
  });
});

// //expect(vm.$el.querySelector('.title').textContent)
// .toBe('todos');
// expect(vm.$el.querySelector('.new-todo').placeholder)
//   .toBe('What needs to be done?');
