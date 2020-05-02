const PREFIX = 'http://localhost:3000/api';

export default {
  login:`${PREFIX}/auth/wxlogin`,
  wxBanner: `${PREFIX}/wxbanner`,
  wxProductall: `${PREFIX}/wxproductall`,
  wxClassify: `${PREFIX}/wxclassify`,
  wxSingleproduct: `${PREFIX}/wxClassify`,//商品分类
  wxProduct: `${PREFIX}/wxProduct`,  //单个商品详情
  wxCart: `${PREFIX}/wxcart`,
  wxCartskus: `${PREFIX}/wxcartskus`,
  wxAddress: `${PREFIX}/wxaddress`,
  wxOrder: `${PREFIX}/wxorder`,
  wxSingleorder: `${PREFIX}/wxsingleorder`
}