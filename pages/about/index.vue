<template>
  <div class="about-page">
    <!-- Banner -->
    <section :style="bannerStyle" class="banner">
      <div class="banner-wrapper">
        <div class="text-container">
          <h1 class="banner-title">{{ this.$t('aboutPage.bannerTitle') }}</h1>
        </div>
        <div class="image-container" >
          <img :src="bannerBills" class="front-img">
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="intro" class="section">
      <div class="section-wrapper">
        <h1 class="section-title">About</h1>
        <Card :bordered="false" class="section-card">
          <p slot="title">No border title</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </div>
    </section>

    <!-- Join us -->
    <section id="join" class="section">
      <div class="section-wrapper">
        <h1 class="section-title">Join us</h1>
        <Card :bordered="false" class="section-card">
          <p slot="title">No border title</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </div>
    </section>

    <!-- Support us -->
    <section id="support" class="section">
      <div class="section-wrapper">
        <h1 class="section-title">Support us</h1>
        <Card :bordered="false" class="section-card">
          <p slot="title">No border title</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </div>
    </section>

    <!-- Data source -->
    <section id="data-source" class="section">
      <div class="section-wrapper">
        <h1 class="section-title">Data sources</h1>
        <Card :bordered="false" class="section-card">
          <p slot="title">No border title</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </div>
    </section>

    <!-- Methodoloty -->
    <section id="methodology" class="section">
      <div class="section-wrapper">
        <h1 class="section-title">Analysis methodology</h1>
        <Card :bordered="false" class="section-card">
          <p slot="title">No border title</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </div>
    </section>
  </div>
</template>

<script>
// images
import bannerBackground from '~/assets/img/banner.png'
import bannerBills from '~/assets/img/banner-bills.png'

export default {
  data () {
    return {
      bannerBackground,
      bannerBills,
      bannerStyle: `background-image: url("${bannerBackground}"); background-size: cover;`
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/app';
@import 'assets/css/colors';
@import 'assets/css/typography';

.banner {
  .banner-wrapper {
    height: 180px;
    display: flex;
    justify-content: space-between;
    @extend .pageWrapper-large;

    .text-container {
      order: 0;
      padding-top: 50px;

      .banner-title {
        display: inline-block;
        font-size: 2em;
        font-weight: $twMedium;
        line-height: 1.1em;
        text-align: left;
        letter-spacing: 0.02em;
        color: $twWhite;
        margin-top: 15px;
        margin-right: 20px;
      }
    }

    .image-container {
      .front-img {
        width: 200px;
        margin: auto 30px 10px 0;
      }
    }
  }
}

.section {
  padding: 40px 0 0 0;

  .section-wrapper {
    @extend .pageWrapper-large;

    .section-title {
      color: $twGrayDark;
      font-size: 1.8em;
      font-weight: $twSemiBold;
      margin-bottom: 20px;
    }
  }

  &:last-child {
    margin-bottom: 40px;
  }
}
</style>

