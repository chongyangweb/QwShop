(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Goods/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Goods/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
      lists: [],
      ids: null,
      page: [],
      title: '',
      is_free: '',
      is_sale: ''
    };
  },
  methods: {
    handleCheckAllChange: function handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange: function handleCheckedCitiesChange(value) {
      var checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    changeFun: function changeFun(val) {
      this.ids = null;

      if (val.length > 0) {
        var ids = '';

        for (var i = 0; i < val.length; i++) {
          ids = ids + val[i]['id'] + ',';
        }

        this.ids = ids;
      }
    },
    del: function del() {
      var _this = this;

      this.ids = this.ids.substr(0, this.ids.length - 1);
      this.$post(this.ROOT_URL + 'Admin/goods/del', {
        id: this.ids
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，删除成功！',
          type: 'success'
        });

        _this.getList();
      });
    },
    size_change: function size_change(val) {
      this.page.limit = val;
      this.getList();
    },
    current_change: function current_change(val) {
      this.page.page = val;
      this.getList();
    },
    search: function search() {
      var _this = this;

      _this.$post(this.ROOT_URL + 'Admin/goods/index', {
        limit: this.page.limit,
        page: this.page.page,
        title: this.title,
        is_free: this.is_free,
        is_sale: this.is_sale
      }).then(function (res) {
        _this.lists = res.data;
        _this.page = res.page;
      });
    },
    getList: function getList() {
      var _this = this;

      _this.$post(this.ROOT_URL + 'Admin/goods/index', {
        limit: this.page.limit,
        page: this.page.page
      }).then(function (res) {
        _this.lists = res.data;
        _this.page = res.page;
      });
    },
    // 上架
    onSale: function onSale(id) {
      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/goods/onSale', {
        id: id
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，修改成功！',
          type: 'success'
        });

        _this.getList();
      });
    },
    // 变成免单
    onFree: function onFree(id) {
      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/goods/onFree', {
        id: id
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，修改成功！',
          type: 'success'
        });

        _this.getList();
      });
    }
  },
  created: function created() {
    this.getList();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Goods/index.vue?vue&type=template&id=c9e38b2c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Goods/index.vue?vue&type=template&id=c9e38b2c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            "router-link",
            {
              staticClass: "admin_fff_btn",
              attrs: { to: { name: "goods_add" } }
            },
            [
              _c(
                "el-button",
                { attrs: { type: "primary", icon: "el-icon-plus" } },
                [_vm._v("添加")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("el-input", {
            staticClass: "search_input",
            attrs: { size: "small", placeholder: "请输入标题" },
            model: {
              value: _vm.title,
              callback: function($$v) {
                _vm.title = $$v
              },
              expression: "title"
            }
          }),
          _vm._v(" "),
          _c(
            "el-select",
            {
              staticStyle: { "margin-right": "10px" },
              attrs: { placeholder: "请选择", size: "small" },
              model: {
                value: _vm.is_free,
                callback: function($$v) {
                  _vm.is_free = $$v
                },
                expression: "is_free"
              }
            },
            [
              _c("el-option", {
                key: "",
                attrs: { label: "是否免单", value: "" }
              }),
              _vm._v(" "),
              _c("el-option", {
                key: "1",
                attrs: { label: "免单", value: "1" }
              }),
              _vm._v(" "),
              _c("el-option", {
                key: "0",
                attrs: { label: "非免单", value: "0" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-select",
            {
              staticStyle: { "margin-right": "10px" },
              attrs: { placeholder: "请选择", size: "small" },
              model: {
                value: _vm.is_sale,
                callback: function($$v) {
                  _vm.is_sale = $$v
                },
                expression: "is_sale"
              }
            },
            [
              _c("el-option", {
                key: "",
                attrs: { label: "是否上架", value: "" }
              }),
              _vm._v(" "),
              _c("el-option", {
                key: "1",
                attrs: { label: "上架", value: "1" }
              }),
              _vm._v(" "),
              _c("el-option", {
                key: "0",
                attrs: { label: "下架", value: "0" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { icon: "el-icon-search", plain: "" },
              on: { click: _vm.search }
            },
            [_vm._v("搜索")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticClass: "main_del_right",
              attrs: { icon: "el-icon-delete", type: "danger" },
              on: { click: _vm.del }
            },
            [_vm._v("批量删除")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.ids,
            expression: "ids"
          }
        ],
        attrs: { type: "hidden", value: "" },
        domProps: { value: _vm.ids },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.ids = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "unline" }),
      _vm._v(" "),
      _c(
        "el-table",
        {
          ref: "multipleTable",
          staticStyle: { width: "100%" },
          attrs: { data: _vm.lists, "tooltip-effect": "dark", size: "medium" },
          on: { "selection-change": _vm.changeFun }
        },
        [
          _vm._v("‘\n\n\t\t\t"),
          _c("el-table-column", { attrs: { type: "selection", width: "55" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "#", width: "80" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.row.id))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "产品", width: "80" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("img", {
                      attrs: {
                        width: "50px",
                        height: "50px",
                        src: scope.row.images.split(",")[0]
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "标题" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.row.title))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "免单产品", width: "100" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("div", {
                      class: scope.row.is_free ? "success_rand" : "error_rand",
                      on: {
                        click: function($event) {
                          return _vm.onFree(scope.row.id)
                        }
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "上架", width: "80" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("div", {
                      class: scope.row.is_sale ? "success_rand" : "error_rand",
                      on: {
                        click: function($event) {
                          return _vm.onSale(scope.row.id)
                        }
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "加入时间" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(_vm._s(_vm._f("formatDate")(scope.row.add_time)))
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "goods_edit",
                            params: { id: scope.row.id }
                          }
                        }
                      },
                      [
                        _c(
                          "el-button",
                          { attrs: { plain: "", icon: "el-icon-edit" } },
                          [_vm._v("编辑")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "fy" },
        [
          _c("el-pagination", {
            attrs: {
              medium: "",
              layout: "total, sizes, prev, pager",
              total: _vm.page.count,
              "page-size": _vm.page.limit,
              "current-page": _vm.page.page
            },
            on: {
              "size-change": _vm.size_change,
              "current-change": _vm.current_change
            }
          })
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

/***/ "./resources/js/views/Admin/Goods/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Admin/Goods/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c9e38b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c9e38b2c&scoped=true& */ "./resources/js/views/Admin/Goods/index.vue?vue&type=template&id=c9e38b2c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Goods/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c9e38b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_c9e38b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c9e38b2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Goods/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Goods/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Admin/Goods/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Goods/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Goods/index.vue?vue&type=template&id=c9e38b2c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Admin/Goods/index.vue?vue&type=template&id=c9e38b2c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c9e38b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c9e38b2c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Goods/index.vue?vue&type=template&id=c9e38b2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c9e38b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c9e38b2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);