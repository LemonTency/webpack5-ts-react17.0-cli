import { selector } from 'recoil'

import { getFruits} from '../../api/fruits/api2'
import { fruitIdState } from '../atoms/fruitsAtom'

export const getAllFruits = selector({
  key: 'GetAllFruits',
  get: async () => {
    // const response = await getFruits()
    // return response
    // try {
      const response = await getFruits()
      console.log('fruit',response)
      return response.data;
    // } catch (err) {
    //   console.warn(err);
    //   return `Error: ` + err;
    // }
  }
})
// export const getFruitsDetail = selector({
// 	key: 'GetFruitsDetail',
// 	get: async ({get}) => {
// 		const response = await getFruitsById(parseInt(get(fruitIdState),10))
// 		return response
// 	}
// })
