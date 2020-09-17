import firebaseAPI from '../../firebase';

const user = {
  state: {
    currentUser: null,
    // currentUserBilling: {
    //   name: '',
    //   surname: '',
    //   company: '',
    //   address: '',
    //   apartment: '',
    //   city: '',
    //   state: '',
    //   zip: '',
    //   phone: '',
    //   email: '',
    // },
    // currentUserShipping: {
    //   name: '',
    //   surname: '',
    //   company: '',
    //   address: '',
    //   apartment: '',
    //   city: '',
    //   state: '',
    //   zip: '',
    //   phone: '',
    //   email: '',
    // },
  },
  mutations: {
    updateCurrentUser: function(state, user) {
      state.currentUser = user;
    },
    // updateCurrentUserShippingAddress: function(state, shippingAddress) {
    //   state.currentUserShipping = shippingAddress;
    // },
    // updateCurrentUserBillingAddress: function(state, billingAddress) {
    //   state.currentUserBilling = billingAddress;
    // },
  },
  actions: {
    fetchCurrentUser: async function({ commit }) {
      try {
        return await new Promise((resolve) => {
          firebaseAPI.auth().onAuthStateChanged(function(user) {
            commit(
              'updateCurrentUser',
              user === null
                ? null
                : {
                    id: user.uid,
                    email: user.email,
                  }
            );
            resolve();
          });
        });
      } catch (error) {
        console.log('When we trying get user data catch some error.');
      }
    },
    fetchCurrentUserBillingAddress: async function({ commit }) {
      try {
        return await new Promise((resolve) => {
          firebaseAPI
            .database()
            .ref(`/users/${localStorage.getItem('id')}/billing`)
            .on('value', (snapshot) => {
              commit('updateCurrentUserBillingAddress', snapshot.val());
            });
          resolve();
        });
      } catch (error) {
        console.log('When we trying get user data catch some error.');
      }
    },
    fetchCurrentUserShippingAddress: async function({ commit }) {
      try {
        return await new Promise((resolve) => {
          firebaseAPI
            .database()
            .ref(`/users/${localStorage.getItem('id')}/shipping`)
            .on('value', (snapshot) => {
              commit('updateCurrentUserShippingAddress', snapshot.val());
            });
          resolve();
        });
      } catch (error) {
        console.log('When we trying get user data catch some error.');
      }
    },
  },
  getters: {
    user: (state) => state.currentUser,
    userBilling: (state) => state.currentUserBilling,
    userShipping: (state) => state.currentUserShipping,
  },
};

export default user;
