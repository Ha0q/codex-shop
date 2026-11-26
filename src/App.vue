<script setup>
import { ref } from 'vue'
import pizza from '../assets/pizza.jpg'
import pasta from '../assets/pasta.jpg'
import tiramisu from '../assets/tiramisu.jpg'

const main = ref(null)

const dishes = [
  {
    image: pizza,
    alt: '点缀鲜罗勒的玛格丽特披萨',
    name: '玛格丽特披萨',
    price: '¥68',
    description: '番茄、马苏里拉与鲜罗勒，饼边烤得微焦。',
  },
  {
    image: pasta,
    alt: '一盘拌有酱汁的意面',
    name: '主厨手工意面',
    price: '¥20',
    description: '手工制面，搭配当天准备的酱汁。',
  },
  {
    image: tiramisu,
    alt: '撒了可可粉的提拉米苏',
    name: '经典提拉米苏',
    price: '¥38',
    description: '浓缩咖啡浸透手指饼干，夹入马斯卡彭奶酪。',
  },
]
</script>

<template>
  <a class="skip" href="#main" @click="main.focus({ preventScroll: true })">跳至正文</a>
  <header class="site-header" id="home">
    <div class="wrap header-inner">
      <a class="brand" href="#home">Forno <i>&amp;</i> Tavola<span>炉边意式餐馆</span></a>
      <nav aria-label="主导航">
        <a href="#menu">招牌菜</a>
        <a href="#about">餐馆故事</a>
        <a class="button button-small" href="#visit">到店用餐</a>
      </nav>
    </div>
  </header>
  <main id="main" ref="main" tabindex="-1">
    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero-content">
        <p class="eyebrow"><span></span> CUCINA ITALIANA</p>
        <h1 id="hero-title">炉火正旺，<br>刚好开饭<span>。</span></h1>
        <p class="hero-copy">现烤的披萨、手工意面，还有一桌朋友。<br>把今晚留给一顿慢慢吃的意大利晚餐。</p>
        <a class="button" href="#menu">看看招牌菜</a>
      </div>
    </section>
    <section class="menu wrap" id="menu" aria-labelledby="menu-title">
      <div class="section-heading">
        <p class="eyebrow"><span></span> DAL NOSTRO FORNO</p>
        <h2 id="menu-title">炉边招牌</h2>
        <p>从第一口披萨，到最后一勺甜点。</p>
      </div>
      <div class="dish-grid">
        <article v-for="dish in dishes" :key="dish.name" class="dish">
          <img :src="dish.image" width="850" height="620" loading="lazy" :alt="dish.alt">
          <div class="dish-body">
            <h3>{{ dish.name }}</h3>
            <span class="price">{{ dish.price }}</span>
            <p>{{ dish.description }}</p>
          </div>
        </article>
      </div>
    </section>
    <div class="lower">
      <div class="wrap lower-inner">
        <section id="about" aria-labelledby="about-title">
          <p class="eyebrow"><span></span> LA NOSTRA TAVOLA</p>
          <h2 id="about-title">给晚餐留点时间</h2>
          <p>Forno 是炉子，Tavola 是餐桌。面团在厨房慢慢发酵，披萨上桌就趁热分着吃。吃完也可以再坐一会儿，点一份甜点，把话聊完。</p>
        </section>
        <section id="visit" aria-labelledby="visit-title">
          <h2 id="visit-title">到店用餐</h2>
          <dl>
            <div><dt>周二至周五</dt><dd>17:30–22:00</dd></div>
            <div><dt>周六及周日</dt><dd>11:30–22:00</dd></div>
            <div><dt>周一</dt><dd>休息</dd></div>
          </dl>
          <p class="demo">首页演示 · 餐馆信息、菜价及营业时间均为示例。</p>
        </section>
      </div>
    </div>
  </main>
  <footer class="wrap footer"><a class="brand" href="#home">Forno <i>&amp;</i> Tavola</a><a href="#home">回到顶部</a></footer>
</template>
