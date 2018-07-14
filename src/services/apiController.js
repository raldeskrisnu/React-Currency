import axios from 'axios';;

const getCurrency={
  getData: () => {

    return axios.get('https://exchangeratesapi.io/api/latest', {
      params: {
        base: "USD"
      }
    }).then((response) => {
      return response;
    })
  }
}

export default getCurrency;