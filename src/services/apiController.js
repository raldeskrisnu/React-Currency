import axios from 'axios';;

const getCurrency={
  getData: () => {

    return axios.get("https://react-currency-server.herokuapp.com/api/basecurrency/USD", {
    }).then((response) => {
      return response;
    })
  }
}

export default getCurrency;