import React, { useState } from 'react';
import {Line} from 'react-chartjs-2';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';

import dataFieldsValidation from '../../utils/dataFieldsValidation';
import styles from './linechart.module.css'

export default function LineChart(props){
    const [index, setIndex] = useState(0);

    const data = props.data;

    const validation = dataFieldsValidation(data);

    const days_list_data = Object.entries(data);

    const days_list_data_styled = days_list_data
        .map(day => {
            const datasets = day[1].datasets.map(dataset => {
                return {
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#fff',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: dataset.borderColor,
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: dataset.borderColor,
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 7,
                    ...dataset
                }
                })

            return {
                labels: day[1].labels,
                datasets
            }
                
        });

    const days_list = days_list_data.map((day,index)=> {return { label: day[0], value: index }});

    const  chartOptions = {    
        scales: {
            y: {
              // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
              suggestedMin: 0,
      
              // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
              suggestedMax: 40,
            }
          }
        };

    const onDayChange = (e) => {
        setIndex(e.value);
    }
    
    return (
        <div style={{ width: '80rem', marginBottom: '2em',marginTop: '2em'}}>
             <Card  >
                 <div className={styles.header}>
                     <span className={styles.tittle}>{validation ? `Gráfico Diário (${days_list_data[index][0]})` : 'Dados Inválidos'}</span>

                     <Dropdown value={index} options={days_list} onChange={onDayChange} optionLabel="label" placeholder="Selecione o dia" />
                 </div>
                {validation && <Line data={days_list_data_styled[index]} options={chartOptions} />   }
            </Card>           
        </div>
    )
}