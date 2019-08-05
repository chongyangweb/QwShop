(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      list: [],
      name: '',
      delivery_price: '',
      parent: null,
      dialogFormVisible: false,
      selects: '广东省',
      areaList: [],
      is_sort: 0,
      content: []
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var area = '';
      var price = '';
      this.content = [];

      for (var i = 0; i < this.list.length; i++) {
        area = this.$refs.area.childNodes[i].childNodes[3].innerText;
        price = this.$refs.area.childNodes[i].childNodes[1].childNodes[0].childNodes[1].value;
        this.content.push({
          price: price,
          area: area
        });
      } // area.childNodes[""0""].childNodes[3].innerText
      // area.childNodes[""0""].childNodes[1].childNodes[""0""].childNodes[1].value
      // console.log(this.$refs.area);


      this.$post(this.ROOT_URL + 'Admin/goods_delivery/add', {
        name: this.name,
        content: this.content
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，添加成功！',
          type: 'success'
        });

        _this.$router.go(-1);
      });
    },
    addArea: function addArea() {
      this.list.push({
        price: '',
        area: ''
      });
    },
    selectArea: function selectArea(k) {
      this.dialogFormVisible = true;

      var _this = this;

      this.$get(_this.ROOT_URL + "Admin/goods_area/getArea", {
        id: 0
      }).then(function (res) {
        _this.areaList = res;
        _this.is_sort = k;
      });
    },
    c_area: function c_area() {
      var _this = this;

      this.dialogFormVisible = false;
      this.list[this.is_sort].area = this.selects; // console.log(this.list);
    },
    delArea: function delArea(k) {
      this.list.splice(k, 1);
    }
  },
  created: function created() {
    // console.log(this.$refs);
    var _this = this;

    _this.$get(_this.ROOT_URL + "Admin/role/add").then(function (res) {
      _this.parent = res;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-select-dropdown__wrap{margin-bottom: 0px;}\n.el-select-dropdown{padding-bottom: 15px;}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=template&id=32dfb7cd&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=template&id=32dfb7cd& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "index_main" },
    [
      _c(
        "div",
        { staticClass: "main_btn_left" },
        [
          _c(
            "el-button",
            {
              staticClass: "main_del_right",
              attrs: { icon: "el-icon-back" },
              on: {
                click: function($event) {
                  return _vm.$router.go(-1)
                }
              }
            },
            [_vm._v("返回")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "index_main_title" }, [
            _vm._v("快递模版添加")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "unline" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main_content" },
        [
          _c(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              _c("el-col", { attrs: { span: 3 } }, [
                _c("div", { staticClass: "input_lable" }, [_vm._v("模版名")])
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 10 } },
                [
                  _c("el-input", {
                    attrs: { size: "small", placeholder: "请输入内容" },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 11 } }, [
                _c("div", { staticClass: "input_notice" })
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "unline2" }),
          _vm._v(" "),
          _c(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              _c("el-col", { attrs: { span: 3 } }, [
                _c("div", { staticClass: "input_lable" }, [_vm._v("添加地区")])
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 10 } },
                [
                  _c(
                    "el-button",
                    { attrs: { type: "success" }, on: { click: _vm.addArea } },
                    [_vm._v("添加地区")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 11 } }, [
                _c("div", { staticClass: "input_notice" })
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "unline2" }),
          _vm._v(" "),
          _c(
            "div",
            { ref: "area" },
            [
              _vm._l(_vm.list, function(v, k) {
                return _c(
                  "el-row",
                  {
                    staticStyle: { "margin-bottom": "1rem" },
                    attrs: { gutter: 20 }
                  },
                  [
                    _c("el-col", { attrs: { span: 3 } }, [
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("地区")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 3 } },
                      [
                        _c("el-input", {
                          attrs: {
                            size: "small",
                            type: "number",
                            placeholder: "运费"
                          },
                          model: {
                            value: v.price,
                            callback: function($$v) {
                              _vm.$set(v, "price", $$v)
                            },
                            expression: "v.price"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 2 } },
                      [
                        _c(
                          "el-button",
                          {
                            on: {
                              click: function($event) {
                                return _vm.selectArea(k)
                              }
                            }
                          },
                          [_vm._v("选择地区")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("el-col", { attrs: { span: 2 } }, [
                      _vm._v(_vm._s(v.area))
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 2 } },
                      [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "danger" },
                            on: {
                              click: function($event) {
                                return _vm.delArea(k)
                              }
                            }
                          },
                          [_vm._v("删除")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("el-col", { attrs: { span: 12 } }, [
                      _c("div", { staticClass: "input_notice" })
                    ])
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("div", { staticClass: "unline2" })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              _c("el-col", { attrs: { span: 3 } }, [_vm._v(" ")]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 4 } },
                [
                  _c(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: _vm.submit } },
                    [_vm._v("提 交")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 17 } }, [
                _c("div", { staticClass: "input_notice" })
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "选择地区", visible: _vm.dialogFormVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogFormVisible = $event
            }
          }
        },
        [
          _c(
            "el-select",
            {
              attrs: { placeholder: "请选择活动区域" },
              model: {
                value: _vm.selects,
                callback: function($$v) {
                  _vm.selects = $$v
                },
                expression: "selects"
              }
            },
            _vm._l(_vm.areaList, function(v) {
              return _c("el-option", {
                attrs: { label: v.name, value: v.name }
              })
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.dialogFormVisible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.c_area } },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Admin/GoodsDelivery/add.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/Admin/GoodsDelivery/add.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_32dfb7cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=32dfb7cd& */ "./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=template&id=32dfb7cd&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_32dfb7cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_32dfb7cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/GoodsDelivery/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=template&id=32dfb7cd&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=template&id=32dfb7cd& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_32dfb7cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=32dfb7cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsDelivery/add.vue?vue&type=template&id=32dfb7cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_32dfb7cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_32dfb7cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);