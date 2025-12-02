// controllers/invoice.controller.js (ya same file me)

import fs from "fs";
import path from "path";

const templatePath = path.join(process.cwd(), "templates", "invoiceTemplate.html");

export const buildInvoiceHtml = (billRecord) => {
  let html = fs.readFileSync(templatePath, "utf8");

  const { id, school, month, year, items = [], grand_total = 0 } = billRecord;

  const roundedGrandTotal = Number(grand_total || 0);
  const roundOff = Number(
    (Math.round(roundedGrandTotal) - roundedGrandTotal).toFixed(2)
  );
  const finalTotal = Number((roundedGrandTotal + roundOff).toFixed(2));

  const itemRows = items
    .map(
      (item, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td>${item.product_name}</td>
          <td>${item.hsn}</td>
          <td>${item.total_weight} ${item.unit}</td>
          <td>${Number(item.rate).toFixed(2)}</td>
          <td>${item.unit}</td>
          <td>${Number(item.total_cost).toFixed(2)}</td>
        </tr>
      `
    )
    .join("");

  html = html
    .replace(/{{ID}}/g, id || "018")
    .replace(/{{SCHOOL}}/g, school)
    .replace(/{{MONTH}}/g, month)
    .replace(/{{YEAR}}/g, year)
    .replace(/{{ITEM_ROWS}}/g, itemRows)
    .replace(/{{ROUNDED_GRAND_TOTAL}}/g, roundedGrandTotal.toFixed(2))
    .replace(/{{ROUND_OFF}}/g, roundOff.toFixed(2))
    .replace(/{{FINAL_TOTAL}}/g, finalTotal.toFixed(2));

  return html;
};
