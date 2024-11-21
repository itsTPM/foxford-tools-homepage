import { ViteSSG } from "vite-ssg/single-page";
import "./global.css";
import App from "./App.vue";

export const createApp = ViteSSG(App);
