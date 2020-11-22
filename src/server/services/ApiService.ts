import { IApi } from '@interfaces/IApi'
import { IData } from '@interfaces/IData'

class ApiService implements IApi {
  getInfo() {
    return new Promise<IData>(resolve => {
      resolve({
        item: '我是后台数据🌺',
        result: [
          { id: 1, title: '🍐' },
          { id: 2, title: '🍎' },
          { id: 3, title: '🍍' },
          { id: 4, title: '🍌' }
        ]
      })
    })
  }
}
export default ApiService
