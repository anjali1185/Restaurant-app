import React, {useState} from 'react';
import './index.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  ),"All",
]
console.log(uniqueList)
export default function Restaurant() {
  const [menuData,setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList);
  // console.log(menuData);
  const filterItem = (category) =>{
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((item) =>{
      return item.category === category;
    })
    setMenuData(updatedList);
  }
  return (
    <div>
      <Navbar filterItem = {filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </div>
  )
}
