const language = {
  state: {
    currentLang: 'en-US',
  },
  mutations: {
    setEng(state) {
      state.currentLang = 'en-US';
    },
    setRus(state) {
      state.currentLang = 'ru-RU';
    },
  },
  actions: {},
  getters: {
    getCurrentLang: (state) => state.currentLang,
  },
};

export default language;
