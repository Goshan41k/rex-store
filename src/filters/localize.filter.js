import store from '../store';

const locales = {
  'ru-RU': {
    currentLang: 'RUS',
    authorization: 'Авторизация',
    registration: 'Регистрация',
    logout: 'Выйти',
    blogSection: 'БЛОГ',
    filtersSection: 'ФИЛЬТРЫ',
    listingsSection: 'СВЕЖЕЕ',
    onSaleSection: 'В ПРОДАЖЕ',
    newsSection: 'НОВОСТИ',
    filterByAlgorithm: 'По Алгоритму',
    filterByCoin: 'По Валюте',
    filterByEquipment: 'По Экипировке',
    filterByManufacturer: 'По производителю',
    filterByMinPrice: 'Минимальная цена',
    filterByBaxPrice: 'Максимальная цена',
    useFilter: 'ПРИМЕНИТЬ ФИЛЬТРЫ',
    cleanFilter: 'ОЧИСТИТЬ ФИЛЬТРЫ',
    filterSearch: 'Поиск',
    detailsButton: 'Подробнее',
    addToCartButton: 'В корзину',
    continueButton: 'Продолжить',
    removeAllButton: 'Убрать всё',
    menuHomePage: 'ГЛАВНАЯ',
    menuAboutPage: 'О НАС',
    menuSupportPage: 'ПОДДЕРЖКА',
    basketLeftSide: 'У вас ',
    basketRightSide: ' единиц товара в корзине',
    aboutHeader: 'О магазине комплектующих REX',
    aboutFirstParagraph:
      'Основанная в 2011 году, наша компания является одним из лидером отрасли, реализующей комплектующие и производящей компьютеры премиум класса. Наши комплектующие совершенны - как внутри так и снаружи. Хотите купить качественный, тихий и мощный ПК?',
    aboutSecondParagraph:
      'Совершая покупку на https://rex.com/, вы можете быть уверены в качественном товаре, что подразумевает его надёжность, а также быстрое гарантийное и постгарантийное обслуживание.',
    aboutThirdParagraph:
      'Наш магазин работает без выходных, с раннего утра и до позднего вечера. Доставка курьером с 11:00 до 23:00. Оформление заказа на сайте: круглосуточно. Менеджер перезвонит Вам в рабочее время для уточнения деталей заказа.',
    aboutSecondHeader: 'Наши партнёры:',
    aboutThirdHeader: 'Будем рады видеть Вас в числе наших клиентов!',
    haveAccount:
      'Пройдите регистрацию и начните покупать! Или у вас уже есть аккаунт?',
    haveNotAccount:
      'Добро пожаловать! Авторизируйтесь и продолжим покупать. Если у вас нет аккаунт, то давайте пройдём',
    registerSpan: 'Регистрация',
    authSpan: 'Войти',
    productCode: 'Код продукта:',
    productInfo: 'Описание',
    productDelivery: 'Доставка',
    productReturns: 'Возвраты',
    returnsFirstBlock:
      'Мы гарантируем возврат или обмен любого товара, которым вы не полностью довольны, при условии, что вы вернете его нам в неиспользованном и пригодном для продажи состоянии в течение 28 дней с даты получения.',
    returnsSecondBlock:
      'А чтобы облегчить этот прцоесс, любые возвраты, сделанные через службу Asda2You или Collect +, теперь бесплатны. Мы стремимся обработать все возвраты в течение 7 дней с момента получения нами товаров обратно на наш склад. Чтобы избежать задержек, убедитесь, что вы полностью заполнили форму возврата, прежде чем отправлять нам свои товары.',
    storeDeliveryFirst: 'Доставка до нашего магазина: Бесплатно',
    storeDeliverySecond:
      'Доставка до выбранного вами нашего магазина занимает до трёх рабочих дней.',
    standartDeliveryFirst: 'Стандартная доставка: $5',
    standartDeliverySecond: 'Бесплатная доставка заказов на сумму от $50.',
    nextDayDeliveryFirst: 'Доставка на следующий день: $12',
    nextDayDeliverySecond:
      'Заказы размещённые после 23:00 в четверг, пятницу или субботу, будут доставлены в воскресенье.',
    europeanDeliveryFirst: 'Доставка по Европе: от $15',
  },
  'en-US': {
    currentLang: 'ENG',
    authorization: 'Sign in',
    registration: 'Sign up',
    logout: 'Log out',
    blogSection: 'RECENT BLOG',
    listingsSection: 'NEW LISTINGS',
    onSaleSection: 'ON SALE',
    newsSection: 'NEWS',
    filtersSection: 'FILTERS',
    filterByAlgorithm: 'By Algorithm',
    filterByCoin: 'By Coin',
    filterByEquipment: 'By Equipment',
    filterByManufacturer: 'By Manufacturer',
    filterByMinPrice: 'Minimum price',
    filterByMaxPrice: 'Maximum price',
    useFilter: 'USE FILTERS',
    cleanFilter: 'CLEAN FILTERS',
    filterSearch: 'Search',
    detailsButton: 'Details',
    addToCartButton: 'Add to cart',
    continueButton: 'Continue',
    removeAllButton: 'Remove all',
    menuHomePage: 'HOME',
    menuAboutPage: 'ABOUT US',
    menuSupportPage: 'SUPPORT',
    basketLeftSide: 'You have ',
    basketRightSide: ' items in your cart',
    aboutHeader: 'About REX hardware shop',
    aboutFirstParagraph:
      'Founded in 2011, our company is one of the industry leaders in premium components and manufacturing computers. Our components are perfect - both inside and out. Looking to buy a quality, quiet and powerful PC?',
    aboutSecondParagraph:
      'When making a purchase on https://rex.com/, you can be sure of a high-quality product, which implies its reliability, as well as fast warranty and post-warranty service.',
    aboutThirdParagraph:
      'Our store is open seven days a week, from early morning until late at night. Delivery by courier from 11:00 to 23:00. Checkout on the website: around the clock. The manager will call you back during working hours to clarify the details of the order.',
    aboutSecondHeader: 'Our partners:',
    aboutThirdHeader: 'We will be glad to see you among our clients!',
    haveAccount:
      'Get registered to start shopping! Do you already have an account?',
    haveNotAccount:
      "Welcome back! Log in to your account. Have no account? Let's",
    registerSpan: 'register',
    authSpan: 'Log in',
    productCode: 'product code:',
    productInfo: 'Product info',
    productDelivery: 'Delivery',
    productReturns: 'Returns',
    returnsFirstBlock:
      'We guarantee to refund or exchange any item you’re not completely happy with,providing you return it to us in an unused and sellable condition within 28 days of the date onyour receipt.',
    returnsSecondBlock:
      'To make it even easier, any returns made via the Asda2You or Collect+ service are now free of charge.We aim to process all returns within 7 days of us receiving the goods back in our warehouse. To avoid delays please make sure that you fill out your returns form in full before sending your items back to us.',
    storeDeliveryFirst: 'Store Delivery: FREE',
    storeDeliverySecond:
      'Delivery will be made to your chosen store within an estimated 3 working days.',
    standartDeliveryFirst: 'Standard Delivery: $5',
    standartDeliverySecond: 'Free standard delivery for orders over $50.',
    nextDayDeliveryFirst: 'Next day delivery: $12',
    nextDayDeliverySecond:
      'Orders placed after 11pm Thursday, or on Friday and Saturday, will be dispatched on Sunday.',
    europeanDeliveryFirst: 'European delivery: from $15',
  },
};

export default function localizeFilter(key) {
  let locale = store.getters.getCurrentLang;
  return locales[locale][key] || 'Localize error';
}
