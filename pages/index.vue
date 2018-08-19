<template>
  <div :class="{ 'phone': isPhone, 'tablet': isTablet }" class="landing">

    <!-- Banner -->
    <section
      :style="bannerStyle"
      class="banner">
      <div
        :class="{ tablet: isTablet, phone: isPhone }"
        class="banner-wrapper">
        <div class="image-container" >
          <img
            :src="people"
            class="front-img">
        </div>
        <div class="text-container">
          <h1 class="banner-title">{{ this.$t('landingPage.bannerTitle') }}</h1>
          <div class="news">
            <h1 class="news-title">{{ this.$t('landingPage.newsTitle') }}</h1>
            <p class="news-content">{{ this.$t('landingPage.newsContent') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="intro section">
      <div class="section-wrapper">
        <h1 class="section-title">{{ $t('landingPage.introSection.title') }}</h1>
        <div class="info-cards-section-wrapper">
          <h3 class="intro-text">{{ $t('landingPage.introSection.text') }}</h3>
        </div>
        <!-- Donate us -->
        <!-- <div class="donate-btn">
          <DonateButton fontSize="1.5em" />
        </div> -->
        <div class="actions-wrapper">
          <ActionCard 
            :card="actionCardSubscribe" 
            :showImage="true"
            :showTitle="true"
            :showSubtitle="true"
            @press="onClickSubscribe()"/>
          <router-link :to="`/bills`">
            <ActionCard 
              :card="actionCardTakeAction" 
              :showImage="true"
              :showTitle="true"
              :showSubtitle="true"/>
          </router-link>
          <a :href="DonorboxHelper.donateUrl" class="custom-dbox-popup">
            <ActionCard 
              :card="actionCardDonate" 
              :showImage="true"
              :showTitle="true"
              :showSubtitle="true"/>
          </a>
        </div>
      </div>
    </section>

    <!-- Articles -->
    <section class="articles section">
      <div class="section-wrapper">
        <h1 class="section-title">{{ $t('landingPage.articleSection.title') }}</h1>
        <div class="info-cards-section-wrapper">
          <Spinner v-if="isArticleUpdateLoading" />
          <Row :gutter="30">
            <i-col
              v-for="article in articles"
              :key="article.id"
              :span="isPhone ? 24 : isTablet ? 12 : 8">
              <ArticleCard
                :article="article"
                imgNoMargin
                class="article-card" />
            </i-col>
          </Row>
        </div>
        <router-link :to="`/articles`">
          <div class="more-btn">
            <TwButton label="More Articles" fontSize="1.5em" width="100%" height="100%"/>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Bills Updates -->
    <section class="bills section">
      <div class="section-wrapper">
        <div class="section-title-wrap">
          <h1 class="section-title">{{ $t('landingPage.billSection.title') }}</h1>
          <Tooltip placement="top" maxWidth="300">
            <TwButton class="help-btn" type="icon" icon="md-help"/>
            <div slot="content">
              <p>Write your member of Congress to Support Taiwan related legislation; <i>you can make a difference.</i></p>
            </div>
          </Tooltip>
        </div>
        <div class="info-cards-section-wrapper">
          <Spinner v-if="isBillUpdateLoading" />
          <Row :gutter="30">
            <i-col
              v-for="bill in bills"
              :key="bill.id"
              :span="isPhone ? 24 : isTablet ? 12 : 8">
              <BillCard
                :bill="bill"
                :showSupportBtn="true"
                class="bill-card" />
            </i-col>
          </Row>
        </div>
        <router-link :to="`/bills`">
          <div class="more-btn">
            <TwButton label="More Bills" fontSize="1.5em" width="100%" height="100%"/>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Subscription -->
    <section class="subscription section">
      <Subscription/>
    </section>
  </div>
</template>

<script>
// libraries
import _ from 'lodash'
import appConfig from '~/config/app.json'
// images
import congress from '~/assets/img/banner-home.png'
import people from '~/assets/img/banner-people.png'
import actionImgSubscribe from '~/assets/img/keep-posted.svg'
import actionImgTakeAction from '~/assets/img/take-action.svg'
import actionImgSupportAct from '~/assets/img/support-act.svg'
// components
import Spinner from '~/components/Spinner'
import BillCard from '~/components/HomePage/BillCard'
import ArticleCard from '~/components/HomePage/ArticleCard'
import Subscription from '~/components/Subscription'
import DonateButton from '~/components/DonateButton'
import TwButton from '~/components/TwButton'
import ActionCard from '~/components/ActionCard'
// queriess
import PrefetchBillIdsQuery from '~/apollo/queries/HomePage/PrefetchBillIds'
import BillsQuery from '~/apollo/queries/HomePage/Bills'
import ArticlesQuery from '~/apollo/queries/HomePage/Articles'
// plugins
import { DonorboxHelper } from '@/plugins/utils'

import axios from 'axios';

export default {
  components: {
    BillCard,
    ArticleCard,
    Spinner,
    Subscription,
    DonateButton,
    TwButton,
    ActionCard
  },
  data () {
    return {
      numberOfBillCards: 3,
      numberOfArticleCards: 3,
      isBillUpdateLoading: true,
      isArticleUpdateLoading: true,
      bills: [],
      billIds: [],
      articles: [],
      congress,
      people,
      DonorboxHelper,
      actionCardSubscribe: {
        imageUrl: actionImgSubscribe,
        title: this.$t('landingPage.actionCards.subscribe.title'),
        subtitle: this.$t('landingPage.actionCards.subscribe.subtitle')
      },
      actionCardTakeAction: {
        imageUrl: actionImgTakeAction,
        title: this.$t('landingPage.actionCards.takeAction.title'),
        subtitle: this.$t('landingPage.actionCards.takeAction.subtitle')
      },
      actionCardDonate: {
        imageUrl: actionImgSupportAct,
        title: this.$t('landingPage.actionCards.supportAct.title'),
        subtitle: this.$t('landingPage.actionCards.supportAct.subtitle')
      }
    }
  },
  head () {
    return {
      title: this.$t('site.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('landingPage.description') },
        { property: 'og:url', content: appConfig.site.url },
        { property: 'og:title', content: this.$t('landingPage.title') },
        { property: 'og:description', content: this.$t('landingPage.description') }
      ]
    }
  },
  computed: {
    locale () {
      return this.$store.state.locale
    },
    isPhone () {
      return this.$store.getters.isPhone
    },
    isTablet () {
      return this.$store.getters.isTablet
    },
    bannerStyle () {
      return `background-image: url("${this.congress}"); background-size: cover;`
    }
  },
  mounted () {
    axios.post(
      'https://ustw.auth0.com/oauth/token',
      {
        'grant_type':'client_credentials',
        'client_id': 'VSwVpqaR9GBKzY7RMwTJQc4FvUt1k03d',
        'client_secret': 'HLdRUxtcTCvJeNBLt4yZ_W-RMu7NdAv4VduaTwdbEQIktcelC1w4NLvj3cnx2cOy',
        'audience': 'https://graphql.uswatch.tw'
      }
    ).then(response => {
      console.log(JSON.stringify(response, null, 2));
    }).catch(err => {
      console.err(JSON.stringify(err, null, 2));
    });
    if (!window.DonorBox) {
      window.DonorBox = { widgetLinkClassName: 'custom-dbox-popup' }
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://donorbox.org/install-popup-button.js';
      script.defer = true;
      window.document.head.appendChild(script);
    }
  },  
  methods: {
    getLatestActionDate (actions) {
      let latestActionTime = 0
      if (actions && actions.length > 0) {
        actions.forEach(action => {
          if (action.datetime > latestActionTime) {
            latestActionTime = action.datetime
          }
        })
      }
      return parseInt(latestActionTime)
    },
    fetchBills (ids) {
      return this.$apollo.query({
        query: BillsQuery,
        variables: { lang: this.locale, ids: ids }
      })
    },
    getUpdatedBills () {
      this.fetchBills(this.billIds)
        .then(({ data }) => {
          // the returned bill order is not the same as the bill id order provided
          // TODO: move this to graphql server side
          const billsMap = _.keyBy(data.bills, 'id')
          this.bills = this.billIds
            .map(id => billsMap[id])
            .filter(x => !!x.actionsAll)
            .sort(
              (a, b) =>
                this.getLatestActionDate(b.actionsAll) - this.getLatestActionDate(a.actionsAll)
            )
            .filter((bill, index) => index < this.numberOfBillCards)

          this.isBillUpdateLoading = false
        })
        .catch(error => {
          console.log('get bills error', error)
        })
    },
    onClickSubscribe () {
      alert('hello')
    }
  },
  apollo: {
    billIds: {
      query: PrefetchBillIdsQuery,
      fetchPolicy: 'cache-and-network',
      variables () {
        return {
          lang: this.locale,
          congress: [115]
        }
      },
      update (data) {
        return data.bills[0].prefetchIds
      },
      result (result) {
        if (!result.loading) {
          this.getUpdatedBills()
        }
      }
    },
    articles: {
      query: ArticlesQuery,
      fetchPolicy: 'cache-and-network',
      variables () {
        return {
          list: appConfig.articleList
        }
      },
      update (data) {
        return _.orderBy(data.articles, article => parseInt(article.date), ['desc']).slice(
          0,
          this.numberOfArticleCards
        )
      },
      result (result) {
        if (!result.loading) {
          this.isArticleUpdateLoading = false
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/css/app';
@import 'assets/css/colors';
@import 'assets/css/typography';

.banner {
  background-color: #fff;
  border-bottom: 1px solid #eeeeed;
  position: relative;
}

.banner-wrapper {
  height: 300px;
  display: flex;
  @extend .pageWrapper-large;

  .image-container {
    order: 0;
    display: flex;
    margin-right: 100px;

    .front-img {
      margin-top: auto;
      width: 340px;
    }
  }

  .text-container {
    order: 1;

    .banner-title {
      font-size: 3em;
      font-weight: $twSemiBold;
      line-height: 1.1em;
      padding-top: 50px;
      text-align: left;
      margin-bottom: 20px;
      color: $twWhite;
    }

    .news {
      .news-title {
        font-weight: 400;
        font-size: 1.8em;
        line-height: 1.1em;
        color: $twWhite;
        letter-spacing: 1px;
        margin-bottom: 5px;
      }

      .news-content {
        color: $twWhite;
        max-width: 350px;
      }
    }
  }
}

.banner-wrapper.tablet {
  height: 300px;
  text-align: center;
  justify-content: initial;

  .image-container {
    order: 0;
    margin-right: 50px;
    justify-content: center;

    .front-img {
      width: 260px;
    }
  }

  .text-container {
    order: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .banner-title {
      font-size: 2.4em;
      margin-bottom: 10px;
    }

    .news {
      .news-title {
        font-size: 1.4em;
      }
      .news-content {
        display: none;
      }
    }
  }
}

.banner-wrapper.phone {
  height: 320px;
  flex-direction: column;

  .image-container {
    order: 1;
    margin-right: 0px;
    justify-content: center;

    .front-img {
      width: 240px;
    }
  }

  .text-container {
    order: 0;

    .banner-title {
      font-size: 2.2em;
      margin-bottom: 20px;
      text-align: center;
    }

    .news {
      display: none;
    }
  }
}

.section {
  padding: 40px 0;

  .section-wrapper {
    @extend .pageWrapper-large;

    .section-title {
      color: $twGrayDark;
      font-size: 1.8em;
      font-weight: $twSemiBold;
      margin-bottom: 20px;
    }
  }

  &:nth-child(2n+1) {
    background: $twWhite;
  }

  &.subscription {
    padding: 0;
  }

  &.bills {
    .section-title-wrap {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }

    .section-title {
      display: inline;
      margin: 0;
    }

    .help-btn {
      margin-left: 10px;
    }
  }

  &.intro .section-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;

    .intro-text {
      max-width: 50%;
      margin: 0 auto;

      .phone & {
        max-width: 100%;
      }

      .tablet & {
        max-width: 80%;
      }
    }
  }
}

.donate-btn,
.more-btn {
  margin: 20px auto;
  width: 200px;
  height: 50px;
}

.actions-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}

</style>
