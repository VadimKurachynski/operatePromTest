import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {getThemes} from "../features/themes/themesSlice";
import {useDispatch} from "react-redux";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const dispatch=useDispatch()


  return (
    <>
<div>
  <button onClick={()=>dispatch(getThemes())} >НАЖАТЬ</button>
</div>
    </>
  )
}
