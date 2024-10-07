import { IApplication } from './../../../types/application';
import { TTableData } from './../../../components/Table/types';
import { IHospital } from './../../../types/hospitals';

const prepareTableData = (data: Array<IApplication>, handleClick: (id: string)=> void)=>{
    const rd: TTableData ={
        header: {
          data: [
            { value: "I18N_HOSPITAL_ID" },
            { value: "I18N_HOSPITAL_NAME" },
            { value: "I18N_HOSPITAL_CODE" },
          ],
        },
        rows: []
    }
    data.forEach((row)=>{
        rd.rows.push({
            data: [
                { value: row.id },
                { value: row.hospitalName },
                { value: row.patient.firstName },
            ],
            onClick: () => handleClick(row.id),
        })
    })
    return rd;
}
export default prepareTableData;