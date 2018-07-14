import axios from 'axios';;

const getCurrency={
  getData: () => {

    return axios.get('http://localhost:8080/api/basecurrency/USD', {
    }).then((response) => {
      return response;
    })
  }
}

export default getCurrency;