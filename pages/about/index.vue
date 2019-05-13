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
        <Row :gutter="30" type="flex">
          <i-col span="24">
            <Card :bordered="false" class="section-card">
              <p slot="title">
                Share your thoughts
              </p>
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
          </i-col>
        </Row>

        <br>

        <div class="social-cards">
          <Card :bordered="false" :style="{ 'width': fbCardWidth }" class="fb-card section-card">
            <div slot="title" class="slot">
              <p>Facebook</p>

              <!-- FB share button -->
              <iframe
                class="fb-share-btn"
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAmericanCitizensforTaiwan%2F&height=28&layout=button_count&size=large&show_faces=true&share=true&appId=126739610711965"
                scrolling="no"
                height="28"
                width="152"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"/>
            </div>

            <!-- FB timeline -->
            <div
              :class="{ 'hide': shouldBreakWidth }"
              class="fb-page"
              data-href="https://www.facebook.com/AmericanCitizensforTaiwan/"
              data-tabs="timeline"
              data-small-header="true"
              data-adapt-container-width="false"
              data-hide-cover="true"
              data-show-facepile="false"
              data-width="500"
              data-height="800">
              <blockquote cite="https://www.facebook.com/AmericanCitizensforTaiwan/" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/AmericanCitizensforTaiwan/">American Citizens for Taiwan</a>
              </blockquote>
            </div>

            <div
              :class="{ 'hide': !shouldBreakWidth }"
              class="fb-page"
              data-href="https://www.facebook.com/AmericanCitizensforTaiwan/"
              data-tabs="timeline"
              data-small-header="true"
              data-adapt-container-width="false"
              data-hide-cover="true"
              data-show-facepile="false"
              data-width="300"
              data-height="800">
              <blockquote cite="https://www.facebook.com/AmericanCitizensforTaiwan/" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/AmericanCitizensforTaiwan/">American Citizens for Taiwan</a>
              </blockquote>
            </div>

            <!-- FB share button -->
            <iframe
              v-if="shouldHideTimeline"
              src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAmericanCitizensforTaiwan%2F&height=28&layout=button_count&size=large&show_faces=true&share=true&appId=126739610711965"
              scrolling="no"
              height="28"
              width="152"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"/>
          </Card>

          <Card :bordered="false" class="twitter-card section-card">
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"/>
            <div slot="title" class="slot">
              <p>Twitter</p>
              <!-- Twitter follow button -->
              <div slot="extra" class="twitter-follow-btn">
                <a href="https://twitter.com/ACTtaiwan?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="true">Follow @ACT</a>
              </div>
            </div>

            <!-- Twitter timeline -->
            <div class="tw-timeline-wrapper">
              <a
                href="https://twitter.com/ACTtaiwan?ref_src=twsrc%5Etfw"
                class="twitter-timeline"
                data-height="800"
                data-chrome="nofooter noheader noborders transparent">
                Tweets by @ACT
              </a>
            </div>

            <!-- Twitter follow button -->
            <div v-show="shouldHideTimeline">
              <a href="https://twitter.com/ACTtaiwan?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="true">Follow @ACT</a>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Support us -->
    <section id="support" class="section">
      <div class="section-wrapper">
        <h1 class="section-title">Support us</h1>
        <Card :bordered="false" class="section-card">
          <Donation />
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
    <!-- <section id="methodology" class="section">
      <div class="section-wrapper">
        <h1 class="section-title">Analysis methodology</h1>
        <Card :bordered="false" class="section-card">
          <p slot="title">No border title</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </div>
    </section> -->
  </div>
</template>

<script>
// images
import bannerBackground from '~/assets/img/banner.png'
import bannerBills from '~/assets/img/banner-bills.png'
import ship from '~/assets/img/ship.png'

// components
import Donation from '~/components/Donation'

export default {
  head () {
    return {
      title: `${this.$t('aboutPage.title')} | ${this.$t('site.title')}`
    }
  },
  components: {
    Donation
  },
  data () {
    return {
      bannerBackground,
      bannerBills,
      bannerStyle: `background-image: url("${bannerBackground}"); background-size: cover;`,
      ship
    }
  },
  computed: {
    shouldBreakWidth () {
      return this.$store.getters.clientWidth < 1120
    },
    shouldHideTimeline () {
      return this.$store.getters.clientWidth <= 780
    },
    fbCardWidth () {
      if (this.shouldBreakWidth) {
        return this.shouldHideTimeline ? 'auto' : '332px'
      } else {
        return '532px'
      }
    }
  },
  mounted () {
    let code = `
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=126739610711965&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    `
    if (!window.document.getElementById('fb-root')) {
      let s = document.createElement('script')
      s.type = 'text/javascript'
      try {
        s.appendChild(document.createTextNode(code))
      } catch (e) {
        s.text = code
      }
      document.body.insertBefore(s, document.body.firstChild)

      let div = document.createElement('div')
      div.id = 'fb-root'
      document.body.insertBefore(div, document.body.firstChild)
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

      &::before {
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

.tw-timeline-wrapper {
  width: 100%;
  height: 800px;
  border: 1px solid rgba(15, 70, 100, 0.12);
  margin-bottom: 20px;
}

.share-btns {
  display: flex;
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

.social-cards {
  display: flex;

  .slot {
    display: flex;
    align-items: center;
  }

  .twitter-card {
    margin-left: 30px;
    flex-grow: 1;
  }

  .hide {
    display: none;
  }
}

@media screen and (max-width: 880px) {
  .slot {
    flex-wrap: wrap;
  }

  .twitter-follow-btn,
  .fb-share-btn {
    margin-top: 10px;
  }
}

@media screen and (max-width: 780px) {
  .social-cards {
    flex-direction: column;

    .twitter-follow-btn,
    .fb-share-btn {
      display: none;
    }

    .tw-timeline-wrapper,
    .fb-page {
      display: none;
    }

    .twitter-card {
      margin-left: 0;
      margin-top: 20px;
      flex-grow: 0;
      width: 100%;
    }

    .fb-card {
      width: 100%;
    }
  }
}

// phone
@media screen and (max-width: $smallDeviceWidth - 1) {
  .section-card {
    margin: auto -15px;
  }

  .social-cards {
    .twitter-card {
      margin-left: -15px;
      width: auto;
    }
  }
}
</style>

