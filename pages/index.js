import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'
import Gun from 'gun/gun'
import { themeChange } from 'theme-change'

const gun = Gun('')

export default function Home() {
  const [vibration, setVibration] = useState(1)
  const [hit, setHit] = useState(1)
  const [acelectionX, setAx] = useState(23)
  const [acelectionY, setAy] = useState(40)
  const [acelectionZ, setAz] = useState(0)
  const [gyroX, setGx] = useState(54)
  const [gyroY, setGy] = useState(94)
  const [gyroZ, setGz] = useState(10)
  const [temperature, setTemperature] = useState(15)
  const [humidity, setHumidity] = useState(30)
  const [light, setLight] = useState(124)

  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if (   vibration > 0
        || hit > 0
        || acelectionX > 100 || acelectionY > 100 || acelectionZ > 100
        || temperature > 100 || temperature < -5
        || humidity > 100
        || light > 800) {
      setAlert(true)
    }
  }, [vibration, hit, acelectionX, acelectionY, acelectionZ, temperature, humidity, light])

  useEffect(() => {
    gun.get('vibration').on(state => {
      setVibration(state);
    })
    gun.get('hit').on(state => {
      setHit(state);
    })
    gun.get('acacelection').get('x').on(state => {
      setAx(state);
    })
    gun.get('acacelection').get('y').on(state => {
      setAy(state);
    })
    gun.get('acacelection').get('z').on(state => {
      setAz(state);
    })
    gun.get('gyro').get('x').on(state => {
      setGx(state);
    })
    gun.get('gyro').get('y').on(state => {
      setGy(state);
    })
    gun.get('gyro').get('z').on(state => {
      setGz(state);
    })
    gun.get('temperature').on(state => {
      setTemperature(state);
    })
    gun.get('humidity').on(state => {
      setHumidity(state);
    })
    gun.get('light').on(state => {
      setLight(state);
    })
    themeChange(false)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Security System</title>
        <meta name="description" content="Security System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="text-center m-15">
              <h1 className="text-2xl">KY-015 (Temperature)</h1>
              <span className={temperature > 30 || temperature < -5 ? 'text-error' : 'text-success'}>
                <h1 className="text-8xl">
                  {temperature} ℃
                </h1>
                <h2 className="text-4xl">{temperature > 30 || temperature < -5 ? 'Alert' : 'Ok'}</h2>
              </span>
            </div>

            <div className="divider"></div>

            <div className="text-center m-15">
              <h1 className="text-2xl">KY-015 (Humidity)</h1>
              <span className={humidity > 70 ? 'text-error' : 'text-success'}>
                <h1 className="text-8xl">
                  {humidity} %
                </h1>
                <h2 className="text-4xl">{humidity > 70 ? 'Alert' : 'Ok'}</h2>
              </span>
            </div>

            <div className="divider"></div>

            <div className="text-center m-15">
              <h1 className="text-2xl">KY-018 (Light)</h1>
              <span className={light > 800 ? 'text-error' : 'text-success'}>
                <h1 className="text-8xl">
                  {light}
                </h1>
                <h2 className="text-4xl">{light > 800 ? 'Alert' : 'Ok'}</h2>
              </span>
            </div>

            <div className="divider"></div>

            <div className="text-center m-15">
              <h1 className="text-2xl">KY-002 (Vibration)</h1>
              <span className={vibration > 0 ? 'text-error' : 'text-success'}>
                <h1 className="text-8xl">
                  {vibration}
                </h1>
                <h2 className="text-4xl">{vibration > 0 ? 'Alert' : 'Ok'}</h2>
              </span>
            </div>

            <div className="divider"></div>

            <div className="text-center m-15">
              <h1 className="text-2xl">KY-031 (Hit)</h1>
              <span className={hit > 0 ? 'text-error' : 'text-success'}>
                <h1 className="text-8xl">
                  {hit}
                </h1>
                <h2 className="text-4xl">{hit > 0 ? 'Alert' : 'Ok'}</h2>
              </span>
            </div>

            <div className="divider"></div>

            <div className="flex flex-row">

              <div className="text-center m-15">
                <h1 className="text-2xl">GY-801 (Acelection X)</h1>
                <span className={acelectionX > 100 ? 'text-error' : 'text-success'}>
                  <h1 className="text-8xl">
                    {acelectionX}
                  </h1>
                  <h2 className="text-4xl">{acelectionX > 100 ? 'Alert' : 'Ok'}</h2>
                </span>
              </div>

              <div className="divider divider-vertical"></div>

              <div className="text-center m-15">
                <h1 className="text-2xl">GY-801 (Acelection Y)</h1>
                <span className={acelectionY > 100 ? 'text-error' : 'text-success'}>
                  <h1 className="text-8xl">
                    {acelectionY}
                  </h1>
                  <h2 className="text-4xl">{acelectionY > 100 ? 'Alert' : 'Ok'}</h2>
                </span>
              </div>

              <div className="divider divider-vertical"></div>

              <div className="text-center m-15">
                <h1 className="text-2xl">GY-801 (Acelection Z)</h1>
                <span className={acelectionZ > 100 ? 'text-error' : 'text-success'}>
                  <h1 className="text-8xl">
                    {acelectionZ}
                  </h1>
                  <h2 className="text-4xl">{acelectionZ > 100 ? 'Alert' : 'Ok'}</h2>
                </span>
              </div>

            </div>

            <div className="divider"></div>

            <div className="flex flex-row">

              <div className="text-center m-15">
                <h1 className="text-2xl">GY-801 (Gyroscope X)</h1>
                  <h1 className="text-8xl">
                    {gyroX}
                  </h1>
              </div>

              <div className="divider divider-vertical"></div>

              <div className="text-center m-15">
                <h1 className="text-2xl">GY-801 (Gyroscope Y)</h1>
                  <h1 className="text-8xl">
                    {gyroY}
                  </h1>
              </div>

              <div className="divider divider-vertical"></div>

              <div className="text-center m-15">
                <h1 className="text-2xl">GY-801 (Gyroscope Z)</h1>
                  <h1 className="text-8xl">
                    {gyroZ}
                  </h1>
              </div>

            </div>
        </div>

          <div className={alert ? '' : 'hidden'}>
            <div className="mt-5 alert alert-error">
              <div className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <label>Cargo damaged!</label>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  )
}
