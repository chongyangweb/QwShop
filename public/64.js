(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/info.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Order/info.vue?vue&type=script&lang=js& ***!
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
var Base64 = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js").Base64;

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lists: [],
      order_no: '',
      province: '',
      city: '',
      region: '',
      address: '',
      receive_tel: '',
      receive_name: '',
      data: {},
      total_price: 0.00,
      delivery_content: [],
      ShipperCode: ''
    };
  },
  methods: {
    get_delivery_name: function get_delivery_name() {
      if (this.data.delivery_no == '') {
        return;
      }

      var _this = this;

      var delivery_url = 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx'; // API

      var RequestData = "{'LogisticCode':'" + this.data.delivery_no + "'}"; // 快递单号

      var RequestType = '2002';
      var EBusinessID = '1542264'; // 商户ID

      var key = "52c8ce3d-59a6-491a-ac75-aa5cd844bf1e"; // key

      var DataSign = encodeURIComponent(Base64.encode(this.$md5(RequestData + key))); // 签名

      var DataType = 'json'; // 返回类型
      // console.log(RequestData);

      this.$post(delivery_url, {
        RequestData: RequestData,
        RequestType: RequestType,
        EBusinessID: EBusinessID,
        DataSign: DataSign,
        DataType: DataType
      }).then(function (res) {
        if (res.Success == true) {
          _this.ShipperCode = res.Shippers[0].ShipperCode;

          _this.get_delivery_content();
        } else {
          return false;
        }
      });
    },
    get_delivery_content: function get_delivery_content() {
      var _this = this;

      var delivery_url = 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx'; // API

      var RequestData = "{'LogisticCode':'" + this.data.delivery_no + "','ShipperCode':'" + this.ShipperCode + "'}"; // 快递单号

      var RequestType = '1002';
      var EBusinessID = '1542264'; // 商户ID

      var key = "52c8ce3d-59a6-491a-ac75-aa5cd844bf1e"; // key

      var DataSign = encodeURIComponent(Base64.encode(this.$md5(RequestData + key))); // 签名

      var DataType = 'json'; // 返回类型

      this.$post(delivery_url, {
        RequestData: RequestData,
        RequestType: RequestType,
        EBusinessID: EBusinessID,
        DataSign: DataSign,
        DataType: DataType
      }).then(function (res) {
        if (res.Success == true) {
          _this.delivery_content = res.Traces;
        }
      });
    }
  },
  mounted: function mounted() {
    var id = this.$route.params.id;

    var _this = this;

    this.$post(this.ROOT_URL + 'Admin/order/getOrderInfo', {
      id: id
    }).then(function (res) {
      console.log(res);
      _this.data = res.data;
      _this.lists = res.data.get_order_goods;
      _this.province = res.data.province;
      _this.city = res.data.city;
      _this.region = res.data.region;
      _this.receive_tel = res.data.receive_tel;
      _this.receive_name = res.data.receive_name;
      _this.order_no = res.data.order_no;
      _this.total_price = res.data.price;

      _this.get_delivery_name();
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.order_info_detail_row{\r\n\tmargin-bottom: 20px;\n}\n.order_info_total_price{float: right;color:red;line-height: 60px;}\n.delivery_content{margin-bottom: 2rem;}\n.delivery_content p{line-height: 2rem;}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : undefined
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.5.1";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if ( true && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(_atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if ( true && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/info.vue?vue&type=template&id=25930164&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Order/info.vue?vue&type=template&id=25930164& ***!
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
        _c("div", { staticClass: "index_main_title" }, [_vm._v("订单详情")])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "unline" }),
    _vm._v(" "),
    _c("div", { staticClass: "order_info_detail" }, [
      _c(
        "div",
        { staticClass: "order_info_detail_row" },
        [
          _c(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              _c("el-col", { attrs: { span: 8 } }, [
                _vm._v("订单号：  "),
                _c("span", { staticStyle: { color: "#999" } }, [
                  _vm._v(_vm._s(_vm.order_no))
                ])
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 16 } },
                [
                  _vm._v("状态：  \n\t\t\t  \t"),
                  _c(
                    "el-tag",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.data.pay_status == 0,
                          expression: "data.pay_status==0"
                        }
                      ],
                      attrs: { type: "danger" }
                    },
                    [_vm._v("待付款")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tag",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.data.pay_status == 1 &&
                            _vm.data.delivery_status == 0,
                          expression:
                            "data.pay_status==1 && data.delivery_status==0"
                        }
                      ],
                      attrs: { type: "danger" }
                    },
                    [_vm._v("待发货")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tag",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.data.pay_status == 1 &&
                            _vm.data.delivery_status == 1 &&
                            _vm.data.order_status == 0,
                          expression:
                            "data.pay_status==1 && data.delivery_status==1 && data.order_status==0"
                        }
                      ],
                      attrs: { type: "danger" }
                    },
                    [_vm._v("待收货")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tag",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.data.pay_status == 1 &&
                            _vm.data.delivery_status == 1 &&
                            _vm.data.order_status == 1 &&
                            _vm.data.comment_status == 0,
                          expression:
                            "data.pay_status==1 && data.delivery_status==1 && data.order_status==1 && data.comment_status==0"
                        }
                      ],
                      attrs: { type: "danger" }
                    },
                    [_vm._v("待评论")]
                  )
                ],
                1
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
        { staticClass: "order_info_detail_row" },
        [
          _c(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              _c("el-col", { attrs: { span: 8 } }, [
                _vm._v("用户：  "),
                _c("span", { staticStyle: { color: "#999" } }, [
                  _vm._v(_vm._s(_vm.receive_name))
                ])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 8 } }, [
                _vm._v("联系电话：  "),
                _c("span", { staticStyle: { color: "#999" } }, [
                  _vm._v(_vm._s(_vm.receive_tel))
                ])
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 8 } }, [
                _vm._v("取货地址：  "),
                _c("span", { staticStyle: { color: "#999" } }, [
                  _vm._v(
                    _vm._s(
                      _vm.province != _vm.city
                        ? _vm.province + _vm.city + _vm.region + _vm.address
                        : _vm.city + _vm.region + _vm.address
                    )
                  )
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "order_info_detail_row" },
        [
          _c(
            "el-row",
            { attrs: { gutter: 20 } },
            [
              _c("el-col", { attrs: { span: 24 } }, [
                _vm._v("备注："),
                _c("span", { staticStyle: { color: "#999" } })
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "unline" })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "order_goods_list" },
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.lists, size: "medium" }
          },
          [
            _vm._v("‘\n\n\t\t\t"),
            _c("el-table-column", {
              attrs: { type: "selection", width: "55" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "#", width: "60" },
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
              attrs: { label: "缩略图", width: "80" },
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
              attrs: { label: "规格属性" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [_vm._v(_vm._s(scope.row.spec_name))]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "单价" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [_vm._v(_vm._s(scope.row.price))]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "数量" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [_vm._v(_vm._s(scope.row.num))]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "小计" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [_vm._v(_vm._s(scope.row.num * scope.row.price))]
                  }
                }
              ])
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "order_info_total_price" }, [
      _vm._v("\n\t\t总计：￥ " + _vm._s(_vm.total_price) + "\n\t")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "clear" }),
    _vm._v(" "),
    _c("div", { staticClass: "unline" }),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "main_btn_left" }, [
      _c(
        "div",
        { staticClass: "index_main_title" },
        [_c("font", [_vm._v("快递信息")])],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "unline" }),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.delivery_content.length == 0,
            expression: "delivery_content.length==0"
          }
        ],
        staticClass: "delivery_content"
      },
      [
        _c("div", { staticStyle: { "text-align": "center", color: "#999" } }, [
          _vm._v("没有快递号！")
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.delivery_content.length > 0,
            expression: "delivery_content.length>0"
          }
        ],
        staticClass: "delivery_content"
      },
      _vm._l(_vm.delivery_content, function(v) {
        return _c(
          "p",
          [
            _c(
              "font",
              { staticStyle: { "margin-right": "1rem", color: "#000" } },
              [_vm._v(_vm._s(v.AcceptTime))]
            ),
            _vm._v("-" + _vm._s(v.AcceptStation))
          ],
          1
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "unline" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Admin/Order/info.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Admin/Order/info.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_vue_vue_type_template_id_25930164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=25930164& */ "./resources/js/views/Admin/Order/info.vue?vue&type=template&id=25930164&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Order/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_25930164___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_vue_vue_type_template_id_25930164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Order/info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Order/info.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Admin/Order/info.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Admin/Order/info.vue?vue&type=template&id=25930164&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Admin/Order/info.vue?vue&type=template&id=25930164& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_25930164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./info.vue?vue&type=template&id=25930164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Order/info.vue?vue&type=template&id=25930164&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_25930164___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_25930164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);