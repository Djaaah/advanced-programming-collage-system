import React from 'react'
import { DashboardData } from './DashboardData';

function Dashboard() {
  return (
    <>
      <div className='conteudo'>
        <h1 className='page-title'>Dashboard - Briefly</h1>
        <hr className='dashline' />

        {DashboardData().map((item, index) => {
          return (
            <>
              <div className='dashboard-card'>
                <div key={index}>
                  <span>{item.title}</span><br />
                  <span>{item.data}</span>
                  <br />
                </div>
              </div>
              <p></p>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Dashboard