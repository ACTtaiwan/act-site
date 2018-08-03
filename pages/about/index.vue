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
        <h1 class="section-title">About us</h1>
        <Card :bordered="false" :style="{ 'background-image': 'url(' + ship + '), linear-gradient(70deg, rgb(144, 202, 255, 0), rgb(144, 202, 255, 1)' }" class="about-card-background section-card">
          <div class="about-card-content">
            <h2>WHO WE ARE</h2>
            <br>
            <p>We are United States citizens who care deeply for our country and the ideals it was founded on, freedom and democracy. While firstly supporting these ideals at home, we realize <strong>America cannot effectively stand alone as a democracy in this world;</strong> we must join hands with other peoples who hold fast and defend those same ideals.</p>
            <br>
            
            <h2>WHAT WE DO</h2>
            <br>
            <p>Taiwan’s democracy is important to United States' own democracy, security, and economy, so ACT works to spur the U.S. Government to be <strong>fully supportive of Taiwan’s right to self-determination.</strong> This right is under attack by those who would gain by weakening both America and Taiwan's freedoms and security.</p>
            <br>
            
            <h2>HOW WE DO IT</h2>
            <br>
            <p>ACT monitors United States government and Congressional actions regarding Taiwan. ACT keeps people informed via email, website, and social media posting. <strong>ACT then provides an easy to use online tool for people to tell their members of Congress to support or oppose the important legislation in the U.S. Congress.</strong></p>
          </div>
        </Card>
      </div>
    </section>

    <!-- Join us -->
    <!-- <section id="join" class="section">
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
    </section> -->

    <!-- Contact us -->
    <section id="contact" class="section">
      <div class="section-wrapper">
        <h1 class="section-title">Contact us</h1>
        <Card :bordered="false" class="section-card">
          <h2>Like us on Facebook</h2>
          <iframe 
            class="fb-iframe"
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAmericanCitizensforTaiwan%2F&height=28&layout=button_count&size=large&show_faces=true&share=true&appId=126739610711965" 
            scrolling="no" 
            height="28"
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media"/>
          
          <h2>Follow us on Twitter</h2>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"/>
          <div class="tw-follow-btn">
            <a href="https://twitter.com/ACTtaiwan?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="true">Follow @ACT</a>
          </div>
          <div class="tw-timeline-wrapper">
            <a href="https://twitter.com/ACTtaiwan?ref_src=twsrc%5Etfw" class="twitter-timeline" data-height="800" data-chrome="nofooter noheader noborders transparent">Tweets by @ACT</a>
          </div>

          <h2>Share your thoughts</h2>
          <div class="share-btns">
            <div class="tw-btn">
              <a href="https://twitter.com/intent/tweet?screen_name=ACTtaiwan&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-size="large" data-text="Hi! I think that..." data-show-count="false">Tweet to @ACTtaiwan</a>
            </div>
            <div>
              <Tooltip content="Email us">
                <a href="mailto:feedback@acttaiwan.org">
                  <Button class="email-btn" type="primary" shape="circle" icon="md-mail"/>
                </a>
              </Tooltip>
            </div>
          </div>
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
          <ul class="data-list">
            <li><a href="https://www.govtrack.us/" target="_blank">GovTrack</a></li>
            <li><a href="http://congress.gov/" target="_blank">Congress.gov</a></li>
            <li><a href="https://www.propublica.org/" target="_blank">ProPublica</a></li>
          </ul>
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
import ship from '~/assets/img/ship.png'

export default {
  data () {
    return {
      bannerBackground,
      bannerBills,
      bannerStyle: `background-image: url("${bannerBackground}"); background-size: cover;`,
      ship
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

    .about-card-background {
      background-position: right;
      background-size: auto 100%;
      background-repeat: no-repeat;

      &::before  {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        opacity: 0.85;
        background-color: white;
      }
    }

    .about-card-content {
      position: relative;
    }
  }

  &:last-child {
    margin-bottom: 40px;
  }
}

.fb-iframe {
  margin-top: 10px;
  margin-bottom: 20px;
}

.tw-follow-btn {
  margin-top: 10px;
}

.tw-timeline-wrapper {
  width: 50%;
  height: 800px;
  border: 1px solid rgba(15,70,100,.12);
  margin-bottom: 20px;
}

.share-btns {
  display: flex;
  margin-top: 10px;
  flex-flow: row wrap;
  align-items: center;

  .tw-btn {
    height: 28px;
  }

  .email-btn {
    margin-left: 10px;
  }
}

.data-list {
  margin-left: 16px;
}


// tablet
@media screen and (max-width: $mediumDeviceWidth - 1) {
  .tw-timeline-wrapper {
    width: 100%;
  }
}

// phone
@media screen and (max-width: $smallDeviceWidth - 1) {
  .section-card {
    margin: auto -15px;
  }
}

</style>  

