import React,{FC} from 'react'
import { getAllFruits} from '../../recoil/selectors/fruitsSelectors';
import { useRecoilState, useRecoilValue } from 'recoil';
import {ResponseResult} from '../../api/fruits/api2'
import './index.css'


const FruitPage:FC = () => {
  const fruits: ResponseResult = useRecoilValue(getAllFruits);

  return (
    <>
      <div className="component-fruit">
      {fruits.result.map((book) => (
        <div key={book.id}>
            {book.id}
            {book.title}
        </div>
      ))}
      </div>
    </>
  );
}

export default FruitPage
