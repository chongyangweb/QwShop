(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Order/index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      order_no: '',
      dialogshow: false,
      delivery_no: '',
      order_id: '',
      order_type: '',
      date_picker: '',
      start_time: 0,
      end_time: 0
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

      _this.$post(this.ROOT_URL + 'Admin/order/index', {
        limit: this.page.limit,
        page: this.page.page,
        order_no: this.order_no,
        order_type: this.order_type,
        start_time: this.start_time,
        end_time: this.end_time
      }).then(function (res) {
        _this.lists = res.order_list;
        _this.page = res.page;
      });
    },
    getList: function getList() {
      var _this = this;

      _this.$post(this.ROOT_URL + 'Admin/order/index', {
        limit: this.page.limit,
        page: this.page.page
      }).then(function (res) {
        _this.lists = res.order_list;
        _this.page = res.page;
      });
    },
    // 打开快递
    open_dialog: function open_dialog(e) {
      this.dialogshow = true;
      this.order_id = e;
    },
    // 快递号添加
    add_delivery_no: function add_delivery_no(e) {
      if (this.$isEmpty(this.delivery_no)) {
        this.$message({
          message: '请认真填写订单号！',
          type: 'error'
        });
        return;
      }

      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/order/edit_delivery_no', {
        order_id: this.order_id,
        delivery_no: this.delivery_no
      }).then(function (res) {
        _this.$message({
          message: '恭喜，设置成功！',
          type: 'success'
        });

        return;
      });
    },
    // 时间选择改变
    date_picker_change: function date_picker_change(e) {
      this.start_time = e[0] / 1000;
      this.end_time = e[1] / 1000;
    }
  },
  created: function created() {
    this.getList();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/index.vue?vue&type=template&id=42ae9462&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Order/index.vue?vue&type=template&id=42ae9462&scoped=true& ***!
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
          _c("el-input", {
            staticClass: "search_input",
            attrs: { size: "small", placeholder: "请输入订单号" },
            model: {
              value: _vm.order_no,
              callback: function($$v) {
                _vm.order_no = $$v
              },
              expression: "order_no"
            }
          }),
          _vm._v(" "),
          _c(
            "el-select",
            {
              staticStyle: { "margin-right": "10px" },
              attrs: { placeholder: "请选择", size: "small" },
              model: {
                value: _vm.order_type,
                callback: function($$v) {
                  _vm.order_type = $$v
                },
                expression: "order_type"
              }
            },
            [
              _c("el-option", { attrs: { label: "订单状态", value: "" } }),
              _vm._v(" "),
              _c("el-option", {
                attrs: { label: "未支付", value: "pay_status" }
              }),
              _vm._v(" "),
              _c("el-option", {
                attrs: { label: "等待发货", value: "delivery_status" }
              }),
              _vm._v(" "),
              _c("el-option", {
                attrs: { label: "等待确认", value: "order_status" }
              }),
              _vm._v(" "),
              _c("el-option", {
                attrs: { label: "等待评论", value: "comment_status" }
              }),
              _vm._v(" "),
              _c("el-option", {
                attrs: { label: "完成订单", value: "comp_order" }
              }),
              _vm._v(" "),
              _c("el-option", {
                attrs: { label: "取消订单", value: "del_order" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-date-picker", {
            staticStyle: { "margin-right": "10px" },
            attrs: {
              size: "small",
              "value-format": "timestamp",
              type: "daterange",
              "range-separator": "至",
              "start-placeholder": "开始日期",
              "end-placeholder": "结束日期"
            },
            on: { change: _vm.date_picker_change },
            model: {
              value: _vm.date_picker,
              callback: function($$v) {
                _vm.date_picker = $$v
              },
              expression: "date_picker"
            }
          }),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { icon: "el-icon-search", plain: "" },
              on: { click: _vm.search }
            },
            [_vm._v("搜索")]
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
            attrs: { label: "产品", width: "70" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("img", {
                      attrs: {
                        width: "50px",
                        height: "50px",
                        src: scope.row.image
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
            attrs: { label: "订单号" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.row.order_no))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "支付状态" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.pay_status == 0
                      ? _c(
                          "div",
                          [
                            _c("el-tag", { attrs: { type: "info" } }, [
                              _vm._v("未支付")
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    scope.row.pay_status == 1
                      ? _c(
                          "div",
                          [
                            _c("el-tag", { attrs: { type: "success" } }, [
                              _vm._v("已经支付")
                            ])
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "订单状态" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.pay_status == 0 && scope.row.order_status == 0
                      ? _c(
                          "div",
                          [
                            _c("el-tag", { attrs: { type: "info" } }, [
                              _vm._v("等待支付")
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    scope.row.pay_status == 1 && scope.row.delivery_status == 0
                      ? _c(
                          "div",
                          [
                            _c("el-tag", { attrs: { type: "info" } }, [
                              _vm._v("等待发货")
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    scope.row.pay_status == 1 &&
                    scope.row.delivery_status == 1 &&
                    scope.row.order_status == 0
                      ? _c(
                          "div",
                          [
                            _c("el-tag", { attrs: { type: "info" } }, [
                              _vm._v("等待确认")
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    scope.row.pay_status == 1 &&
                    scope.row.delivery_status == 1 &&
                    scope.row.order_status == 1 &&
                    scope.row.comment_status == 0
                      ? _c(
                          "div",
                          [
                            _c("el-tag", { attrs: { type: "success" } }, [
                              _vm._v("等待评论")
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    scope.row.pay_status == 1 &&
                    scope.row.delivery_status == 1 &&
                    scope.row.order_status == 1 &&
                    scope.row.comment_status == 1
                      ? _c(
                          "div",
                          [
                            _c("el-tag", { attrs: { type: "success" } }, [
                              _vm._v("完成")
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    scope.row.order_status == 99
                      ? _c(
                          "div",
                          [
                            _c("el-tag", { attrs: { type: "danger" } }, [
                              _vm._v("取消")
                            ])
                          ],
                          1
                        )
                      : _vm._e()
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
                      "div",
                      {
                        staticStyle: { float: "left", "margin-right": "1rem" }
                      },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: { path: "/Admin/order/info/" + scope.row.id }
                            }
                          },
                          [
                            _c(
                              "el-button",
                              { attrs: { plain: "", icon: "el-icon-edit" } },
                              [_vm._v("查看")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    scope.row.pay_status == 1 && scope.row.delivery_status == 0
                      ? _c(
                          "div",
                          [
                            _c(
                              "el-button",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.open_dialog(scope.row.id)
                                  }
                                }
                              },
                              [_vm._v("发货设置")]
                            )
                          ],
                          1
                        )
                      : _vm._e()
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
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "填写快递单号", visible: _vm.dialogshow },
          on: {
            "update:visible": function($event) {
              _vm.dialogshow = $event
            }
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "快递单号", "label-width": "120px" } },
            [
              _c("el-input", {
                attrs: { autocomplete: "off" },
                model: {
                  value: _vm.delivery_no,
                  callback: function($$v) {
                    _vm.delivery_no = $$v
                  },
                  expression: "delivery_no"
                }
              })
            ],
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
                      _vm.dialogshow = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.add_delivery_no()
                    }
                  }
                },
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

/***/ "./resources/js/views/Admin/Order/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Admin/Order/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_42ae9462_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=42ae9462&scoped=true& */ "./resources/js/views/Admin/Order/index.vue?vue&type=template&id=42ae9462&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Order/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_42ae9462_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_42ae9462_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "42ae9462",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Order/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Order/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Admin/Order/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Order/index.vue?vue&type=template&id=42ae9462&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Admin/Order/index.vue?vue&type=template&id=42ae9462&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_42ae9462_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=42ae9462&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/index.vue?vue&type=template&id=42ae9462&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_42ae9462_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_42ae9462_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);