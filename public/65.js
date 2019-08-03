(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product/add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product/add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: '',
      content: '',
      is_hot: '0',
      is_top: '0',
      thumb: '',
      author: 'Admin',
      parent: null,
      cid: '0',
      fileList2: []
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/product/add', {
        title: this.title,
        content: this.content,
        is_hot: this.is_hot,
        is_top: this.is_top,
        thumb: this.thumb,
        cid: this.cid,
        author: this.author
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，添加成功！',
          type: 'success'
        });

        _this.$router.go(-1);
      });
    },
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    onSuccess: function onSuccess(e) {
      console.log(e);
      this.thumb = e.thumb_path;
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

    _this.$get(_this.ROOT_URL + "Admin/product/add").then(function (res) {
      _this.parent = res.columns;
    });
  },
  handleRemove: function handleRemove(file, fileList) {
    console.log(file, fileList);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product/add.vue?vue&type=template&id=6ffc0ab2&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product/add.vue?vue&type=template&id=6ffc0ab2& ***!
  \*********************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "index_main_title" }, [_vm._v("产品添加")])
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
              _c("div", { staticClass: "input_lable" }, [_vm._v("标题")])
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { attrs: { span: 10 } },
              [
                _c("el-input", {
                  attrs: { size: "small", placeholder: "请输入内容" },
                  model: {
                    value: _vm.title,
                    callback: function($$v) {
                      _vm.title = $$v
                    },
                    expression: "title"
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
              _c("div", { staticClass: "input_lable" }, [_vm._v("父栏目")])
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { attrs: { span: 10 } },
              [
                _c(
                  "el-select",
                  {
                    attrs: { size: "small", placeholder: "请选择" },
                    model: {
                      value: _vm.cid,
                      callback: function($$v) {
                        _vm.cid = $$v
                      },
                      expression: "cid"
                    }
                  },
                  [
                    _c("el-option", { attrs: { value: "0", label: "无栏目" } }),
                    _vm._v(" "),
                    _vm._l(_vm.parent, function(v) {
                      return _c("el-option", {
                        attrs: { value: v.id, label: v.name }
                      })
                    })
                  ],
                  2
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
              _c("div", { staticClass: "input_lable" }, [_vm._v("作者")])
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { attrs: { span: 10 } },
              [
                _c("el-input", {
                  attrs: { size: "small", placeholder: "请输入内容" },
                  model: {
                    value: _vm.author,
                    callback: function($$v) {
                      _vm.author = $$v
                    },
                    expression: "author"
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
              _c("div", { staticClass: "input_lable" }, [_vm._v("缩略图")])
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { attrs: { span: 10 } },
              [
                _c(
                  "el-upload",
                  {
                    staticClass: "upload-demo",
                    attrs: {
                      action:
                        _vm.ROOT_URL +
                        "Admin/product/thumb?token=" +
                        _vm.getToken(),
                      "on-remove": _vm.handleRemove,
                      "file-list": _vm.fileList2,
                      "on-success": _vm.onSuccess,
                      "limit:1": "",
                      "list-type": "picture"
                    }
                  },
                  [
                    _c(
                      "el-button",
                      { attrs: { size: "small", type: "primary" } },
                      [_vm._v("点击上传")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "el-upload__tip",
                        attrs: { slot: "tip" },
                        slot: "tip"
                      },
                      [_vm._v("只能上传jpg/png/gif文件，且不超过500kb")]
                    )
                  ],
                  1
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
            _c("el-col", { attrs: { span: 3 } }, [
              _c("div", { staticClass: "input_lable" }, [_vm._v("热门")])
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { attrs: { span: 10 } },
              [
                _c(
                  "el-select",
                  {
                    attrs: { size: "small", placeholder: "请选择" },
                    model: {
                      value: _vm.is_hot,
                      callback: function($$v) {
                        _vm.is_hot = $$v
                      },
                      expression: "is_hot"
                    }
                  },
                  [
                    _c("el-option", { attrs: { value: "0", label: "否" } }),
                    _vm._v(" "),
                    _c("el-option", { attrs: { value: "1", label: "是" } })
                  ],
                  1
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
              _c("div", { staticClass: "input_lable" }, [_vm._v("置顶")])
            ]),
            _vm._v(" "),
            _c(
              "el-col",
              { attrs: { span: 10 } },
              [
                _c(
                  "el-select",
                  {
                    attrs: { size: "small", placeholder: "请选择" },
                    model: {
                      value: _vm.is_top,
                      callback: function($$v) {
                        _vm.is_top = $$v
                      },
                      expression: "is_top"
                    }
                  },
                  [
                    _c("el-option", { attrs: { value: "0", label: "否" } }),
                    _vm._v(" "),
                    _c("el-option", { attrs: { value: "1", label: "是" } })
                  ],
                  1
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

/***/ "./resources/js/views/Product/add.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Product/add.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_6ffc0ab2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=6ffc0ab2& */ "./resources/js/views/Product/add.vue?vue&type=template&id=6ffc0ab2&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/views/Product/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_6ffc0ab2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_6ffc0ab2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/add.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Product/add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product/add.vue?vue&type=template&id=6ffc0ab2&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Product/add.vue?vue&type=template&id=6ffc0ab2& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_6ffc0ab2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=6ffc0ab2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product/add.vue?vue&type=template&id=6ffc0ab2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_6ffc0ab2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_6ffc0ab2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);