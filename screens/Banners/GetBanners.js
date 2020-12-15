
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import moduleName from 'react-native-elements'
const GetBanners = () => {



  const [ Banners, setBanners ] = useState([])
  useEffect(() => {
    // console.log('useEffect')
    obtenerdatos()
    
  }, [])

  const obtenerdatos = async () => {
     const data = await fetch('https://qa-apphc-cdn-hc.azureedge.net/api/banners/')
     const banners = await data.json()
    //  console.log(GetBanners)
     setBanners(banners)
  }

  
  return (
      <ul>
        {
          Banners.map(item => (
            <li key="item.id">
              {item.ActionType} -
              {item.CreateDate} - 
              {item.Active} - 
              {item.StartDate} - 
              {item.EndDate} - 
              {item.CreatorEmail} -
              {item.DataAction} - 
              {item.Id} - 
              {item.ImageUrl} -
              {item.NumberOrder}
            </li>
            ))
        } 
    </ul>
  )
}
export default GetBanners;