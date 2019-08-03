(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/default2.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/default2.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {};
  },
  methods: {},
  mounted: function mounted() {
    /*ECharts图表*/
    var myChart = echarts__WEBPACK_IMPORTED_MODULE_0___default.a.init(document.getElementById('myChart'));
    myChart.setOption({
      title: {
        text: 'Echart入门'
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '直接访问',
        type: 'line',
        stack: '总量2',
        data: [320, 332, 301]
      }, {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901]
      }]
    });
    /*ECharts图表*/

    var myChart2 = echarts__WEBPACK_IMPORTED_MODULE_0___default.a.init(document.getElementById('myChart2'));
    myChart2.setOption({
      color: '#409EFF',
      title: {
        text: '销售趋势'
      },
      legend: {
        data: ['销量']
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '销量',
        type: 'bar',
        stack: '总量2',
        data: [320, 332, 901, 21, 180, 301, 301, 301, 301, 301]
      }]
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.index_main[data-v-18023190]{background: #666;margin-left: 15px;margin-right: 10px;margin-top:10px;border: 1px solid #e7eaec !important;padding-bottom: 80px;padding: 20px;}\n.unline[data-v-18023190]{margin:15px 0;}\n.default_program[data-v-18023190]{text-align: center;width: 100%;}\n.default_program ul li[data-v-18023190]{float: left;width: 22%;background: #f9f9f9;margin-right:4%; margin-bottom:10px;\n}\n.default_program ul li[data-v-18023190]:nth-child(4n){margin-right:0;}\n.default_program ul li[data-v-18023190]:hover{background: #f1f1f1}\n.default_program2 ul li[data-v-18023190]{float: left;width: 48%;background: #f9f9f9;margin-right:4%; margin-bottom:10px; height: 82px;padding: 10px;box-sizing: border-box;font-size: 12px;color:#999;}\n.default_program2 ul li[data-v-18023190]:nth-child(2n){margin-right:0;}\n.default_program2 ul li[data-v-18023190]:nth-child(3){width: 100%;}\n.default_program2 ul li[data-v-18023190]:hover{background: #f3f3f3}\n.default_program .i_backgraounds[data-v-18023190]{text-align: center;margin: 0 auto;display: block;padding: 5px 0;}\n.default_program2 p[data-v-18023190]{line-height: 55px;font-size: 22px;color:#303133;}\n.i_backgraounds i[data-v-18023190]{font-size: 28px;}\n.default_program p[data-v-18023190]{text-align: center;background: #fff;line-height: 30px;font-size:12px;clear: both;}\n.default_block_col[data-v-18023190]{margin-bottom: 20px;}\n.default_copyright ul li[data-v-18023190]{line-height: 66px;border-bottom: 1px solid #efefef;}\n.default_copyright ul li[data-v-18023190]:nth-child(3){border-bottom: none;}\n.default_copyright ul li span[data-v-18023190]{margin-right: 60px;}\n.default_tongbi_left[data-v-18023190]{float:left;}\n.default_tongbi_right[data-v-18023190]{float:left;margin-left:40px;}\n.default_tongbi[data-v-18023190]:after{clear:both;content:'';display: block;}\n.default_total[data-v-18023190]:after{clear:both;content:'';display: block;}\n.default_tongbi[data-v-18023190]{margin-top: 20px;}\n.default_day_sale[data-v-18023190]{margin-top: 15px;margin-bottom: 17px;}\n.default_tubiao[data-v-18023190]{width: 100%;;margin-bottom: 20px;}\n.default_hot_goods ul li[data-v-18023190] {margin-top: 20px;overflow: hidden;}\n.default_hot_goods ul li span[data-v-18023190]{border-radius: 50%;background: #f5f5f5;width: 20px;height: 20px;text-align: center;display: block;float: left;margin-right: 8px;}\n.default_hot_goods ul li:nth-child(1) span[data-v-18023190]{background: #314659;color:#fff;}\n.default_hot_goods ul li:nth-child(2) span[data-v-18023190]{background: #314659;color:#fff;}\n.default_hot_goods ul li:nth-child(3) span[data-v-18023190]{background: #314659;color:#fff;}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/default2.vue?vue&type=template&id=18023190&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/default2.vue?vue&type=template&id=18023190&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "index_main2" },
    [
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { staticClass: "default_block_col", attrs: { span: 8 } },
            [
              _c(
                "el-card",
                {
                  attrs: {
                    shadow: "hover",
                    "body-style": { padding: "15px 20px" }
                  }
                },
                [
                  _vm._v("\n\t\t\t  总销售额\n\t\t\t  "),
                  _c("i", {
                    staticClass: "el-icon-refresh",
                    staticStyle: {
                      float: "right",
                      margin: "3px 0 10px 0",
                      "font-size": "18px"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "unline" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "default_total" },
                    [
                      _c("font", { staticStyle: { "font-size": "30px" } }, [
                        _vm._v("￥ 21,200")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "default_tongbi" }, [
                        _c("div", { staticClass: "default_tongbi_left" }, [
                          _vm._v("周同比：10.25% "),
                          _c("i", {
                            staticClass: "el-icon-caret-top",
                            staticStyle: { color: "red" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "default_tongbi_right" }, [
                          _vm._v("日同比：10.25% "),
                          _c("i", {
                            staticClass: "el-icon-caret-bottom",
                            staticStyle: { color: "green" }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "unline" }),
                      _vm._v(" "),
                      _c("el-progress", { attrs: { percentage: 90 } }),
                      _vm._v(" "),
                      _c("div", { staticClass: "default_day_sale" }, [
                        _vm._v("日销售额：￥ 11,900")
                      ])
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { staticClass: "default_block_col", attrs: { span: 8 } },
            [
              _c(
                "el-card",
                {
                  attrs: {
                    shadow: "hover",
                    "body-style": { padding: "15px 20px" }
                  }
                },
                [
                  _vm._v("\n\t\t\t  订单信息\n\t\t\t  "),
                  _c("i", {
                    staticClass: "el-icon-refresh",
                    staticStyle: {
                      float: "right",
                      margin: "3px 0 10px 0",
                      "font-size": "18px"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "unline" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "default_program2" }, [
                    _c("ul", [
                      _c("li", [
                        _c(
                          "div",
                          { staticClass: "default_sq" },
                          [_c("el-tag", [_vm._v("等待付款")])],
                          1
                        ),
                        _c("p", [_vm._v("1,000")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "div",
                          { staticClass: "default_sq" },
                          [
                            _c("el-tag", { attrs: { type: "success" } }, [
                              _vm._v("完成订单")
                            ])
                          ],
                          1
                        ),
                        _c("p", [_vm._v("560")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "div",
                          { staticClass: "default_sq" },
                          [
                            _c("el-tag", { attrs: { type: "danger" } }, [
                              _vm._v("等待发货")
                            ])
                          ],
                          1
                        ),
                        _c("p", [_vm._v("1,000")])
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { staticClass: "default_block_col", attrs: { span: 8 } },
            [
              _c(
                "el-card",
                {
                  attrs: {
                    shadow: "hover",
                    "body-style": { padding: "15px 20px" }
                  }
                },
                [
                  _vm._v("\n\t\t\t    版本信息\n\t\t\t    "),
                  _c("div", {
                    staticClass: "unline",
                    staticStyle: { "margin-bottom": "0px" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "default_copyright" }, [
                    _c("ul", [
                      _c(
                        "li",
                        [
                          _c("span", [_vm._v("当前版本：")]),
                          _c("el-tag", { attrs: { type: "info" } }, [
                            _vm._v("v 1.0.0")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", [_vm._v("前端框架：")]),
                        _vm._v("Element Ui")
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c("span", [_vm._v("下载Apk：")]),
                          _c(
                            "el-button",
                            {
                              attrs: {
                                type: "primary",
                                size: "mini",
                                icon: "el-icon-download"
                              }
                            },
                            [_vm._v("点击下载")]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "default_tubiao" },
        [
          _c(
            "el-card",
            {
              attrs: { shadow: "hover", "body-style": { padding: "15px 20px" } }
            },
            [
              _vm._v("\n\t  总销售额\n\t  "),
              _c("i", {
                staticClass: "el-icon-refresh",
                staticStyle: {
                  float: "right",
                  margin: "3px 0 10px 0",
                  "font-size": "18px"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "unline" }),
              _vm._v(" "),
              _c("div", { staticClass: "default_total" }, [
                _c("div", {
                  style: { width: "60%", height: "250px", float: "left" },
                  attrs: { id: "myChart2" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "default_hot_goods",
                    staticStyle: {
                      float: "left",
                      "margin-left": "3%",
                      width: "37%"
                    }
                  },
                  [
                    _c("div", [_vm._v("门店销售额排名")]),
                    _vm._v(" "),
                    _c("ul", [
                      _c("li", [
                        _c(
                          "div",
                          { staticStyle: { color: "#999", float: "right" } },
                          [_vm._v("12,000")]
                        ),
                        _c("span", [_vm._v("1")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "70%",
                              overflow: "hidden",
                              height: "20px"
                            }
                          },
                          [_vm._v("北京华为电信手机Mate 20 Pro")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "div",
                          { staticStyle: { color: "#999", float: "right" } },
                          [_vm._v("12,000")]
                        ),
                        _c("span", [_vm._v("2")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "70%",
                              overflow: "hidden",
                              height: "20px"
                            }
                          },
                          [_vm._v("北京华为电信手机Mate 20 Pro")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "div",
                          { staticStyle: { color: "#999", float: "right" } },
                          [_vm._v("12,000")]
                        ),
                        _c("span", [_vm._v("3")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "70%",
                              overflow: "hidden",
                              height: "20px"
                            }
                          },
                          [_vm._v("北京华为电信手机Mate 20 Pro")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "div",
                          { staticStyle: { color: "#999", float: "right" } },
                          [_vm._v("12,000")]
                        ),
                        _c("span", [_vm._v("4")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "70%",
                              overflow: "hidden",
                              height: "20px"
                            }
                          },
                          [_vm._v("北京华为电信手机Mate 20 Pro")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "div",
                          { staticStyle: { color: "#999", float: "right" } },
                          [_vm._v("12,000")]
                        ),
                        _c("span", [_vm._v("5")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "70%",
                              overflow: "hidden",
                              height: "20px"
                            }
                          },
                          [_vm._v("北京华为电信手机Mate 20 Pro")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "div",
                          { staticStyle: { color: "#999", float: "right" } },
                          [_vm._v("12,000")]
                        ),
                        _c("span", [_vm._v("6")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              width: "70%",
                              overflow: "hidden",
                              height: "20px"
                            }
                          },
                          [_vm._v("北京华为电信手机Mate 20 Pro")]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c(
            "el-col",
            { staticClass: "default_block_col", attrs: { span: 16 } },
            [
              _c(
                "el-card",
                {
                  attrs: {
                    shadow: "hover",
                    "body-style": { padding: "15px 20px" }
                  }
                },
                [
                  _vm._v("\n\t\t\t    我的软件\n\t\t\t    "),
                  _c("i", {
                    staticClass: "el-icon-refresh",
                    staticStyle: {
                      float: "right",
                      margin: "3px 0 10px 0",
                      "font-size": "18px"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "unline" }),
                  _vm._v(" "),
                  _c("div", {
                    style: { width: "100%", height: "250px" },
                    attrs: { id: "myChart" }
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { staticClass: "default_block_col", attrs: { span: 8 } },
            [
              _c(
                "el-card",
                {
                  attrs: {
                    shadow: "hover",
                    "body-style": { padding: "15px 20px" }
                  }
                },
                [
                  _vm._v("\n\t\t\t  授权信息\n\t\t\t  "),
                  _c("i", {
                    staticClass: "el-icon-refresh",
                    staticStyle: {
                      float: "right",
                      margin: "3px 0 10px 0",
                      "font-size": "18px"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "unline" })
                ]
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

/***/ "./resources/js/views/default2.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/default2.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default2_vue_vue_type_template_id_18023190_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default2.vue?vue&type=template&id=18023190&scoped=true& */ "./resources/js/views/default2.vue?vue&type=template&id=18023190&scoped=true&");
/* harmony import */ var _default2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default2.vue?vue&type=script&lang=js& */ "./resources/js/views/default2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _default2_vue_vue_type_style_index_0_id_18023190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css& */ "./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _default2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _default2_vue_vue_type_template_id_18023190_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _default2_vue_vue_type_template_id_18023190_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18023190",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/default2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/default2.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/default2.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./default2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/default2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_id_18023190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/default2.vue?vue&type=style&index=0&id=18023190&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_id_18023190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_id_18023190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_id_18023190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_id_18023190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_style_index_0_id_18023190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/default2.vue?vue&type=template&id=18023190&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/default2.vue?vue&type=template&id=18023190&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_template_id_18023190_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./default2.vue?vue&type=template&id=18023190&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/default2.vue?vue&type=template&id=18023190&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_template_id_18023190_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default2_vue_vue_type_template_id_18023190_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);