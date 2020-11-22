// const fruitList = [
//     { id: 1, title: '🍐' },
//     { id: 2, title: '🍎' },
//     { id: 3, title: '🍍' },
//     { id: 4, title: '🍌' },
//   ];
  
//   const fruitDetails = [
//     { id: 1, url: '香梨' },
//     { id: 2, url: '苹果' },
//     { id: 3, url: '菠萝' },
//     { id: 4, url: '香蕉' },
//   ];
import axios from 'axios'

  export const getFruits = async () =>{
    try {
      let urlWithString ='/api/list'
      const res = await axios({
        url: urlWithString,
        method: 'get',
      });
      return res.data.data;
    } catch (err) {
      console.warn(err);
      return `Error: ` + err;
    }
  }
  // export const getFruitsById = async (id: number) =>
  //   new Promise((resolve) => {
  //     const details = fruitDetails.find((s) => s.id === id);
  //     return setTimeout(() => resolve(details), 500);
  //   });
  