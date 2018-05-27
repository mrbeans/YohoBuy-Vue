<template>
  <div>
    <div class="shopping">购物车</div>
    <div class="tit">已选商品</div>
    <b-card v-for="news in newsList" v-bind:key="news.id">
      <div tag="article" sub-title="news.title" class="left">
        <img src="https://picsum.photos/1024/480/?image=58" />
      </div>
      <div class="card-text right">
        <span>商品名称：</span>
        <p>价格：38.8</p>
        <p>商品数量：1</p>
        <div>
          <b-button href="#">删除</b-button>
        </div>
      </div>
    </b-card>
    <div class="sum">
      去结算
    </div>
    <!-- <div class="tit">猜你喜欢</div>

    <b-card v-for="news in newsList" v-bind:key="news.id" class="left">
      <div tag="article" sub-title="news.title">
        <img src="https://picsum.photos/1024/480/?image=58" />
      </div>
    </b-card> -->
  </div>
</template>

<style>
  .shopping {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #333;
    color: #fff;
  }

  .footer {
    width: 25%;
    float: left;
  }

  .right p {
    line-height: 5px;
    font-size: 12px;
  }

  .right span {
    display: block;
    height: 50px;
    line-height: 30px;
    font-size: 12px;
  }

  .h4 {
    background: #333;
    line-height: 40px;
    padding: 0;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    font-size: 12px;
    text-align: center;
    margin: 0;
  }

  .left img {
    width: 100%;
  }

  .sum {
    background: #eee;
    margin: 30px auto;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .tit {
    margin: 10px auto;
  }

  .card {
    margin: 15px auto;
  }

  * {
    text-align: center;
    font-size: 12px;
  }

  .h1 {
    font-size: 12px;
    color: #fff;
    line-height: 40px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 40px;
    background: #333;


  }

  .h1-1 {
    width: 20%;
    height: 40px;
  }

  .h1-2 {
    width: 60%;
  }

  .h4 {
    background: #333;
    line-height: 40px;
    padding: 0;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    margin: 0;
  }

  .col {
    padding: 0;
  }

</style>
<script>
  export default {
    data() {
      return {
        newsList: [{
          "id": 1001,
          "title": "习近平的“绿色辩证法”",
          "desc": "民之所望，政之所向。近年来，在习近平总书记绿色发展理念的指引下，环境治理、生态修复领域一项项重点工程有序展开，生态文明制度体系加快形成。",
          "time": "2018-05-19"
        }, {
          "id": 1002,
          "title": "中美磋商最新成果，这三个词语暗藏深意！",
          "desc": "上一次北京会谈，用的是“坦诚”。但这一次，用词是“积极”，双方应该更多体谅到了对方的立场，也适度调整了自己的要价。",
          "time": "2018-05-19"
        }, {
          "id": 1003,
          "title": "古巴空难｜古航安全记录差，专家：老旧飞机使用频率高易故障",
          "desc": "航空专家对澎湃新闻表示，民航客机寿命一般是25-30年，如果使用频率非常高，寿命还会缩短。如果这架飞机确实使用了近40年，那它的故障率会更高，可靠性也更差。",
          "time": "2018-05-19"
        }, {
          "id": 1004,
          "title": "武汉“爱心学校”停办风波：68个大凉山孩子的求学之路",
          "desc": "去年11月2日，子墨艺高接到武汉江夏区教育局的《责令停止办学通知书》，称其属无证违法办学。今年2月以来，大凉山当地政府和家长们也要求接回孩子。",
          "time": "2018-05-19"
        }, {
          "id": 1005,
          "title": "川航陆空通话曝光：多机组帮呼叫暖人心",
          "desc": "近日，一段“备降川航陆空通话录音”热传。录音中3U8633航班请求备降后，一度只剩下噪音，多机组连呼“成都叫你”。澎湃新闻多方求证，截止发稿时无单位回应真伪。",
          "time": "2018-05-19"
        }, {
          "id": 1006,
          "title": "甘肃省发改委副主任李东新任兰州新区管委会主任，接替牛向东",
          "desc": "省委决定李东新同志任中共兰州新区工作委员会委员、副书记、兰州新区管理委员会主任，免去牛向东同志兰州新区管理委员会主任、中共兰州新区工作委员会副书记职务。",
          "time": "2018-05-19"
        }, ]
      }
    }
  }

</script>
