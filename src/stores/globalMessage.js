import { reactive } from "vue";

const state = reactive({
  visible: false,
  message: "",
});

export const showGlobalMessage = (message) => {
  state.message = message;
  state.visible = true;
};

export const hideGlobalMessage = () => {
  state.visible = false;
  state.message = "";
};

export const useGlobalMessage = () => state;
