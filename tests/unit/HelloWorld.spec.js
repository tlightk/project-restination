import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Resultbox from "@/components/Searchbox.vue";

describe("App.vue", () => {
  let appWrapper;
  beforeEach(() => {
    appWrapper = shallowMount(App, {
      computed: {
        currentNavIndex() {
          return 1;
        },
      },
    });
  });

  it("should contain 3 div element children", () => {
    const divs = appWrapper.findAll("div");
    expect(divs.length).to.equal(3);
  });
  it("should contain a search button", () => {
    const button = appWrapper.findAll("button");
    expect(button.length).to.equal(1);
  });
});

describe("Resultbox.vue", () => {
  let resultWrapper;
  beforeEach(() => {
    resultWrapper = shallowMount(Resultbox, {
      computed: {
        currentNavIndex() {
          return 1;
        },
      },
    });
  });

  it("should contain 2 div element children", () => {
    const divs = resultWrapper.findAll("div");
    expect(divs.length).to.equal(1);
  });
  it("should contain a header", () => {
    const header = resultWrapper.findAll("h1");
    expect(header.length).to.equal(0);
  });
});
