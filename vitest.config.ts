/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
    globals: true,
    environment: "jsdom",
  },
});
