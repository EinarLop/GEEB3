import React from 'react';
import styles from './CreateProject3Styles.module.scss'
import Header  from '../Components/Header'
//T--> Title
//S--> Status

function CreateProject3(){
    return(

    <div className={styles.Wrapper}> 
        <h1 className={styles.Title}>Create a new project</h1>

        <div className={styles.TSContainer}>
            <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Project title</label>
                <input className={styles.Input}/>
            </div>

            <div className={styles.InputLabelContainer}>
                <label className={styles.Label}>Status</label>
                <select className={styles.Select}>
                    <option className={styles.Option}>
                        Open
                    </option>
                    <option>
                       Closed
                    </option>
                        </select>
             </div>
        </div>

                </div>
            

          

           




    );
}

export default CreateProject3;