import axios from 'axios'
import appConfig from '~/config/app.json'

export const get = url => {
  return axios({
    method: 'GET',
    url,
    headers: { 'X-API-Key': 'syre14A0ZO81RzG81d5L4PbjkjF4Uu0aFWSjfNqf' }
  })
}

export class DonorboxHelper {
  static get host () {
    return 'https://donorbox.org'
  }

  static get campaign () {
    return appConfig.donorboxCampaign;
  }

  static get embedFormUrl () {
    return `${DonorboxHelper.host}/embed/${DonorboxHelper.campaign}?show_content=true`
  }

  static get donateUrl () {
    return `${DonorboxHelper.host}/${DonorboxHelper.campaign}`
  }
}
