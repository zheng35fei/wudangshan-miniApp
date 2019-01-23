export default {
  "domain": "http://www.wdwds.com",
  "main": {
    "index": {
      "allInfo": "/info/api/info/getAllInfo",
      "listInfo": "/info/api/info/listInfo",
      "wxlogin":"/leaguer/api/leaguer/fastregByOpenid"
    },
    "sort": "/product/api/product/sortCondition",
    "search": "/product/api/product/getLabel",
    "detailimgs": "/product/api/product/getPicturesByModelCode",
    "ratecode": {
      "ruleBuy": "/product/api/product/ruleBuy",
      "stockprices": "/product/api/product/getDailyStock"
    },
    "comment": {
      "info": "/product/api/product/productCommentInfo",
      "list": "/product/api/product/listComment",
      "add": "/product/api/product/addComment"
    },
    "pay": {
      "main":"/order/orderPay/toPay",
      "alipay": "/pay/api/toAliPay/wapPay",
      "result": "/pay/api/toAliPay/getOrder"
    },
    "wechat": {
      "zhiyoubao":"http://weixin.zhiyoubao.com/zybOAuth/getAuthUrl.htm",
      "Authorization": "https://open.weixin.qq.com/connect/oauth2/authorize",
      "accessToken": "https://api.weixin.qq.com/sns/oauth2/access_token",
      "toWxpay": "/pay/api/toWxpay/webPay",
      "tozybwxpay": "/pay/api/toWxpay/zybWebPay",
      "wxPayResult": "/pay/api/toWxpay/payResult"
    }
  },
  "order": {
    "saveOrder": "/order/api/leaguer/manage/order/saveOrderB2C"
  },
  "ticket": {
    "list": {
      "pagelist": "/product/api/product/parks"
    },
    "detail": {
      "main": "/product/api/product/parkInfo",
      "productItems": "/product/api/product/tickets",
      "parkComboInfos":"/product/api/product/parkComboInfos"
    },
    "order": {
      "main": "/product/api/product/webTicketInfo"
    }
  },
  "news": {
    "list": {
      "pagelist": "/info/api/info/listInfo"
    },
    "detail": {
      "main": "/info/api/info/getInfo"
    }
  },
  "hotel": {
    "list": {
      "pagelist": "/product/api/product/hotels"
    },
    "detail": {
      "main": "/product/api/product/hotelInfo",
      "productItems": "/product/api/product/rooms"
    },
    "order": {
      "main": "/product/api/product/webHotelRoom"
    }
  },
  "combo": {
    "list": {
      "pagelist": "/product/api/product/combos"
    },
    "detail": {
      "main": "/product/api/product/getComboInfo"
    },
    "order": {
      "main": "/product/api/product/getInterceptorComboInfo"
    }
  },
  "shop": {
    "list": {
      "pagelist": "/product/api/shop/shopMdses"
    },
    "detail": {
      "main": "/product/api/shop/getShopMdse"
    },
    "order": {
      "main": "/product/api/shop/getInterceptorShopMdse",
      "listPoint": "/product/api/shop/listPoint",
      "address": "/product/api/shop/nextArea",
      "getPostage": "/product/api/shop/getPostage",
      "getStock": "/product/api/shop/getStock"
    }
  },
  "strategy": {
    "list": {
      "pagelist": "/info/api/info/listInfo"
    },
    "detail": {
      "main": "/info/api/info/getInfo"
    }
  },
  "qr": {
    "detail": {
      "main": "/info/api/info/listInfo"
    },
    "order": {
      "main": "/product/api/product/webTicketInfo"
    }
  },
  "repast": {
    "list": {
      "pagelist": "/product/api/product/eateryInfos"
    },
    "detail": {
      "main": "/product/api/product/eateryInfo",
      "productItems": "/product/api/product/repasts"
    },
    "order": {
      "main": "/product/api/product/webRepastInfo"
    }
  },
  "route":{
    "list":{
      "pagelist":"/product/api/product/routes"
    },
    "detail":{
      "main":"/product/api/product/routeInfo"
    }
  },
  "coupons":{
      "list":{
        "main":"/leaguer/api/coupon/couponPage",
        "member":"/leaguer/api/coupon/manage/myCoupon",
        "usableCoupons":"/leaguer/api/coupon/manage/listAbleCoupon"
      },
      "detail":{
        "main":"/leaguer/api/coupon/manage/queryCouponInfo"
      },
      "getCoupons":{
        "main":"/leaguer/api/coupon/manage/receiveCoupon"
      }     
  },
  "member": {
    "login": {
      "main": "/leaguer/api/leaguer/leaguerLogin",
      "sendCheckCode": "/leaguer/api/leaguer/sendCheckCode",
      "checkPhoneCode": "/leaguer/api/leaguer/checkPhoneCode",
      "leaguerMobileLogin": "/leaguer/api/leaguer/leaguerMobileLogin",
      "resetPwd": "/leaguer/api/leaguer/resetPwd",
      "fastregByAccount": "/leaguer/api/leaguer/fastregByAccount"
    },
    "register": "/leaguer/api/leaguer/leaguerRegister",
    "logout": "/leaguer/api/leaguer/manage/leaguerLogout",
    "info": "/leaguer/api/leaguer/manage/leaguerInfo",
    "modify": "/leaguer/api/leaguer/manage/leaguerUpdate",
    "leaguerFixPwd": "/leaguer/api/leaguer/manage/leaguerFixPwd",
    "order": {
      "pagelist": "/order/api/leaguer/manage/order/getMyOrder",
      "detail": "/order/api/leaguer/manage/order/getOrderDetail",
      "refund": "/order/api/leaguer/manage/order/refund",
      "cancel": "/order/api/leaguer/manage/order/cancelOrder"
    }
  }
}