/**
 * Enhancement into fetch function
 * @param {{
 * 	url: string
 * }} params
 */
const fetcher = (params) => {
  const { url } = params

  if (!url) {
    return console.error('no url provided to fetcher')
  }

  return fetch(url)
    .then((response) => {
      const { status } = response

      if (status !== 200) {
        return console.error("Can't get data from API")
      }

      return response.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

export default fetcher
