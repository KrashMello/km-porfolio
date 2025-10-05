import { defineStore } from "pinia";
export const useStateMachineStore = defineStore("stateMachine", {
  state: () => ({
    theme: "dark",
    lang: "es",
    data: {}
  }),
  actions: {
    changeLang(lang: string) {
      this.lang = lang;
      this.inizialiceLang()
    },
    async inizialiceLang() {
      let response = await fetch(`/${this.lang}.json`)
      response = await response.json()
      this.data = response
    },
    inizialiceTheme() {
      if (this.theme == "dark")
        document.documentElement.classList.add('dark')
    },
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle('dark')
    },
  },
  persist: true
});
