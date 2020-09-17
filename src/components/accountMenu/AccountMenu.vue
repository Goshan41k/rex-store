<template>
  <div @click.stop class="account-menu-overlay">
    <div class="account-menu-container">
      <div class="account-menu-left">
        <img :src="logotypeIcon" alt="#" class="account-menu-left-logo" />
      </div>

      <div class="account-vertical-line"></div>
      <div v-if="user === null" class="account-menu-right">
        <img :src="usersIcon" alt="#" class="account-users" />
        <p class="account-paragraph">
          {{this.isRegistration ?
          'Get registered to start shopping! Do you already have an account?' :
          'Welcome back! Log in to your account to view tasks. Have no account? Let\'s'}}
          <span
            @click="switchRegistrationForm"
            v-if="!isRegistration"
            class="account-paragraph-switch"
          >{{'registerSpan' | localize}}</span>
          <span
            @click="switchRegistrationForm"
            v-if="isRegistration"
            class="account-paragraph-switch"
          >{{'authSpan' | localize}}</span>
        </p>
        <div class="input-overlay">
          <input v-model="email" type="email" class="account-input" placeholder="email" />
          <img :src="userIcon" class="input-icon" alt="#" />
        </div>
        <div class="input-overlay">
          <input v-model="password" type="password" class="account-input" placeholder="password" />
          <img :src="passwordIcon" class="input-icon" alt="#" />
        </div>
        <button
          class="account-button"
          v-if="isRegistration"
          @click="registrationHandler"
        >{{'registration' | localize}}</button>
        <button
          class="account-button"
          v-else
          @click="authorizationHandler"
        >{{'authorization' | localize}}</button>
      </div>
      <div class="account-menu-right" v-if="user !== null">
        <img :src="usersIcon" alt="#" class="account-users" />
        <p class="account-paragraph">Hello, {{this.user.email}}, welcome back to your Rex account!</p>
        <button class="account-button" @click="logoutHandler">{{'logout' | localize}}</button>
      </div>
      <span class="account-button-close" @click="switchMenu">&times;</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

import firebaseAPI from "../../firebase";

import logotype from "../../assets/icons/Logotype.svg";
import password from "../../assets/icons/password.svg";
import user from "../../assets/icons/user-alt.svg";
import users from "../../assets/images/users.png";

export default {
  name: "AccountMenu",
  data: function () {
    return {
      email: "",
      password: "",
      logotypeIcon: logotype,
      passwordIcon: password,
      userIcon: user,
      usersIcon: users,
      isRegistration: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  props: {
    switchMenu: {
      type: Function,
    },
  },
  methods: {
    ...mapMutations(["clearBasket"]),
    ...mapActions(["fetchCurrentUser", "fetchProductsFromBasket"]),
    registrationHandler() {
      firebaseAPI
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => this.authorizationHandler())
        .then(() => {
          firebaseAPI
            .database()
            .ref(`users/${firebaseAPI.auth().currentUser.uid}`)
            .set({
              id: firebaseAPI.auth().currentUser.uid,
              email: firebaseAPI.auth().currentUser.email,
            });
        })
        .catch(function (error) {
          alert(error.message);
        });
    },
    authorizationHandler() {
      firebaseAPI
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          localStorage.setItem("id", firebaseAPI.auth().currentUser.uid);
        })
        .then(() => this.clearBasket())
        .then(() => this.fetchCurrentUser())
        .then(() => this.fetchProductsFromBasket())
        .then(() => this.switchMenu())
        .catch(function (error) {
          alert(error.message);
        });
    },
    logoutHandler() {
      firebaseAPI
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("id");
        })
        .then(() => this.clearBasket())
        .then(() => this.fetchProductsFromBasket());
    },
    switchRegistrationForm: function () {
      this.isRegistration = !this.isRegistration;
    },
  },
};
</script>

<style lang="scss" scoped>
$backgroundMain: #0b0c23;
$fontMain: #ffffff;
$fontSecondary: #c4c4c4;
$backgroundProduct: #232439;
$psuColor: #00a651;
$backgroundDetails: #1b1b67;
$backgroundAdd: #0b0c23;
$filterBackgroundUnactive: #232439;
$filterBackgroundActive: #17182e;
$filterFontUnactive: #c4c4c4;
$filterBorder: #2e2f42;

.account-menu-overlay {
  user-select: none;
  z-index: 4;
  position: fixed;
  bottom: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(black, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.account-menu-container {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  min-height: 500px;
  margin-bottom: 100px;
  background: $backgroundMain;
  position: relative;
}

.account-menu-left {
  display: flex;
  justify-content: center;
  align-items: center;
  &-logo {
    width: 180px;
  }
}

.account-menu-right {
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.account {
  &-paragraph {
    font-family: "Open sans regular";
    font-size: 0.7rem;
    width: 300px;
    &-switch {
      font-family: "Open sans regular";
      font-size: 0.7rem;
      text-decoration: underline;
      color: rgb(36, 99, 182);
      transition: 0.3s;
      &:hover {
        cursor: pointer;
        color: rgb(26, 73, 134);
      }
    }
  }
  &-users {
    width: 124px;
  }
}

.input {
  &-overlay {
    margin-top: 10px;
    display: flex;
    width: 300px;
    position: relative;
  }
  &-icon {
    padding-left: 8px;
    width: 16px;
    height: 38px;
    position: absolute;
    left: 0;
  }
}

.account-input {
  border-radius: 5px;
  padding-left: 30px;
  height: 38px;
  width: 100%;
  border: none;
  outline: none;
  background: $fontMain;
  color: $backgroundMain;
  opacity: 0.8;
  transition: 0.3s;
  &:focus {
    opacity: 1;
  }
  &:invalid {
    border: none;
    outline: none;
    box-shadow: none;
  }
}

.account-button {
  background: $backgroundDetails;
  width: 300px;
  border-radius: 5px;
  height: 38px;
  border: 1px solid $backgroundDetails;
  outline: none;
  font-family: "Open sans light";
  font-size: 12px;
  align-self: flex-start;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
  margin-top: 100px;
  &:hover {
    border: 1px solid $fontMain;
    background: $backgroundMain;
  }
  &-close {
    position: absolute;
    right: 0;
    top: 0;
    font-family: arial;
    font-size: 1.7rem;
    width: 1.7rem;
    opacity: 0.7;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
}

.account-vertical-line {
  background: $fontMain;
}
</style>
