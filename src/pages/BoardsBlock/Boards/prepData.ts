import { TTableData } from './../../../components/Table/types';

const prepareTableData = (data: Array<any>, handleClick: (id: string)=> void)=>{
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