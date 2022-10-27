import React from 'react'
import { useRecoilValue } from 'recoil'
import { sideBarMenu } from '../../Context/sideBarMenu.js'
import Body from '../../Components/Main/Body/Body'
//import Header from '../../Components/Main/Header/Header'

export default function Main() {

  const menuState = useRecoilValue(sideBarMenu)

  return (
    <>
      {/*<Header />*/}

      {/* SideBar menu */}
      {console.log(menuState)}

      <Body />
    </>
  )
}
