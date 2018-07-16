import axios from 'axios';;

const getCurrency={
  getData: () => {

    return axios.get(process.env.REACT_APP_ENDPOINT, {
    }).then((response) => {
      return response;
    })
  }
}

export default getCurrency;