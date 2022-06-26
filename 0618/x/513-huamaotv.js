
{
  
  "ua": "",
  "homeUrl": "http://www.huamaotv.com",
  "dcVipFlag": "true",
  "pCfgJs": "http://www.huamaotv.com/static/js/playerconfig.js",
  "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
  "dcShow2Vip": {},
  "dcPlayUrl": "true",
   "cateManual": {"电影": "type/1", "电视剧": "type/2", "纪录片": "type/3", "动漫": "type/4"},

  "homeVodNode": "//ul[contains(@class, 'stui-vodlist clearfix')]/li/a[contains(@class, 'stui-vodlist_')]",
  "homeVodName": "/@title",
  "homeVodId": "/@href",
  "homeVodIdR": "detail/(\\S+).html",
  "homeVodImg": "/@data-original",

  "homeVodImgR": "",
  "homeVodMark": "",

//

  "cateUrl": "http://www.huamaotv.com/{cateId}-{catePg}.html",
  "cateVodNode": "//ul[contains(@class, 'stui-vodlist clearfix')]/li/a[contains(@class, 'stui-vodlist_')]",
  "cateVodName": "/@title",
  "cateVodId": "/@href",
  "cateVodIdR": "detail/(\\S+).html",
  "cateVodImg":  "/@data-original",
  "cateVodImgR": "",
  "cateVodMark": "",

//

  "dtUrl": "http://www.huamaotv.com/detail/{vid}.html",
   "dtNode": "//div[@class='stui-content col-pd clearfix']",
   "dtName": "//div[@class='stui-content__detail']/h3/text()",
   "dtImg": "//div[@class='stui-content__thumb']/a/img/@data-original",

//  "dtCate": "//div[@class='txt-title']/span/a//text()",
//  "dtYear": "//div[@class='txt-list']/p/span[contains(text(),'年代')]//text()",
//  "dtArea": "//div[@class='txt-list']/p/span[contains(text(),'地区')]//text()",
//  "dtActor": "//div[@class='txt-list']/p[contains(text(),'主演')]//text()",
//  "dtDirector": "//div[@class='txt-list']/p[contains(text(),'导演')]//text()",
//  "dtFromNode": "//div[@class='txt-list']/p/span",
//  "dtFromName": "/text()",

  "dtFromNode":  "//div[@class='stui-pannel clearfix']/div[@class='stui-pannel__head clearfix']/h3",
  "dtFromName": "/text()",
  "dtFromNameR": "",
  "dtUrlNode": "//ul[contains(@class,'stui-content__playlist')]",
  "dtUrlSubNode": "/li/a",
  "dtUrlId": "/@href",
  "dtUrlIdR": "/play/(\\S+).html",
  "dtUrlName": "/text()",
  "dtUrlNameR": "",
  "playUrl": "http://www.huamaotv.com/play/{playUrl}.html",

//
 "searchUrl":"http://www.niumatv.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": ""
}
