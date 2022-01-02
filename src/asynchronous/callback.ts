export default function callbaclSample() {
  const url = 'https://api.github.com/users/iyuta1124'

  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log(json)
            return json
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const profile = fetchProfile()
  console.log(profile)
}
