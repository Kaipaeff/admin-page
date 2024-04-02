import * as XLSX from 'xlsx';
import saveAs from 'file-saver';
import { IProduct } from '../types/Interfaces';

export const downloadList = (list: IProduct[]) => {
  const jsonData = JSON.stringify(list);
  const data = JSON.parse(jsonData);
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Product List');
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, 'product_list.xlsx');
};
