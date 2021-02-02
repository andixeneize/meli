import Head from 'next/head'
import styles from '../styles/home.module.css'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
          background-color: #EEEEEE;
          font-family: roboto;
        }
      `}</style>
      <Header />
    </div>
  )
}
