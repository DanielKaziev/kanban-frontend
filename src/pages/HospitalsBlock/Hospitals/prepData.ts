import { TTableData } from './../../../components/Table/types';
import { IHospital } from './../../../types/hospitals';

const prepareTableData = (data: Array<IHospital>, handleClick: (id: string)=> void)=>{
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
                { value: row.nameRU },
                { value: row.address },
            ],
            onClick: () => handleClick(row.id),
        })
    })
    return rd;
}
export default prepareTableData;