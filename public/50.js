(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/OtherSetting/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/OtherSetting/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      radio: 'local',
      radio2: '2',
      fileList2: []
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/setting/index', {
        upload: this.radio,
        register: this.radio2
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，修改成功！',
          type: 'success'
        }); // _this.$router.go(0);

      });
    },
    getToken: function getToken() {
      return localStorage.getItem('token');
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$get(this.ROOT_URL + "Admin/setting/index").then(function (res) {
      _this.radio2 = res.register.val;
      _this.radio = res.upload.val;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/OtherSetting/index.vue?vue&type=template&id=d3360abc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/OtherSetting/index.vue?vue&type=template&id=d3360abc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "index_main" }, [
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
        _c("div", { staticClass: "index_main_title" }, [_vm._v("其他设置")])
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
              _c("div", { staticClass: "input_lable" }, [_vm._v("上传设置：")])
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { staticStyle: { "margin-top": "6px" }, attrs: { span: 10 } },
              [
                _c(
                  "el-radio",
                  {
                    attrs: { label: "local" },
                    model: {
                      value: _vm.radio,
                      callback: function($$v) {
                        _vm.radio = $$v
                      },
                      expression: "radio"
                    }
                  },
                  [_vm._v("本地")]
                ),
                _vm._v(" "),
                _c(
                  "el-radio",
                  {
                    attrs: { label: "alioss" },
                    model: {
                      value: _vm.radio,
                      callback: function($$v) {
                        _vm.radio = $$v
                      },
                      expression: "radio"
                    }
                  },
                  [_vm._v("阿里云OSS")]
                ),
                _vm._v(" "),
                _c(
                  "el-radio",
                  {
                    attrs: { label: "qiniuoss" },
                    model: {
                      value: _vm.radio,
                      callback: function($$v) {
                        _vm.radio = $$v
                      },
                      expression: "radio"
                    }
                  },
                  [_vm._v("七牛云")]
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
          "el-row",
          { attrs: { gutter: 20 } },
          [
            _c("el-col", { attrs: { span: 3 } }, [
              _c("div", { staticClass: "input_lable" }, [_vm._v("注册设置：")])
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { staticStyle: { "margin-top": "6px" }, attrs: { span: 10 } },
              [
                _c(
                  "el-radio",
                  {
                    attrs: { label: "2" },
                    model: {
                      value: _vm.radio2,
                      callback: function($$v) {
                        _vm.radio2 = $$v
                      },
                      expression: "radio2"
                    }
                  },
                  [_vm._v("手机")]
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
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Admin/OtherSetting/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/Admin/OtherSetting/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d3360abc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d3360abc&scoped=true& */ "./resources/js/views/Admin/OtherSetting/index.vue?vue&type=template&id=d3360abc&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/OtherSetting/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d3360abc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d3360abc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d3360abc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/OtherSetting/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/OtherSetting/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Admin/OtherSetting/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/OtherSetting/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/OtherSetting/index.vue?vue&type=template&id=d3360abc&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/Admin/OtherSetting/index.vue?vue&type=template&id=d3360abc&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3360abc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d3360abc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/OtherSetting/index.vue?vue&type=template&id=d3360abc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3360abc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d3360abc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);