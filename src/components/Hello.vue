<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="i_text">
      《When you are old》——《当你老了》
      <br/> --- William Butler Yeats ——威廉·巴特勒·叶芝
      <br/> When you are old and grey and full of sleep, 当你老了，头发花白，睡意沉沉，
      <br/> And nodding by the fire，take down this book, 倦坐在炉边，取下这本书来，
      <br/> And slowly read,and dream of the soft look 慢慢读着，追梦当年的眼神
      <br/> Your eyes had once,and of their shadows deep; 你那柔美的神采与深幽的晕影。
      <br/> How many loved your moments of glad grace, 多少人爱过你昙花一现的身影，
      <br/> And loved your beauty with love false or true, 爱过你的美貌，以虚伪或真情，
      <br/> But one man loved the pilgrim Soul in you 惟独一人曾爱你那朝圣者的心，
      <br/> And loved the sorrows of your changing face; 爱你哀戚的脸上岁月的留痕。
      <br/> And bending down beside the glowing bars, 在炉罩边低眉弯腰，
      <br/> Murmur,a little sadly,how Love fled 忧戚沉思，喃喃而语，
      <br/> And paced upon the mountains overhead 爱情是怎样逝去，又怎样步上群山，
      <br/> And hid his face amid a crowd of stars. 怎样在繁星之间藏住了脸。
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Allen\'s blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
