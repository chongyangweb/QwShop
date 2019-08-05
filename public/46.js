(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Goods/edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Goods/edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      goods_no: '',
      sub_title: '',
      content: '',
      num: '9999',
      is_hot: '0',
      is_top: '0',
      is_sale: '1',
      brand_id: '0',
      price: '0',
      thumb: '',
      parent: null,
      brand_parent: null,
      cid: '0',
      fileList2: [],
      tabPosition: 'left',
      selects: 'first',
      attr: [],
      attrPrice: [],
      user_id: '',
      goods_id: ''
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/goods/edit/' + this.$route.params.id, {
        title: this.title,
        goods_no: this.goods_no,
        brand_id: this.brand_id,
        price: this.price,
        content: this.content,
        num: this.num,
        is_hot: this.is_hot,
        is_top: this.is_top,
        thumb: this.thumb,
        cid: this.cid,
        user_id: this.user_id,
        sub_title: this.sub_title,
        is_sale: this.is_sale
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，添加成功！',
          type: 'success'
        });

        _this.$router.go(-1);
      });
    },
    handleRemove: function handleRemove(file, fileList) {
      console.log(fileList);
      this.thumb = '';

      for (var i = 0; i < fileList.length; i++) {
        console.log(fileList[i]);

        if (this.thumb == '') {
          this.thumb = fileList[i].url;
        } else {
          this.thumb = this.thumb + ',' + fileList[i].url;
        }
      }
    },
    onSuccess: function onSuccess(e) {
      if (this.thumb == '') {
        this.thumb = e.thumb_path;
      } else {
        this.thumb = this.thumb + ',' + e.thumb_path;
      }

      console.log(this.thumb);
    },
    nextto: function nextto() {
      var _this = this;

      this.$post(this.ROOT_URL + 'Admin/goods/add', {
        title: this.title,
        goods_no: this.goods_no,
        brand_id: this.brand_id,
        price: this.price,
        content: this.content,
        is_hot: this.is_hot,
        is_top: this.is_top,
        num: this.num,
        thumb: this.thumb,
        cid: this.cid,
        user_id: this.user_id,
        sub_title: this.sub_title,
        is_sale: this.is_sale
      }).then(function (res) {
        _this.$message({
          message: '恭喜你，添加成功！',
          type: 'success'
        });

        _this.goods_id = res;
      });
      this.selects = 'sec';
    },
    nextth: function nextth() {
      var _this = this;

      var nexts = true; // _this.$message({
      //    message: '清空旧SKU成功！',
      //    type: 'success'
      //  });

      if (this.attr.length == 0) {
        nexts = false;
        this.$message({
          message: '下一步异常，认真填写规格！',
          type: 'error'
        });
      }

      var attr = [];

      for (var i = 0; i < this.attr.length; i++) {
        var guige = this.$refs.attr[i].$el.children[1].children[0].childNodes[1].value;
        var canshu = this.$refs.attr[i].$el.children[3].children[0].childNodes[1].value;

        if (guige == '' || canshu == '') {
          this.$message({
            message: '下一步异常，认真填写规格！',
            type: 'error'
          });
          nexts = false;
          break;
        } else {
          attr.push({
            guige: guige,
            canshu: canshu
          });
        }
      } // console.log(attr);


      if (nexts) {
        var f = [];
        var s = [];
        var attrList = [];

        for (var i = 0; i < attr.length; i++) {
          s = attr[i].canshu.split(',');
          f = this.getMn(f, s);
        } // this.attrPrice = f;
        // console.log(f);


        this.attrPrice = [];

        for (var i = 0; i < f.length; i++) {
          this.attrPrice.push({
            name: f[i]
          });
        }

        var guige = '';
        var canshu = '';
        var goods_id = '';

        for (var g = 0; g < attr.length; g++) {
          if (guige == '') {
            guige = attr[g].guige;
          } else {
            guige = guige + ':' + attr[g].guige;
          }

          if (canshu == '') {
            canshu = attr[g].canshu;
          } else {
            canshu = canshu + ':' + attr[g].canshu;
          }

          if (goods_id == '') {
            goods_id = this.goods_id;
          } else {
            goods_id = goods_id + ':' + this.goods_id;
          }
        }

        if (this.goods_id == '') {
          this.$message({
            message: '非法异常，请刷新后重新添加商品！',
            type: 'error'
          });
        } else {
          // 一旦规格有所更改清空所有属性
          this.$get(_this.ROOT_URL + "Admin/goods_spec/goods_spec_del/" + this.$route.params.id).then(function (res) {
            _this.$get(_this.ROOT_URL + "Admin/goods_attr/goods_attr_del/" + _this.$route.params.id).then(function (res) {
              _this.$post(_this.ROOT_URL + 'Admin/goods_attr/add', {
                goods_id: goods_id,
                name: guige,
                val: canshu
              }).then(function (res) {
                _this.$message({
                  message: '恭喜你，规格添加成功！',
                  type: 'success'
                });
              });
            });
          });
        }

        this.selects = 'thr';
      }
    },
    nextfo: function nextfo() {
      // console.log(this.$refs.spec);
      // console.log(this.$refs.spec[0].$el.children[0].children[0].childNodes[1].innerText);
      // console.log(this.$refs.spec[0].$el.children[2].children[0].childNodes[1].value);
      // console.log(this.$refs.spec[0].$el.children[4].children[0].childNodes[1].value);
      console.log(this.$refs.spec[0].$el.children[5].children[0].childNodes[0].value);
      console.log(this.attrPrice);

      var _this = this;

      var sku = '';
      var price = '';
      var num = '';
      var goods_id = '';
      var spec_id = '';

      for (var i = 0; i < this.attrPrice.length; i++) {
        if (sku == '') {
          sku = this.$refs.spec[i].$el.children[0].children[0].childNodes[1].innerText;
        } else {
          sku = sku + ':' + this.$refs.spec[i].$el.children[0].children[0].childNodes[1].innerText;
        }

        if (price == '') {
          price = this.$refs.spec[i].$el.children[2].children[0].childNodes[1].value;
        } else {
          price = price + ':' + this.$refs.spec[i].$el.children[2].children[0].childNodes[1].value;
        }

        if (num == '') {
          num = this.$refs.spec[i].$el.children[4].children[0].childNodes[1].value;
        } else {
          num = num + ':' + this.$refs.spec[i].$el.children[4].children[0].childNodes[1].value;
        }

        if (goods_id == '') {
          goods_id = this.goods_id;
        } else {
          goods_id = goods_id + ':' + this.goods_id;
        }

        if (this.$refs.spec[i].$el.children[5].children[0].childNodes[0].value == '') {
          spec_id = '';
        } else {
          if (spec_id == '') {
            spec_id = this.$refs.spec[i].$el.children[5].children[0].childNodes[0].value;
          } else {
            spec_id = spec_id + ':' + this.$refs.spec[i].$el.children[5].children[0].childNodes[0].value;
          }
        }
      }

      if (spec_id != '') {
        this.$post(this.ROOT_URL + 'Admin/goods_spec/edit', {
          goods_id: goods_id,
          price: price,
          num: num,
          spec_id: spec_id
        }).then(function (res) {
          _this.$message({
            message: '恭喜你，SKU修改成功！',
            type: 'success'
          });

          _this.$router.go(-1);
        });
      } else {
        this.$post(this.ROOT_URL + 'Admin/goods_spec/add', {
          goods_id: goods_id,
          name: sku,
          price: price,
          num: num
        }).then(function (res) {
          _this.$message({
            message: '恭喜你，SKU添加成功！',
            type: 'success'
          });

          _this.$router.go(-1);
        });
      }
    },
    addAttr: function addAttr() {
      this.attr.push({});
    },
    delAttr: function delAttr(k) {
      console.log(k);
      this.attr.splice(k, 1);
    },
    getMn: function getMn(m, n) {
      var arr = [];

      if (m.length == 0) {
        return n;
      }

      for (var i = 0; i < m.length; i++) {
        for (var a = 0; a < n.length; a++) {
          arr.push(m[i] + ',' + n[a]);
        }
      }

      return arr;
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

    _this.$get(_this.ROOT_URL + "Admin/goods/edit/" + this.$route.params.id).then(function (res) {
      _this.brand_parent = res.goods_brand;
      _this.parent = res.goods_cat;
      _this.user_id = res.user_id;
      _this.title = res.info.title;
      _this.goods_no = res.info.goods_no;
      _this.sub_title = res.info.sub_title;
      _this.content = res.info.content;
      _this.is_hot = res.info.is_hot + '';

      _this.fileList2.push({
        name: '',
        url: res.info.avatar
      });

      _this.is_top = res.info.is_top + '';
      _this.is_sale = res.info.is_sale + '';
      _this.thumb = res.info.images;
      _this.price = res.info.price;
      _this.num = res.info.num;
      _this.goods_id = res.info.id;
      _this.attr = res.goods_attr;
      _this.attrPrice = res.goods_spec;

      if (res.info.cid != 0) {
        _this.cid = res.info.cid;
      }

      if (res.info.brand_id != 0) {
        _this.brand_id = res.info.brand_id;
      }

      var images = res.info.images.split(',');
      console.log(_this.fileList2);
      _this.fileList2 = [];

      for (var i = 0; i < images.length; i++) {
        _this.fileList2.push({
          name: '123',
          url: images[i]
        });
      }

      E.txt.html(_this.content);
    });
  },
  handleRemove: function handleRemove(file, fileList) {
    console.log(file, fileList);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Goods/edit.vue?vue&type=template&id=1ba7f3a2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Goods/edit.vue?vue&type=template&id=1ba7f3a2& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "index_main_title" }, [_vm._v("商品添加")])
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
          "el-tabs",
          {
            attrs: { "tab-position": _vm.tabPosition },
            model: {
              value: _vm.selects,
              callback: function($$v) {
                _vm.selects = $$v
              },
              expression: "selects"
            }
          },
          [
            _c(
              "el-tab-pane",
              { attrs: { label: "商品信息", name: "first" } },
              [
                _c(
                  "el-row",
                  { attrs: { gutter: 20 } },
                  [
                    _c("el-col", { attrs: { span: 3 } }, [
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("标题")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 10 } },
                      [
                        _c("el-input", {
                          attrs: { size: "small", placeholder: "请输入标题" },
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("副标题")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 10 } },
                      [
                        _c("el-input", {
                          attrs: { size: "small", placeholder: "请输入副标题" },
                          model: {
                            value: _vm.sub_title,
                            callback: function($$v) {
                              _vm.sub_title = $$v
                            },
                            expression: "sub_title"
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("商品编码")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 10 } },
                      [
                        _c("el-input", {
                          attrs: { size: "small", placeholder: "QW-000001" },
                          model: {
                            value: _vm.goods_no,
                            callback: function($$v) {
                              _vm.goods_no = $$v
                            },
                            expression: "goods_no"
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("品牌")
                      ])
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
                              value: _vm.brand_id,
                              callback: function($$v) {
                                _vm.brand_id = $$v
                              },
                              expression: "brand_id"
                            }
                          },
                          [
                            _c("el-option", {
                              attrs: { value: "0", label: "无品牌" }
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.brand_parent, function(v) {
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("栏目")
                      ])
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
                            _c("el-option", {
                              attrs: { value: "0", label: "无栏目" }
                            }),
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("缩略图")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 19 } },
                      [
                        _c(
                          "el-upload",
                          {
                            attrs: {
                              action:
                                _vm.ROOT_URL +
                                "Admin/goods_brand/thumb?token=" +
                                _vm.getToken(),
                              "list-type": "picture-card",
                              "on-success": _vm.onSuccess,
                              "file-list": _vm.fileList2,
                              "on-remove": _vm.handleRemove
                            }
                          },
                          [_c("i", { staticClass: "el-icon-plus" })]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("el-col", { attrs: { span: 2 } }, [
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("价格")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 10 } },
                      [
                        _c("el-input", {
                          attrs: {
                            size: "small",
                            type: "number",
                            placeholder: "0.00"
                          },
                          model: {
                            value: _vm.price,
                            callback: function($$v) {
                              _vm.price = $$v
                            },
                            expression: "price"
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("库存")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 10 } },
                      [
                        _c("el-input", {
                          attrs: {
                            size: "small",
                            type: "number",
                            placeholder: "0"
                          },
                          model: {
                            value: _vm.num,
                            callback: function($$v) {
                              _vm.num = $$v
                            },
                            expression: "num"
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("内容")
                      ])
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("上架")
                      ])
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
                              value: _vm.is_sale,
                              callback: function($$v) {
                                _vm.is_sale = $$v
                              },
                              expression: "is_sale"
                            }
                          },
                          [
                            _c("el-option", {
                              attrs: { value: "0", label: "否" }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: { value: "1", label: "是" }
                            })
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("热门")
                      ])
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
                            _c("el-option", {
                              attrs: { value: "0", label: "否" }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: { value: "1", label: "是" }
                            })
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
                      _c("div", { staticClass: "input_lable" }, [
                        _vm._v("置顶")
                      ])
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
                            _c("el-option", {
                              attrs: { value: "0", label: "否" }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: { value: "1", label: "是" }
                            })
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
                      { attrs: { span: 1.5 } },
                      [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: { click: _vm.submit }
                          },
                          [_vm._v("提 交")]
                        )
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
                            attrs: { type: "success" },
                            on: { click: _vm.nextto }
                          },
                          [_vm._v("下一步")]
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
              "el-tab-pane",
              { attrs: { label: "规格信息", name: "sec" } },
              [
                _vm._l(_vm.attr, function(v, k) {
                  return _c(
                    "div",
                    [
                      _c(
                        "el-row",
                        { ref: "attr", refInFor: true, attrs: { gutter: 20 } },
                        [
                          _c("el-col", { attrs: { span: 3 } }, [
                            _c("div", { staticClass: "input_lable" }, [
                              _vm._v("规格"),
                              k > 0
                                ? _c("span", [_vm._v(" - " + _vm._s(k))])
                                : _vm._e()
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
                                  placeholder: "如：颜色"
                                },
                                model: {
                                  value: v.name,
                                  callback: function($$v) {
                                    _vm.$set(v, "name", $$v)
                                  },
                                  expression: "v.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("el-col", { attrs: { span: 2 } }, [
                            _c("div", { staticClass: "input_lable" }, [
                              _vm._v("参数"),
                              k > 0
                                ? _c("span", [_vm._v(" - " + _vm._s(k))])
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 5 } },
                            [
                              _c("el-input", {
                                attrs: {
                                  size: "small",
                                  placeholder: "如：红,蓝"
                                },
                                model: {
                                  value: v.val,
                                  callback: function($$v) {
                                    _vm.$set(v, "val", $$v)
                                  },
                                  expression: "v.val"
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
                                  attrs: { type: "danger" },
                                  on: {
                                    click: function($event) {
                                      return _vm.delAttr(k)
                                    }
                                  }
                                },
                                [_vm._v("删除")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("el-col", { attrs: { span: 8 } }, [
                            _c("div", { staticClass: "input_notice" })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "unline2" })
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "el-row",
                  { attrs: { gutter: 20 } },
                  [
                    _c("el-col", { attrs: { span: 3 } }, [_vm._v(" ")]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 1.5 } },
                      [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: { click: _vm.addAttr }
                          },
                          [_vm._v("增加规格")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 1.5 } },
                      [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "success" },
                            on: { click: _vm.nextth }
                          },
                          [_vm._v("下一步")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "el-tab-pane",
              { attrs: { label: "价格设置", name: "thr" } },
              [
                _vm._l(_vm.attrPrice, function(v, k) {
                  return _c(
                    "div",
                    [
                      _c(
                        "el-row",
                        { ref: "spec", refInFor: true, attrs: { gutter: 20 } },
                        [
                          _c("el-col", { attrs: { span: 4 } }, [
                            _c(
                              "div",
                              { staticClass: "input_lable" },
                              [
                                _vm._v("【SKU】 "),
                                _c("font", { attrs: { color: "red" } }, [
                                  _vm._v(_vm._s(v.name))
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("el-col", { attrs: { span: 2 } }, [
                            _c("div", { staticClass: "input_lable" }, [
                              _vm._v("价格 - ￥")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 3 } },
                            [
                              _c("el-input", {
                                attrs: { size: "small", placeholder: "0.00" },
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
                          _c("el-col", { attrs: { span: 2 } }, [
                            _c("div", { staticClass: "input_lable" }, [
                              _vm._v("库存")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "el-col",
                            { attrs: { span: 3 } },
                            [
                              _c("el-input", {
                                attrs: { size: "small", placeholder: "0" },
                                model: {
                                  value: v.num,
                                  callback: function($$v) {
                                    _vm.$set(v, "num", $$v)
                                  },
                                  expression: "v.num"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("el-col", { attrs: { span: 7 } }, [
                            _c("div", { staticClass: "input_notice" }, [
                              _c("input", {
                                attrs: { type: "hidden" },
                                domProps: { value: v.id }
                              })
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "unline2" })
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "el-row",
                  { attrs: { gutter: 20 } },
                  [
                    _c("el-col", { attrs: { span: 3 } }, [_vm._v(" ")]),
                    _vm._v(" "),
                    _c(
                      "el-col",
                      { attrs: { span: 1.5 } },
                      [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: { click: _vm.nextfo }
                          },
                          [_vm._v("提 交")]
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

/***/ "./resources/js/views/Admin/Goods/edit.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Admin/Goods/edit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_1ba7f3a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=1ba7f3a2& */ "./resources/js/views/Admin/Goods/edit.vue?vue&type=template&id=1ba7f3a2&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Goods/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_1ba7f3a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_1ba7f3a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Goods/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Goods/edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Admin/Goods/edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Goods/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Goods/edit.vue?vue&type=template&id=1ba7f3a2&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Admin/Goods/edit.vue?vue&type=template&id=1ba7f3a2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1ba7f3a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=1ba7f3a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Goods/edit.vue?vue&type=template&id=1ba7f3a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1ba7f3a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1ba7f3a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);