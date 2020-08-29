(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagecomponents_ShopHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagecomponents/ShopHeader */ "./resources/js/components/pagecomponents/ShopHeader.vue");
/* harmony import */ var _pagecomponents_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pagecomponents/Slider */ "./resources/js/components/pagecomponents/Slider.vue");
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    shopHeader: _pagecomponents_ShopHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    appslider: _pagecomponents_Slider__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    $(".modal-mask").css("display", "block");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagecomponents_ShopVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagecomponents/ShopVideo */ "./resources/js/components/pagecomponents/ShopVideo.vue");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import review from "../pagecomponents/Review";



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    appvideo: _pagecomponents_ShopVideo__WEBPACK_IMPORTED_MODULE_0__["default"],
    // review,
    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["Swiper"],
    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"]
  },
  directives: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["directive"]
  },
  data: function data() {
    return {
      palettes: [],
      minPalettes: [],
      artists: [],
      palettesArtists: [],
      show: false,
      size: false,
      details: false,
      shipping: false,
      id: "",
      minPalette_id: "",
      first: null,
      firstpalettesArtists: null,
      firstminPalettes: null,
      minPalettesActive: {},
      active_el: 2,
      priceTarget: "",
      avilableTarget: "",
      sizeTarget: "medium",
      button: false,
      artistID: "",
      sizeCm: "",
      artist_text: "",
      artist_active: "",
      height: "200px",
      width: window.innerWidth
    };
  },
  mounted: function mounted() {
    this.changeContent(this.currentLanguage);
    var swiper = new vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["Swiper"](".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 1
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },
      observer: true,
      observerParents: true
    }); // swiper.update();
  },
  created: function created() {
    var _this = this;

    if (this.$route.query.mydata) {
      axios.get("/api/palettes").then(function (response) {
        _this.artists = response.data.artists;
        _this.artist_text = response.data.artists[0].Plates_description;
        _this.first = response.data.artists[0].id;
        axios.get("/api/view?id=" + _this.$route.query.mydata).then(function (response) {
          _this.minPalettesActive = response.data.palettesActive, _this.palettesArtists = response.data.palettesArtists;

          _this.changeContent(_this.currentLanguage);
        })["catch"](function (error) {
          return console.log(error.response.data);
        });
      })["catch"](function (error) {
        return console.log(error.response.data);
      }); //this.addActive(this.$route.query.mydata)

      axios.get("/api/viewMinPalettes?id=" + this.$route.query.mydata).then(function (response) {
        _this.minPalettes = response.data.minPalettes;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
      axios.get("/api/artist?id=" + this.$route.query.mydata).then(function (response) {
        _this.artist_active = response.data.artist[0].id;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    } else {
      axios.get("/api/palettes").then(function (response) {
        _this.artists = response.data.artists;
        _this.first = response.data.artists[0].id;
        _this.artist_active = _this.first;
        _this.artist_text = response.data.artists[0].Plates_description;
        axios.get("/api/view?id=" + _this.first).then(function (response) {
          _this.palettes = response.data.palettes;
          _this.minPalettesActive = response.data.palettes[0], _this.palettesArtists = response.data.palettesArtists;

          _this.changeContent(_this.currentLanguage);

          _this.firstpalettesArtists = response.data.palettesArtists[0].id;
          axios.get("/api/viewMinPalettes?id=" + _this.firstpalettesArtists).then(function (response) {
            _this.minPalettes = response.data.minPalettes;
          })["catch"](function (error) {
            return console.log(error.response.data);
          });
        })["catch"](function (error) {
          return console.log(error.response.data);
        });
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    }
  },
  computed: {
    cart: function cart() {
      return this.products.filter(function (product) {
        return product.quantity > 0;
      });
    },
    totalQuantity: function totalQuantity() {
      return this.products.reduce(function (total, product) {
        return total + product.quantity;
      }, 0);
    },
    currentLanguage: function currentLanguage() {
      return this.$i18n.locale;
    } // swiper(){
    //     return this.$refs.mySwiper.$swiper
    // }

  },
  methods: {
    changeContent: function changeContent(lang) {
      if (lang == "en") {
        this.minPalettesActive.sizing = this.minPalettesActive.sizing_details;
        this.minPalettesActive.print = this.minPalettesActive.print_material;
        this.minPalettesActive.ink = this.minPalettesActive.print_ink;
        this.minPalettesActive.finish = this.minPalettesActive.print_finish;
        this.minPalettesActive.material = this.minPalettesActive.frame_material;
        this.minPalettesActive.frame = this.minPalettesActive.frame_finish;
        this.minPalettesActive.descript = this.minPalettesActive.description;
        this.minPalettesActive.ship = this.minPalettesActive.shipping;
      }

      if (lang == "ar") {
        this.minPalettesActive.sizing = this.minPalettesActive.sizing_details_ar;
        this.minPalettesActive.print = this.minPalettesActive.print_material_ar;
        this.minPalettesActive.ink = this.minPalettesActive.print_ink_ar;
        this.minPalettesActive.finish = this.minPalettesActive.print_finish_ar;
        this.minPalettesActive.material = this.minPalettesActive.frame_material_ar;
        this.minPalettesActive.frame = this.minPalettesActive.frame_finish_ar;
        this.minPalettesActive.descript = this.minPalettesActive.description_ar;
        this.minPalettesActive.ship = this.minPalettesActive.shipping_ar;
      }
    },
    countWords: function countWords(str) {
      str = str.replace(/(^\s*)|(\s*$)/gi, "");
      str = str.replace(/[ ]{2,}/gi, " ");
      str = str.replace(/\n /, "\n");
      return str.split(" ").length;
    },
    toggleParagraphHeight: function toggleParagraphHeight() {
      //   console.log(this.countWords(this.minPalettesActive.descript));
      //   console.log(this.minPalettesActive.descript.length);
      this.show = !this.show;
      if (this.show) this.height = "auto";else {
        this.height = "200px";
      }
    },
    addToCart: function addToCart(product) {
      this.$store.dispatch("addProductToCart", {
        product: product,
        quantity: 1
      });
    },
    updateCart: function updateCart(product, updateType) {
      for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          if (updateType === "subtract") {
            if (this.products[i].quantity !== 0) {
              this.products[i].quantity--;
            }
          } else {
            this.products[i].quantity++;
          }

          break;
        }
      }
    },
    getdata: function getdata($id) {
      var _this2 = this;

      // let id = 0;
      if (this.artists[$id]) {
        $id = this.artists[$id].id;
      } else if ($id > this.artists.length - 1) {
        $id = this.artists[0].id;
      } else {
        $id = this.artists[this.artists.length - 1].id;
      }

      axios.get("/api/view?id=" + $id).then(function (response) {
        _this2.palettes = response.data.palettes;
        _this2.artist_text = response.data.artist[0];
        _this2.minPalettesActive = response.data.palettes[0];

        if (_this2.minPalettesActive == null) {
          _this2.minPalettesActive = "";
        } else {
          _this2.changeContent(_this2.currentLanguage);
        }

        if (response.data.palettesArtists.length > 0) {
          _this2.firstminPalettes = response.data.palettesArtists[0].id;
        } else {
          _this2.firstminPalettes = null;
        }

        axios.get("/api/viewMinPalettes?id=" + _this2.firstminPalettes).then(function (response) {
          _this2.minPalettes = response.data.minPalettes;
        })["catch"](function (error) {
          return console.log(error.response.data);
        });
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    small: function small(el, price, avilable, cardId) {
      this.sizeTarget = "small";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "30x40cm (12x16)"; //  $(".details .details_img").css({
      //      transform:"scale(1)"
      //  })
      // $(".details .content").css({marginTop:"27px"})

      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details.active .details_img").css({
        transform: "scale(.7)"
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details.active .content").css({
        marginTop: "-27px"
      });
    },
    medium: function medium(el, price, avilable, cardId) {
      this.sizeTarget = "medium";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "50x66.5cm (20x26)"; //  $(".details .details_img").css({
      //      transform:"scale(1)"
      //  })
      // $(".details .content").css({marginTop:"27px"})
      // $(".details.active .details_img").css({
      //     transform:"scale(.8)"
      // })
      // $(".details.active .content").css({marginTop:"-17px"})
    },
    larg: function larg(el, price, avilable, cardId) {
      this.sizeTarget = "large";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "70x93.5cm (28x37)";
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details.active .details_img").css({
        transform: "scale(1)"
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details.active .content").css({
        marginTop: "27px"
      });
    },
    addActive: function addActive($minPalette_id, index) {
      var _this3 = this;

      // console.log(  this.$refs.myActive)
      var myActive = this.$refs.myActive[index];
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(myActive).addClass("active").siblings().removeClass("active");
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details").on("click", function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("active").siblings().removeClass("active");
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
        scrollTop: "450px"
      }, 500);
      axios.get("/api/viewMinPalettes?id=" + $minPalette_id).then(function (response) {
        _this3.minPalettes = response.data.minPalettes;
        _this3.minPalettesActive = response.data.palettes[0];

        _this3.changeContent(_this3.currentLanguage);

        _this3.show = false;
        _this3.height = "200px"; //   this.toggleParagraphHeight();
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    addtocart: function addtocart($id, price, avilableTarget, sizeTarget, sizeCm) {
      var _this4 = this;

      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".modal-mask").css("left", 0);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".modal-cart-footer").addClass("animation", "i 1s ");
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".modal-mask").css("backgroundColor", "rgba(0,0,0,.5)");
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".modal-mask").css("height", "100vh");
      }, 800);
      axios.post("/api/addtocart?id=" + $id).then(function (res) {
        // console.log(res.data.paletteCart)
        // $('#count')[0].innerText++
        var product = res.data.paletteCart;

        if (sizeTarget == "large") {
          if (_this4.minPalettesActive.L_avalible <= 0) {
            _this4.minPalettesActive.L_avalible = 0;
            return;
          }

          --_this4.minPalettesActive.L_avalible;
        } else if (sizeTarget == "small") {
          if (_this4.minPalettesActive.S_avalible <= 0) {
            _this4.minPalettesActive.S_avalible = 0;
            return;
          }

          --_this4.minPalettesActive.S_avalible;
        } else {
          if (_this4.minPalettesActive.M_avalible <= 0) {
            _this4.minPalettesActive.M_avalible = 0;
            return;
          }

          --_this4.minPalettesActive.M_avalible;
        }

        _this4.$store.dispatch("addProductToCart", {
          product: product,
          quantity: 1,
          price: price,
          avilableTarget: avilableTarget,
          sizeTarget: sizeTarget,
          sizeCm: sizeCm
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    } //lklk

  },
  //method
  watch: {
    $route: function $route(to, from) {
      var _this5 = this;

      this.addActive(this.$route.query.mydata);
      axios.get("/api/viewMinPalettes?id=" + this.$route.query.mydata).then(function (response) {
        _this5.minPalettes = response.data.minPalettes; // console.log(this.$route.query.mydata );
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
      axios.get("/api/artist?id=" + this.$route.query.mydata).then(function (response) {
        _this5.artist_active = response.data.artist[0].id;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    currentLanguage: function currentLanguage(newLang, oldLang) {
      this.changeContent(newLang);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.col-md-6[data-v-266b1872] {\n  padding-bottom: 0px !important;\n}\n.carousel-item .header[data-v-266b1872] {\n  width: 100%;\n  height: 640px;\n}\n@media (max-width: 767px) {\n.carousel-item .header[data-v-266b1872] {\n    height: 610px;\n    transform: scale3d(4.5, 1.5, 1.5);\n}\n}\n.header_sm[data-v-266b1872] {\n  background-image: url(\"https://cdn.shopify.com/s/files/1/3000/4362/files/turrell_mobile_final_post_3_2048x.jpg?v=1565189502\");\n  background-size: cover;\n  height: 300px;\n  background-position: center;\n  position: relative;\n  display: none;\n}\n.wrapper[data-v-266b1872] {\n  position: absolute;\n  top: -3%;\n  transform: translate(-50%, 0);\n  left: 52%;\n  width: 100%;\n}\n@media (max-width: 991px) {\n.header_sm[data-v-266b1872] {\n    display: none;\n}\n.wrapper[data-v-266b1872] {\n    left: 48%;\n}\n}\n.details[data-v-266b1872] {\n  color: #fff;\n  cursor: pointer;\n  transition: all 1s;\n}\n.details img[data-v-266b1872] {\n  width: 83%;\n  transition: all 1s;\n  height: 400px;\n  border-top: 8px solid #111;\n  border-bottom: 8px solid #111;\n}\n.wrapper .row[data-v-266b1872] {\n  transform: scale(0.5);\n}\n.wrapper .details .content[data-v-266b1872] {\n  position: relative;\n  font-size: 14px;\n  width: 83%;\n  margin-top: 34px;\n  /* margin: 16px auto 0; */\n  padding: 6px 5px;\n  transition: all 0.5s;\n  color: white;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.75);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100%;\n  z-index: 2;\n  top: 10px;\n  padding: 0 20px;\n  border: 4px solid rgba(0, 0, 0, -7.25);\n}\n.wrapper .details .content .triangle[data-v-266b1872] {\n  position: relative;\n  z-index: 1;\n  /* padding: 10px; */\n  display: inline-block;\n  top: -29px;\n  left: 50%;\n  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);\n  transform: rotate(0) scale(2.3) translate(-16%, 19%);\n  /* background: rgba(0,0,0,0.9); */\n  width: 22px;\n  height: 10px;\n}\n\n/* .details.active .triangle{\n            top: -26.1px;\n\n    } */\n/* .wrapper .details .content:hover{\n        border: 2px solid #00a4ee;\n    } */\n\n/* .details-content{\n        margin:20px;\n    } */\n.details[data-v-266b1872]:hover {\n  transform: scale(1.1);\n}\n.add-cart[data-v-266b1872] {\n  padding-left: 50px;\n}\n.add-cart div span[data-v-266b1872] {\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 22px;\n  display: inline-block;\n  margin-right: 5px;\n  padding: 0 10px;\n  text-transform: lowercase;\n  color: #fff;\n  border-radius: 999px;\n  background-color: #000;\n}\n.add-cart p[data-v-266b1872] {\n  font-size: 20px;\n}\n.add-cart .add-button[data-v-266b1872] {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 70px;\n  display: block;\n  width: 100%;\n  margin-bottom: 40px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  border: none;\n  background-color: #000;\n}\n.add-cart .more[data-v-266b1872] {\n  outline: none;\n}\n.list-group .list-group-item[data-v-266b1872] {\n  cursor: pointer;\n  border-left: none;\n  border-right: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.list-group[data-v-266b1872] {\n  padding-left: 0;\n}\n/*\n    .carousel-control-prev{\n        left: -50%;\n    } */\n.carousel-indicators li[data-v-266b1872] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 67px;\n  height: 29px;\n  margin-right: 14px;\n  margin-left: 0;\n  text-indent: 0;\n  cursor: pointer;\n  color: black;\n  background: none;\n}\n.carousel-indicators[data-v-266b1872] {\n  bottom: -9%;\n  width: 100%;\n  background-color: #f5f0ed;\n  margin-left: 0;\n  margin-right: 0;\n}\n@media (max-width: 991px) {\n.carousel-indicators[data-v-266b1872] {\n    bottom: -8%;\n}\n}\n.carousel-indicators .active[data-v-266b1872] {\n  border-bottom: 3px solid #00aeef;\n}\n.small[data-v-266b1872],\n.medium[data-v-266b1872],\n.larg[data-v-266b1872] {\n  padding: 40px 120px !important ;\n  margin-right: 20px !important;\n  font-size: 20px;\n}\n.details.active .content[data-v-266b1872] {\n  border: 4px solid #00a4ee;\n}\n.details.active .triangle[data-v-266b1872] {\n  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon-active.png) !important;\n}\n.active_btn[data-v-266b1872] {\n  border: 2px solid #00a4ee;\n}\n.content h6[data-v-266b1872],\n.content span[data-v-266b1872] {\n  font-size: 2rem;\n}\n.price[data-v-266b1872] {\n  font-size: 1.6rem !important ;\n}\n.infor[data-v-266b1872] {\n  top: -12px;\n  left: -20px;\n  position: relative;\n  transform: scale(0.8);\n}\n\n/* Start Responsive */\n@media (max-width: 1264px) {\n.wrapper .row[data-v-266b1872] {\n    position: absolute;\n    /* top: -230px; */\n\n    left: 51px;\n    transform: scale(0.4);\n}\n.details-content[data-v-266b1872] {\n    /* margin: 10px 30px ; */\n}\n}\n@media (max-width: 960px) {\n.wrapper .row[data-v-266b1872] {\n    transform: scale(0.4);\n}\n.details-content[data-v-266b1872] {\n    /* margin: 10px 50px ; */\n}\n.infor[data-v-266b1872][data-v-266b1872] {\n    left: 0;\n    position: relative;\n    transform: scale(0.9);\n}\n.wrapper .details img[data-v-266b1872] {\n    width: 100%;\n}\n.wrapper .details .content[data-v-266b1872] {\n    width: 100%;\n}\n}\n@media (max-width: 880px) {\n.wrapper .row[data-v-266b1872] {\n    transform: scale(0.4);\n    display: flex;\n    justify-content: space-evenly !important;\n}\n.details-content[data-v-266b1872] {\n    /* margin: 10px 50px ; */\n    margin-right: -18px;\n}\n.infor[data-v-266b1872][data-v-266b1872] {\n    left: 8px;\n    position: relative;\n    transform: scale(0.9);\n}\n.wrapper .details[data-v-266b1872] {\n    width: 300px !important;\n}\n.wrapper .details img[data-v-266b1872] {\n    width: 93%;\n}\n.wrapper .details .content[data-v-266b1872] {\n    width: 93%;\n}\n}\n.navigate2[data-v-266b1872] {\n  margin: 30px 0;\n  text-align: center;\n}\n.navigate2 svg[data-v-266b1872] {\n  -webkit-animation: e-data-v-266b1872 2s infinite;\n          animation: e-data-v-266b1872 2s infinite;\n  width: 28px;\n}\n@-webkit-keyframes e-data-v-266b1872 {\n0%,\n  20%,\n  50%,\n  80%,\n  to {\n    transform: translateY(0);\n}\n40% {\n    transform: translateY(-10px);\n}\n60% {\n    transform: translateY(-5px);\n}\n}\n@keyframes e-data-v-266b1872 {\n0%,\n  20%,\n  50%,\n  80%,\n  to {\n    transform: translateY(0);\n}\n40% {\n    transform: translateY(-10px);\n}\n60% {\n    transform: translateY(-5px);\n}\n}\n.parent[data-v-266b1872] {\n  position: absolute;\n  top: 450px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.parent img[data-v-266b1872] {\n  width: 170px;\n}\n.agile_swap[data-v-266b1872] {\n  /* position: absolute; */\n  /* top: 100px; */\n  /* left: 50%;\n    transform: translate(50%,0); */\n  position: absolute;\n  text-align: center;\n  /* top:2%; */\n  /* transform: scale(.9); */\n}\n.agile_swap img[data-v-266b1872] {\n  width: 37%;\n  margin-top: 80px;\n  border-top: 4px solid #111;\n  border-bottom: 4px solid #111;\n}\n/*\n.pallete-swiper .swiper-pagination{\n    display: none;\n}\n.agile_swap  .agile_slide {\n    width: 77% !important;\n\n} */\n.swiper-wrapper[data-v-266b1872] {\n  /* left: 44px; */\n}\n.agile_swap .content[data-v-266b1872] {\n  position: relative;\n  font-size: 14px;\n  width: 68%;\n  margin-top: 34px;\n  /* margin: 16px auto 0; */\n  padding: 6px 5px;\n  transition: all 0.5s;\n  color: white;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.75);\n  top: 18px;\n  padding: 0 20px;\n  border: 4px solid rgba(0, 0, 0, -7.25);\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.5);\n}\n.agile_swap .content .triangle[data-v-266b1872] {\n  position: relative;\n  z-index: 1;\n  /* padding: 10px; */\n  display: inline-block;\n  top: -29px;\n  left: 50%;\n  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);\n  transform: rotate(0) scale(2.3) translate(-316%, 18%);\n  /* background: rgba(0,0,0,0.9); */\n  width: 22px;\n  height: 10px;\n}\n@media (max-width: 414px) {\n.agile_swap .content .triangle[data-v-266b1872] {\n    left: 63% !important;\n}\n.agile_swap img[data-v-266b1872] {\n    height: 215px !important;\n    width: 170px !important;\n}\n.parent[data-v-266b1872] {\n    top: 430px;\n    left: 52%;\n}\n.agile_swap .content[data-v-266b1872] {\n    width: 246px !important;\n}\n.agile_swap .content .triangle[data-v-266b1872] {\n    left: 65% !important;\n}\n}\n.rotate[data-v-266b1872] {\n  width: 100%;\n  position: relative;\n  height: 82px;\n  transform: rotate(49deg);\n  background: black;\n}\n.carousel-indicators li[data-v-266b1872] {\n  width: auto;\n  padding: 0 10px;\n}\n.custom-padding[data-v-266b1872]:nth-child(odd) {\n  padding-right: 5px !important;\n  padding-left: 20px !important;\n  padding-bottom: 0.3px !important;\n}\n.custom-padding[data-v-266b1872]:nth-child(even) {\n  padding-right: 20px;\n  padding-left: 5px !important;\n  padding-bottom: 0.3px;\n}\n.swap_sm[data-v-266b1872] {\n  display: none;\n}\n.addToCart-sm[data-v-266b1872] {\n  display: none;\n}\n@media (max-width: 767px) {\n.custom-padding[data-v-266b1872]:nth-child(odd) {\n    padding-right: 11px !important;\n    padding-left: 11px !important;\n    padding-bottom: 0.3px !important;\n}\n.sold-out[data-v-266b1872] {\n    display: none;\n}\n.col-sm-12[data-v-266b1872] {\n    display: flex;\n    justify-content: center;\n}\n.custom-padding[data-v-266b1872]:nth-child(even) {\n    padding-right: 11px;\n    padding-left: 11px !important;\n    padding-bottom: 0.3px;\n}\n.add-cart[data-v-266b1872][data-v-266b1872] {\n    padding-left: 6px;\n}\n.addToCart-sm[data-v-266b1872] {\n    display: inline;\n    background: #fff;\n    position: fixed;\n    bottom: 0%;\n    z-index: 99;\n    width: 100%;\n    left: 0px;\n    right: 0;\n    height: 120px;\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 20px;\n}\n.addToCart[data-v-266b1872] {\n    display: none !important;\n}\n.swap_sm[data-v-266b1872] {\n    display: block;\n}\n.swap_lg[data-v-266b1872] {\n    display: none;\n}\n.agile_swap .agile_slide[data-v-266b1872] {\n    position: relative;\n    left: -15.7% !important;\n}\n}\n.swiper-container[data-v-266b1872] {\n  margin-bottom: 50px;\n}\n.agile_swap[data-v-266b1872] {\n  position: absolute;\n  top: 1%;\n  left: 16%;\n  width: 100%;\n}\n.agile_swap img[data-v-266b1872] {\n  height: 250px;\n  width: 189px;\n}\n.agile_swap .content[data-v-266b1872] {\n  width: 331px;\n}\n.agile_swap .agile_slide[data-v-266b1872] {\n  position: relative;\n  left: -11%;\n}\n.text-right strong[data-v-266b1872]::after {\n  content: \":\";\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product-detail-text[data-v-55149226]{\n    margin: auto;\n    text-align: center;\n}\n.product-detail-text .title[data-v-55149226]{\n    font-size: 40px;\n    margin: 0 0 20px;\n    font-weight: bold;\n}\n.product-detail-text .text[data-v-55149226]{\n    font-size: 22px;\n    margin: 0;\n}\nvideo[data-v-55149226]{\n    display: block !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_vm._m(0), _vm._v(" "), _c("shopHeader"), _vm._v(" "), _c("appslider")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-content" }, [
      _c("div", { staticClass: "spinner" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "div",
        {
          staticClass: "carousel slide",
          attrs: { id: "carouselExampleCaptions", "data-interval": "false" }
        },
        [
          _c(
            "ol",
            { staticClass: "carousel-indicators text-center" },
            _vm._l(_vm.artists, function(artist, index) {
              return _c(
                "li",
                {
                  key: artist.id,
                  class: { active: artist.id == _vm.artist_active },
                  attrs: {
                    "data-target": "#carouselExampleCaptions",
                    "data-slide-to": index
                  },
                  on: {
                    click: function($event) {
                      return _vm.getdata(index)
                    }
                  }
                },
                [_vm._v(_vm._s(artist.name))]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "carousel-inner" },
            _vm._l(_vm.artists, function(artist, index) {
              return _c(
                "div",
                {
                  key: artist.id,
                  staticClass: "carousel-item",
                  class: { active: artist.id === _vm.artist_active }
                },
                [
                  _c("img", {
                    staticClass: "header",
                    attrs: { src: artist.cover_img, alt: "..." }
                  }),
                  _vm._v(" "),
                  _c(
                    "swiper",
                    { staticClass: "agile_swap swap_sm" },
                    _vm._l(artist.artist_palettes, function(
                      palettesArtist,
                      index
                    ) {
                      return _c(
                        "swiper-slide",
                        {
                          key: palettesArtist.id,
                          ref: "myActive",
                          refInFor: true,
                          staticClass: "details agile_slide",
                          nativeOn: {
                            click: function($event) {
                              return _vm.addActive(palettesArtist.id, index)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: palettesArtist.artist_min_palettes.img,
                              alt: "..."
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "content",
                              class: { active: index == 0 }
                            },
                            [
                              _c("div", { staticClass: "triangle" }),
                              _vm._v(" "),
                              _c("h6", [
                                _c("span", { staticClass: "px-1" }, [
                                  _vm._v(_vm._s(palettesArtist.name))
                                ]),
                                _vm._v(" |\n                "),
                                _c("span", { staticClass: "price px-1" }, [
                                  _vm._v("$" + _vm._s(palettesArtist.M_price))
                                ])
                              ]),
                              _vm._v(" "),
                              palettesArtist.M_avalible > 0
                                ? _c("div", { staticClass: "infor" }, [
                                    _c("span", [
                                      _c(
                                        "span",
                                        { staticClass: "text-success" },
                                        [
                                          _vm._v(
                                            _vm._s(palettesArtist.M_avalible)
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                  /" +
                                          _vm._s(palettesArtist.M_copies) +
                                          " " +
                                          _vm._s(_vm.$t("message.left")) +
                                          "\n                "
                                      )
                                    ])
                                  ])
                                : _c("div", { staticClass: "infor" }, [
                                    _c(
                                      "span",
                                      {
                                        staticStyle: {
                                          color: "red",
                                          "font-weight": "bolder"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("message.solidout"))
                                        )
                                      ]
                                    )
                                  ])
                            ]
                          )
                        ]
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "wrapper swap_lg" }, [
                    _c(
                      "div",
                      {
                        staticClass: "row d-flex justify-content-center",
                        staticStyle: { width: "100%" }
                      },
                      _vm._l(artist.artist_palettes, function(
                        palettesArtist,
                        index
                      ) {
                        return _c(
                          "div",
                          {
                            key: palettesArtist.id,
                            ref: "myActive",
                            refInFor: true,
                            staticClass: "details col-lg-3 col-sm-4",
                            class: { active: index == 0 },
                            on: {
                              click: function($event) {
                                return _vm.addActive(palettesArtist.id, index)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "details-content" }, [
                              _c("img", {
                                staticClass: "details_img",
                                attrs: {
                                  src: palettesArtist.artist_min_palettes.img,
                                  alt: "..."
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "content",
                                  class: { active: index == 0 }
                                },
                                [
                                  _c("div", { staticClass: "triangle" }),
                                  _vm._v(" "),
                                  _c("h6", [
                                    _c("span", { staticClass: "px-1" }, [
                                      _vm._v(_vm._s(palettesArtist.name))
                                    ]),
                                    _vm._v(" |\n                    "),
                                    _c("span", { staticClass: "price px-1" }, [
                                      _vm._v(
                                        "$" + _vm._s(palettesArtist.M_price)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  palettesArtist.M_avalible > 0
                                    ? _c("div", { staticClass: "infor" }, [
                                        _c("span", [
                                          _c(
                                            "span",
                                            { staticClass: "text-success" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  palettesArtist.M_avalible
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\n                      /" +
                                              _vm._s(palettesArtist.M_copies) +
                                              " " +
                                              _vm._s(_vm.$t("message.left")) +
                                              "\n                    "
                                          )
                                        ])
                                      ])
                                    : _c("div", { staticClass: "infor" }, [
                                        _c(
                                          "span",
                                          {
                                            staticStyle: {
                                              color: "red",
                                              "font-weight": "bolder"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("message.solidout"))
                                            )
                                          ]
                                        )
                                      ])
                                ]
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "parent swap_sm" }, [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "navigate2" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            viewBox: "0 0 1792 1792",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "#fff",
                              d:
                                "M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "carousel-control-next",
                      attrs: {
                        href: "#carouselExampleCaptions",
                        role: "button",
                        "data-slide": "next"
                      },
                      on: {
                        click: function($event) {
                          return _vm.getdata(index + 1)
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "carousel-control-next-icon",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "carousel-control-prev",
                      attrs: {
                        href: "#carouselExampleCaptions",
                        role: "button",
                        "data-slide": "prev"
                      },
                      on: {
                        click: function($event) {
                          return _vm.getdata(index - 1)
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "carousel-control-prev-icon",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Previous")
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "header_sm mb-2" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "container",
          staticStyle: { "max-width": "1260px!important" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "col-lg-7",
                staticStyle: { "margin-top": "70px" }
              },
              [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("div", { staticClass: "col-md-6 col-sm-12" }, [
                      _c("img", {
                        staticStyle: { height: "355px", width: "355px" },
                        attrs: { src: _vm.minPalettesActive.img, alt: "..." }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.minPalettes, function(minPalette) {
                      return _c(
                        "div",
                        {
                          key: minPalette.id,
                          staticClass: "col-md-6 col-sm-12"
                        },
                        [
                          _c("img", {
                            staticStyle: { height: "355px", width: "355px" },
                            attrs: { src: minPalette.img, alt: "..." }
                          })
                        ]
                      )
                    })
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-5",
                staticStyle: { "margin-top": "78px" }
              },
              [
                _c(
                  "div",
                  { staticClass: "add-cart" },
                  [
                    _c("h2", { staticClass: "font-weight-bold" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.minPalettesActive.name) +
                          "\n            "
                      ),
                      _vm.active_el == 1
                        ? _c("span", [
                            _vm._v("$" + _vm._s(_vm.minPalettesActive.S_price))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.active_el == 2
                        ? _c(
                            "span",
                            {
                              staticStyle: {
                                float: "right",
                                "font-weight": "normal"
                              }
                            },
                            [
                              _vm._v(
                                "$" + _vm._s(_vm.minPalettesActive.M_price)
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.active_el == 3
                        ? _c("span", [
                            _vm._v("$" + _vm._s(_vm.minPalettesActive.L_price))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3 mt-2" }, [
                      _c("span", [_vm._v(_vm._s(_vm.minPalettesActive.tag))])
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _vm.minPalettesActive.M_avalible > 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn add-button addToCart",
                                on: {
                                  click: function($event) {
                                    return _vm.addtocart(
                                      _vm.minPalettesActive.id,
                                      _vm.minPalettesActive.M_price,
                                      _vm.avilableTarget,
                                      _vm.sizeTarget
                                    )
                                  }
                                }
                              },
                              [
                                _vm.active_el == 2
                                  ? _c(
                                      "span",
                                      { staticStyle: { "font-size": "23px" } },
                                      [
                                        _vm._v(
                                          "$" +
                                            _vm._s(
                                              _vm.minPalettesActive.M_price
                                            )
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.$t("message.cart")) +
                                    "\n            "
                                )
                              ]
                            )
                          : _c(
                              "v-btn",
                              {
                                staticClass: "mb-2 size_btn small sold-out",
                                staticStyle: {
                                  cursor: "not-allowed",
                                  "background-color": "#737373",
                                  color: "#fff",
                                  border: "none",
                                  "margin-bottom": "45px!important"
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("message.solidout")))]
                            )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-center addToCart-sm",
                        attrs: { id: "addToCartsm" }
                      },
                      [
                        _c("img", {
                          staticStyle: { width: "80px", height: "80px" },
                          attrs: { src: _vm.minPalettesActive.img, alt: "" }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticStyle: { width: "75%", height: "100px" } },
                          [
                            _vm.minPalettesActive.M_avalible > 0
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn add-button",
                                    staticStyle: {
                                      "line-height": "50px",
                                      width: "280px",
                                      margin: "0"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.addtocart(
                                          _vm.minPalettesActive.id,
                                          _vm.minPalettesActive.M_price,
                                          _vm.avilableTarget,
                                          _vm.sizeTarget
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm.active_el == 2
                                      ? _c(
                                          "span",
                                          {
                                            staticStyle: { "font-size": "23px" }
                                          },
                                          [
                                            _vm._v(
                                              "$" +
                                                _vm._s(
                                                  _vm.minPalettesActive.M_price
                                                )
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.$t("message.cart")) +
                                        "\n              "
                                    )
                                  ]
                                )
                              : _c(
                                  "v-btn",
                                  {
                                    staticClass: "mb-2 size_btn small",
                                    staticStyle: {
                                      cursor: "not-allowed",
                                      "background-color": "#737373",
                                      color: "#fff",
                                      border: "none",
                                      height: "60px !important",
                                      width: "280px !important",
                                      margin: "0",
                                      padding: "0px !important"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.$t("message.solidout")))]
                                ),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticStyle: {
                                  "font-size": "26px",
                                  "font-style": "italic",
                                  width: "100%",
                                  margin: "0px",
                                  "text-align": "center",
                                  "font-weight": "600"
                                }
                              },
                              [_vm._v(_vm._s(_vm.minPalettesActive.name))]
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("transition", [
                      _c(
                        "p",
                        {
                          class: { "text-right": _vm.currentLanguage == "ar" },
                          style: "height:" + _vm.height
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.minPalettesActive.descript) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "mt-4 mb-2 d-block",
                        staticStyle: {
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.7189250700280112) 0%, rgba(255,255,255,1) 66%)",
                          position: "relative",
                          height: "51px",
                          "padding-top": "15px"
                        }
                      },
                      [
                        _vm.minPalettesActive.description
                          ? [
                              (_vm.countWords(
                                _vm.minPalettesActive.description
                              ) > 110 ||
                                _vm.countWords(
                                  _vm.minPalettesActive.description_ar
                                ) > 80) &&
                              !_vm.show
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "more text-primary btn btn-block",
                                      on: { click: _vm.toggleParagraphHeight }
                                    },
                                    [_vm._v(_vm._s(_vm.$t("message.readmore")))]
                                  )
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("ul", { staticClass: "list-group" }, [
                      _c(
                        "li",
                        {
                          staticClass: "list-group-item",
                          on: {
                            click: function($event) {
                              _vm.size = !_vm.size
                            }
                          }
                        },
                        [
                          _c("h4", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("message.size")) +
                                "\n                "
                            ),
                            !_vm.size
                              ? _c("i", {
                                  staticClass: "fa fa-chevron-down",
                                  staticStyle: { float: "right" }
                                })
                              : _c("i", {
                                  staticClass: "fa fa-chevron-up",
                                  staticStyle: { float: "right" }
                                })
                          ]),
                          _vm._v(" "),
                          _vm.size
                            ? _c(
                                "p",
                                {
                                  class: {
                                    "text-right": _vm.currentLanguage == "ar"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.minPalettesActive.sizing))]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "list-group-item",
                          on: {
                            click: function($event) {
                              _vm.details = !_vm.details
                            }
                          }
                        },
                        [
                          _c("h4", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("message.productDetails")) +
                                "\n                "
                            ),
                            !_vm.details
                              ? _c("i", {
                                  staticClass: "fa fa-chevron-down",
                                  staticStyle: { float: "right" }
                                })
                              : _c("i", {
                                  staticClass: "fa fa-chevron-up",
                                  staticStyle: { float: "right" }
                                })
                          ]),
                          _vm._v(" "),
                          _vm.details
                            ? [
                                _c(
                                  "p",
                                  {
                                    class: {
                                      "text-right": _vm.currentLanguage == "ar"
                                    }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Print_material"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.print) +
                                        "\n                  "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Print_ink"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.ink) +
                                        "\n                  "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Print_finish"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.finish) +
                                        "\n                  "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Frame_material"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.material) +
                                        "\n                  "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Frame_finish"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.frame) +
                                        "\n                "
                                    )
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "list-group-item",
                          on: {
                            click: function($event) {
                              _vm.shipping = !_vm.shipping
                            }
                          }
                        },
                        [
                          _c("h4", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("message.shipping")) +
                                "\n                "
                            ),
                            !_vm.shipping
                              ? _c("i", {
                                  staticClass: "fa fa-chevron-down",
                                  staticStyle: { float: "right" }
                                })
                              : _c("i", {
                                  staticClass: "fa fa-chevron-up",
                                  staticStyle: { float: "right" }
                                })
                          ]),
                          _vm._v(" "),
                          _vm.shipping
                            ? _c(
                                "p",
                                {
                                  class: {
                                    "text-right": _vm.currentLanguage == "ar"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.minPalettesActive.ship))]
                              )
                            : _vm._e()
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("appvideo")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        attrs: {
          src:
            "https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/swipetothenext.png?v=14393615295324639232",
          alt: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("div", { staticStyle: { clear: "both" } })])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "container" }, [
    _c("header", { staticClass: "mb-4 mt-5 mb-5" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c(
        "video",
        {
          attrs: {
            playsinline: "playsinline",
            autoplay: "autoplay",
            muted: "muted",
            loop: "loop"
          },
          domProps: { muted: true }
        },
        [
          _c("source", {
            attrs: {
              src:
                "https://cdn.shopify.com/s/files/1/3000/4362/files/24-1.mp4?v=1592991630",
              type: "video/mp4"
            }
          })
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("header", { staticClass: "mb-4 mt-5 mb-5" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c(
        "video",
        {
          attrs: {
            playsinline: "playsinline",
            autoplay: "autoplay",
            muted: "muted",
            loop: "loop"
          },
          domProps: { muted: true }
        },
        [
          _c("source", {
            attrs: {
              src:
                "https://cdn.shopify.com/s/files/1/3000/4362/files/11-2.mp4?v=1592991629",
              type: "video/mp4"
            }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-detail-text " }, [
      _c("h3", { staticClass: "title" }, [_vm._v("Limited Editions")]),
      _vm._v(" "),
      _c("p", { staticClass: "text" }, [
        _vm._v(
          "Each artwork is enhanced by hand, making each piece from the edition unique."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Page/ShopArt.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Page/ShopArt.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopArt.vue?vue&type=template&id=01fea958& */ "./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958&");
/* harmony import */ var _ShopArt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopArt.vue?vue&type=script&lang=js& */ "./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopArt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Page/ShopArt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopArt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopArt.vue?vue&type=template&id=01fea958& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopHeader.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopHeader.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopHeader.vue?vue&type=template&id=266b1872&scoped=true& */ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true&");
/* harmony import */ var _ShopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& */ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "266b1872",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pagecomponents/ShopHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHeader.vue?vue&type=template&id=266b1872&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopVideo.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopVideo.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopVideo.vue?vue&type=template&id=55149226&scoped=true& */ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true&");
/* harmony import */ var _ShopVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopVideo.vue?vue&type=script&lang=js& */ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& */ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShopVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55149226",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pagecomponents/ShopVideo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopVideo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopVideo.vue?vue&type=template&id=55149226&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);