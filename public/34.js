(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoodsArea/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GoodsArea/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lists: [],
      dialogFormVisible: false,
      page: [],
      name: '',
      radio1: '',
      input: '0'
    };
  },
  methods: {
    getList: function getList() {
      var _this = this;

      var id = this.$route.params.id;

      if (this.$isEmpty(id)) {
        id = 0;
      }

      _this.$post(this.ROOT_URL + 'Admin/goods_area/getArea', {
        id: id
      }).then(function (res) {
        _this.lists = res;
      });
    },
    onChange: function onChange(e) {
      console.log(e);
    },
    openDia: function openDia() {
      this.dialogFormVisible = true;
    },
    nextArea: function nextArea() {
      var id = this.radio1;

      if (this.$isEmpty(id)) {
        id = 0;
      }

      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/goods_area/getArea', {
        id: id
      }).then(function (res) {
        _this.lists = res;
      });
    },
    recArea: function recArea() {
      var _this = this;

      var id = 0;
      this.$post(this.ROOT_URL + 'Admin/goods_area/getArea', {
        id: id
      }).then(function (res) {
        _this.lists = res;
      });
    },
    editArea: function editArea() {
      var _this = this;

      var id = this.radio1;
      this.$post(this.ROOT_URL + 'Admin/goods_area/editArea', {
        id: id,
        user_id: this.input
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，添加成功！',
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoodsArea/index.vue?vue&type=template&id=b14d8e12&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/GoodsArea/index.vue?vue&type=template&id=b14d8e12&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
              staticStyle: { "margin-right": "1rem" },
              attrs: { type: "primary", icon: "el-icon-plus" },
              on: { click: _vm.openDia }
            },
            [_vm._v("修改代理")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticStyle: { "margin-right": "1rem" },
              attrs: { type: "success", icon: "el-icon-plus" },
              on: { click: _vm.nextArea }
            },
            [_vm._v("下级（市区县）")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "success", icon: "el-icon-plus" },
              on: { click: _vm.recArea }
            },
            [_vm._v("返回（省）")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "unline" }),
      _vm._v(" "),
      _vm._l(_vm.lists, function(v) {
        return _c(
          "el-radio",
          {
            staticStyle: { "margin-bottom": "1rem" },
            attrs: { label: v.area_id, border: "" },
            on: { change: _vm.onChange },
            model: {
              value: _vm.radio1,
              callback: function($$v) {
                _vm.radio1 = $$v
              },
              expression: "radio1"
            }
          },
          [
            _vm._v(_vm._s(v.name) + " - "),
            _c("font", { attrs: { color: v.user_id > 0 ? "#000;" : "red" } }, [
              _vm._v(_vm._s(v.user_id))
            ])
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "修改代理", visible: _vm.dialogFormVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogFormVisible = $event
            }
          }
        },
        [
          _c("el-input", {
            attrs: { placeholder: "请输入内容" },
            model: {
              value: _vm.input,
              callback: function($$v) {
                _vm.input = $$v
              },
              expression: "input"
            }
          }),
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
                { attrs: { type: "primary" }, on: { click: _vm.editArea } },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/GoodsArea/index.vue":
/*!************************************************!*\
  !*** ./resources/js/views/GoodsArea/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b14d8e12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b14d8e12&scoped=true& */ "./resources/js/views/GoodsArea/index.vue?vue&type=template&id=b14d8e12&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/GoodsArea/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b14d8e12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b14d8e12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b14d8e12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/GoodsArea/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/GoodsArea/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/GoodsArea/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoodsArea/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/GoodsArea/index.vue?vue&type=template&id=b14d8e12&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/GoodsArea/index.vue?vue&type=template&id=b14d8e12&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b14d8e12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b14d8e12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/GoodsArea/index.vue?vue&type=template&id=b14d8e12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b14d8e12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b14d8e12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);