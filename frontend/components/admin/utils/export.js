import * as XLSX from "xlsx";
import { formatAdminValue, sanitizeFileName } from "./format.js";

function downloadFile(blob, fileName) {
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  window.URL.revokeObjectURL(url);
}

function buildExportRows(rows, columns) {
  return rows.map((row) => {
    const exportRow = {};

    columns.forEach((column) => {
      exportRow[column.label] = formatAdminValue(row?.[column.key]);
    });

    return exportRow;
  });
}

export function exportAdminRowsToCsv(rows, columns, fileName) {
  const headers = columns.map((column) => column.label);
  const csvRows = [headers.join(",")];

  rows.forEach((row) => {
    const values = columns.map((column) => {
      const value = formatAdminValue(row?.[column.key]);
      return `"${String(value).replace(/"/g, '""')}"`;
    });

    csvRows.push(values.join(","));
  });

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
  downloadFile(blob, `${sanitizeFileName(fileName)}.csv`);
}

export function exportAdminRowsToXlsx(rows, columns, fileName) {
  const worksheet = XLSX.utils.json_to_sheet(buildExportRows(rows, columns));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Admin Data");

  const xlsxData = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([xlsxData], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });

  downloadFile(blob, `${sanitizeFileName(fileName)}.xlsx`);
}
