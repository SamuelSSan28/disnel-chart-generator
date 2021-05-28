import styles from './upload.module.css';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import { useRef,useState } from 'react';

export default function UploadSection(props) {
    const setLoading = props.setLoading;
    const setGlobalData = props.setData;

    const inputFileRef = useRef( null );
    const toastRef = useRef( null );
    const [data,setData] = useState(null);

    async function onChange(event) {
        
        const file = event.target.files[0];

        const fileContent = await file.text();

        const toJson = JSON.parse(fileContent);

        setData(toJson);

        inputFileRef.current.value = null
        
        toastRef.current.show({severity: 'success', summary: 'File loaded with sucess!', detail: ''});
    }

    const onDivClick = () => {
        inputFileRef.current.click();
    }

    const clearFile = (event) => {
        setData(null);
        setGlobalData(null)
    }

    const generate_chart = async() => {
        setLoading(true);

        await setTimeout(()=>{
            setGlobalData(data)
            setLoading(false)
        },1500)

    }

    return (
      <section className={styles.card}> 
        <Toast ref={toastRef} />

        <div className={styles.upload}  onClick={onDivClick}>
            <i className="pi pi-plus"></i>
            <span  >Selecionar um arquivo </span>
            <input 
                type="file"
                ref={inputFileRef}
                onChange={onChange}  
                accept=".json" 
            />
        </div>

        
        <Button label="Criar Gráfico" icon="pi pi-play" iconPos="left" disabled={!data} className={styles.button} onClick={generate_chart} />  

        <Button label="Limpar Arquivo" icon="pi pi-times" iconPos="left" disabled={!data} onClick={clearFile} />   
  
      </section>
    )
  }
  