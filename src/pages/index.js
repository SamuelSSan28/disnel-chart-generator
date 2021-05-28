import { useState } from 'react'
import Header from '../components/Header'
import LineChart from '../components/LineChart'
import UploadSection from '../components/UploadSection'
import styles from './home.module.css'
import { ProgressSpinner } from 'primereact/progressspinner';


export default function Home() {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);

  return (
    <div>
      <Header />
      <div className={styles.homepage}>
        <UploadSection setLoading={setLoading} setData={setData} />

       {loading !== null  &&
        <div style={{width:'100%',display:"flex",alignItems:"center",justifyContent:"center"}}>
          {!loading ? 
           <>
            {data && <LineChart data={data}/>}
           </>
            :
            <ProgressSpinner style={{marginTop:"10rem"}}/>
          }

        </div>
      }

     </div>

    </div>
    
  )
}
