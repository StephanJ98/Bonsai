import React from 'react'
import { useSetRecoilState } from 'recoil'
import { sideBarMenu } from '../../../Context/sideBarMenu'
import styles from './MenuBtn.module.css'
import { ReactComponent as MenuIcon } from '../../../Icons/Options.svg'

export default function MenuBtn() {
  const setSideBarState = useSetRecoilState(sideBarMenu)

  const handleClick = () => {
    alert('Open SideBar Menu')
    setSideBarState(true)
  }

  return (
    <div id={styles.menuiconContainer} onClick={() => handleClick()}>
      <MenuIcon id={styles.menuicon} />
    </div>
  )
}
