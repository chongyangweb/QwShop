(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      content: ''
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/goods_server/edit', {
        content: this.content
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，修改成功！',
          type: 'success'
        });

        _this.$router.go(-1);
      });
    },
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    onSuccess: function onSuccess(e) {
      this.thumb = e.thumb_path;
    },
    checked: function checked(id) {
      for (var i = 0; i < this.perssion.length; i++) {
        if (this.perssion[i] == id) {
          return true;
        }
      }
    },
    getToken: function getToken() {
      return localStorage.getItem('token');
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var E = __webpack_require__(/*! wangeditor */ "./node_modules/wangeditor/release/wangEditor.js"); // 使用 npm 安装


    E = new E('#editor');

    var _this = this;

    E.customConfig.onchange = function (html) {
      _this.content = html;
    };

    E.customConfig.uploadImgServer = this.ROOT_URL + 'Admin/Auto/content_upload?token=' + this.getToken();
    E.customConfig.uploadFileName = 'file';
    E.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    E.create();

    var _this = this;

    this.$get(this.ROOT_URL + "Admin/goods_server/edit").then(function (res) {
      _this.content = res.goods_server.content;
      E.txt.html(_this.content);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=template&id=aba05242&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=template&id=aba05242& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "index_main_title" }, [_vm._v("售后编辑")])
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
              _c("div", { staticClass: "input_lable" }, [_vm._v("内容")])
            ]),
            _vm._v(" "),
            _c("el-col", { attrs: { span: 18 } }, [
              _c("div", { attrs: { id: "editor" } }),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.content,
                    expression: "content"
                  }
                ],
                staticStyle: { display: "none" },
                domProps: { value: _vm.content },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.content = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("el-col", { attrs: { span: 13 } }, [
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

/***/ "./resources/js/views/Admin/GoodsServer/edit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/Admin/GoodsServer/edit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_aba05242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=aba05242& */ "./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=template&id=aba05242&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_aba05242___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_aba05242___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/GoodsServer/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=template&id=aba05242&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=template&id=aba05242& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_aba05242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=aba05242& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/GoodsServer/edit.vue?vue&type=template&id=aba05242&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_aba05242___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_aba05242___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);