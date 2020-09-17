import firebaseAPI from '../../firebase';

const goods = {
  state: {
    products: [],
    productsInBasket: [],
    filteredProducts: [],
    filters: {
      manufacturers: [],
      priceFrom: '',
      priceTo: '',
      searchString: '',
    },
  },
  mutations: {
    setProducts(state, productsArray) {
      state.products = productsArray;
    },
    updateBasket(state, basketItem) {
      state.productsInBasket.push(basketItem);
    },
    updateBasketFromLocalStorage(state) {
      let temporaryBasket =
        JSON.parse(localStorage.getItem('temporaryBasket')) || [];
      state.productsInBasket = temporaryBasket;
    },
    clearBasket(state) {
      state.productsInBasket = [];
    },
    refreshFilters(state) {
      state.filters = {
        manufacturers: [],
        priceFrom: '',
        priceTo: '',
        searchString: '',
      };
    },
    updateFilterManufacturers(state, manufacturer) {
      state.filters.manufacturers.indexOf(manufacturer) === -1
        ? state.filters.manufacturers.push(manufacturer)
        : state.filters.manufacturers.splice(
            state.filters.manufacturers.indexOf(manufacturer),
            1
          );
    },
    updateFilterPriceFrom(state, priceFrom) {
      state.filters.priceFrom = priceFrom;
    },
    updateFilterPriceTo(state, priceTo) {
      state.filters.priceTo = priceTo;
    },
    updateSearchString(state, searchString) {
      state.filters.searchString = searchString;
    },
    setFilteredProducts(state, filteredProducts) {
      state.filteredProducts = filteredProducts;
    },
    setNewQuantity(state, { id, newValue }) {
      state.productsInBasket.map((basketItem) =>
        basketItem.id === id ? (basketItem.count = newValue) : null
      );
      if (localStorage.getItem('id') === null) {
        localStorage.setItem(
          'temporaryBasket',
          JSON.stringify(state.productsInBasket)
        );
      }
    },
    removeProduct(state, id) {
      let newArray = state.productsInBasket.filter(
        (product) => product.id !== id
      );
      state.productsInBasket = newArray;
    },
    moveToLocalStorageBasket(state, product) {
      state.productsInBasket.push(product);
      localStorage.setItem(
        'temporaryBasket',
        JSON.stringify(state.productsInBasket)
      );
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        let productsArray = [];
        return await new Promise((resolve) => {
          firebaseAPI
            .database()
            .ref('goods')
            .on('child_added', (snapshot) => {
              productsArray.push(snapshot.val());
            });
          commit('setProducts', productsArray);
          resolve();
        });
      } catch (e) {
        console.log('Fetch products error!');
      }
    },
    async fetchProductsFromBasket({ commit }) {
      try {
        if (localStorage.getItem('id') !== null) {
          return new Promise((resolve) => {
            firebaseAPI
              .database()
              .ref(`users/${localStorage.getItem('id')}/basket`)
              .on('child_added', (snapshot) => {
                commit('updateBasket', snapshot.val());
              });
            resolve();
          });
        }
        if (localStorage.getItem('id') === null) {
          commit('updateBasketFromLocalStorage');
        }
      } catch (e) {
        console.log('Fetch basket error!');
      }
    },
    moveProductToBasket({ commit, state }, id) {
      let newBasketItem;
      state.products.map((good) => {
        if (good.id === id) {
          newBasketItem = {
            id: good.id,
            quantityInStock: good.count,
            count: 1,
            img: good.img,
            title: good.title,
            price: good.price,
          };
          if (localStorage.getItem('id') !== null) {
            firebaseAPI
              .database()
              .ref(`users/${localStorage.getItem('id')}/basket/${good.id}`)
              .set(newBasketItem);
          }
          if (localStorage.getItem('id') === null) {
            let isCurrentItemsInBasket = false;
            let temporaryBasket =
              JSON.parse(localStorage.getItem('temporaryBasket')) || [];
            temporaryBasket.map((item) => {
              if (item.id === id) isCurrentItemsInBasket = true;
            });
            if (!isCurrentItemsInBasket) {
              commit('moveToLocalStorageBasket', newBasketItem);
            }
          }
        }
      });
    },
    changeBasketProductQuantity(
      { commit, state },
      { id, operation, newValue }
    ) {
      state.productsInBasket.map((product) => {
        if (product.id === id) {
          if (operation === 'increment') {
            if (product.quantityInStock > product.count) {
              if (localStorage.getItem('id') !== null) {
                firebaseAPI
                  .database()
                  .ref(`users/${localStorage.getItem('id')}/basket/${id}/count`)
                  .set(newValue);
              }
              commit('setNewQuantity', { id, newValue });
            }
          }
          if (operation === 'decrement') {
            if (product.count > 1) {
              if (localStorage.getItem('id') !== null) {
                firebaseAPI
                  .database()
                  .ref(`users/${localStorage.getItem('id')}/basket/${id}/count`)
                  .set(newValue);
              }
              commit('setNewQuantity', { id, newValue });
            }
          }
        }
      });
    },
    removeProductFromBasket({ commit }, id) {
      if (localStorage.getItem('id') !== null) {
        firebaseAPI
          .database()
          .ref(`users/${localStorage.getItem('id')}/basket/${id}`)
          .remove();
      }
      if (localStorage.getItem('id') === null) {
        let temporaryBasket = JSON.parse(
          localStorage.getItem('temporaryBasket')
        );
        let newTemporaryBasket = temporaryBasket.filter(
          (item) => item.id !== id
        );
        localStorage.setItem(
          'temporaryBasket',
          JSON.stringify(newTemporaryBasket)
        );
      }
      commit('removeProduct', id);
    },
    removeAllProductsFromBasket({ commit }) {
      if (localStorage.getItem('id') !== null) {
        firebaseAPI
          .database()
          .ref(`users/${localStorage.getItem('id')}/basket`)
          .remove();
      }
      if (localStorage.getItem('id') === null) {
        localStorage.removeItem('temporaryBasket');
      }
      commit('clearBasket');
    },
    applyFilters({ commit, state }) {
      let filteredProducts = [];
      state.products.map((good) => {
        filteredProducts.push(good);
      });
      if (state.filters.priceFrom !== '') {
        filteredProducts = filteredProducts.filter(
          (good) => Number(good.price) >= Number(state.filters.priceFrom)
        );
      }
      if (state.filters.priceTo !== '') {
        filteredProducts = filteredProducts.filter(
          (good) => Number(good.price) <= Number(state.filters.priceTo)
        );
      }
      if (state.filters.manufacturers.length !== 0) {
        let productsBackup = filteredProducts.slice();
        filteredProducts = [];
        for (const filter of state.filters.manufacturers) {
          productsBackup.map((good) => {
            if (good.title.toLowerCase().includes(filter.toLowerCase())) {
              filteredProducts.push(good);
            }
          });
        }
      }
      if (state.filters.searchString !== '') {
        let productsBackup = filteredProducts.slice();
        filteredProducts = [];
        filteredProducts = productsBackup.filter((good) =>
          good.title
            .toLowerCase()
            .includes(state.filters.searchString.toLowerCase())
        );
      }
      if (filteredProducts.length === 0) {
        alert('Empty filter result!');
      }
      commit('setFilteredProducts', filteredProducts);
    },
  },
  getters: {
    products: (state) => state.products,
    productsAfterFilter: (state) => state.filteredProducts,
    productsInBasket: (state) => state.productsInBasket,
    currentFilters: (state) => state.filters,
    productById: (state) => (id) =>
      state.products.find((product) => product.id === id),
  },
};

export default goods;
