import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Hello from "../../src/components/HelloWorld.vue";



describe("import vue components", () => {
  test("mounted component", async () => {
    expect(Hello).toBeTruthy();
    const wrapper = mount(Hello, {
      props: {
        msg: "123",
      },
    });
    expect(wrapper.text()).toBe("1230click");
    expect(wrapper.html()).matchSnapshot();
    await wrapper.get("button").trigger("click");
    expect(wrapper.text()).toBe("1231click");
    await wrapper.get("button").trigger("click");
    await wrapper.get("button").trigger("click");
    expect(wrapper.text()).toBe("1233click");
  });
});
