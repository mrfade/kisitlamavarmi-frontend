import config from '@/config'

export default ({ app: { $axios }, store, redirect }, inject) => {
  $axios.setBaseURL(config.api_url)

  const Api = {
    get(resource, options) {
      return $axios.get(resource, options)
    },

    $get(resource, options) {
      return $axios.$get(resource, options)
    },

    post(resource, data) {
      return $axios.post(resource, data)
    },

    $post(resource, data) {
      return $axios.$post(resource, data)
    },

    put(resource, data) {
      return $axios.put(resource, data)
    },

    $put(resource, data) {
      return $axios.$put(resource, data)
    },

    delete(resource) {
      return $axios.delete(resource)
    },

    $delete(resource) {
      return $axios.$delete(resource)
    },
  }

  inject('api', Api)
}
