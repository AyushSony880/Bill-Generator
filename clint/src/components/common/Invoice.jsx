const Invoice = ({ billRecord }) => {
  const { id, school, month, year, items = [], grand_total = 0 } = billRecord;

  //round-off calculation
  const roundedGrandTotal = Number(grand_total || 0);
  const roundOff = Number(
    (Math.round(roundedGrandTotal) - roundedGrandTotal).toFixed(2)
  );
  const finalTotal = Number((roundedGrandTotal + roundOff).toFixed(2));

  return (
    <div className="w-[700px]  mx-auto bg-white text-[10px] leading-tight p-4 border border-black">
      {/* Title */}
      <h1 className="text-center font-semibold underline mb-2">
        Invoice-cum-Bill of Supply
      </h1>

      {/* Top header – company details + invoice meta */}
      <div className="flex justify-between gap-4 mb-2">
        {/* Left: Company details */}
        <div className="flex-1 border border-black p-2">
          <p className="font-bold text-[11px]">Veena Masala Udyog</p>
          <p>Old Atri Muhana, Nainia, West Champaran-845438</p>
          <p>2nd Unit Add: Narkatiya Chowk, Paharpur</p>
          <p>FSSAI - 20149810001102</p>
          <p>Vendor Code : VBARWC000056879</p>
          <p>UDYAM : UDYAM-BR-38-0000418 (Micro)</p>
          <p>GSTIN/UIN : 10ASVPP8107G1ZL</p>
          <p>State Name : Bihar, Code : 10</p>
        </div>

        {/* Right: Invoice info */}
        <div className="flex-[0.9] border border-black text-[10px]">
          <div className="flex border-b border-black">
            <div className="flex-1 border-r border-black p-1">
              <p className="font-semibold">Invoice No.</p>
              <p>2024-25/INV/{id || "018"}</p>
            </div>
            <div className="flex-1 p-1">
              <p className="font-semibold">Dated</p>
              <p>
                {month}-{year}
              </p>
            </div>
          </div>

          <div className="flex border-b border-black">
            <div className="flex-1 border-r border-black p-1">
              <p className="font-semibold">Buyer&apos;s Order No.</p>
              <p>—</p>
            </div>
            <div className="flex-1 p-1">
              <p className="font-semibold">Dated</p>
              <p>—</p>
            </div>
          </div>

          <div className="flex border-b border-black">
            <div className="flex-1 border-r border-black p-1">
              <p className="font-semibold">Despatch Doc No.</p>
              <p>18</p>
            </div>
            <div className="flex-1 p-1">
              <p className="font-semibold">Delivery Note Date</p>
              <p>—</p>
            </div>
          </div>

          <div className="border-b border-black p-1">
            <p className="font-semibold">Despatched through</p>
            <p>Road</p>
          </div>

          <div className="p-1">
            <p className="font-semibold">Destination</p>
            <p>Paharpur</p>
          </div>
        </div>
      </div>

      {/* Buyer details */}
      <div className="flex mb-2 border border-black">
        <div className="flex-[1.3] border-r border-black p-2">
          <p className="font-semibold text-[11px]">Buyer (Bill to)</p>
          <p>{school}</p>
          <p>State Name : Bihar, PinCode : 845438</p>
        </div>
        <div className="flex-1 p-2">
          <p className="font-semibold">Buyer (Ship to)</p>
          <p>{school}</p>
          <p>State Name : Bihar, PinCode : 845438</p>
        </div>
      </div>

      {/* Items table */}
      <table className="w-full border border-black border-collapse text-[10px]">
        <thead>
          <tr>
            <th className="border border-black px-1 py-1 w-6">Sr.</th>
            <th className="border border-black px-1 py-1 text-left">
              Description of Goods
            </th>
            <th className="border border-black px-1 py-1">HSN/SAC</th>
            <th className="border border-black px-1 py-1">Quantity</th>
            <th className="border border-black px-1 py-1">Rate</th>
            <th className="border border-black px-1 py-1">per</th>
            <th className="border border-black px-1 py-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td className="border border-black px-1 py-1 text-center">
                {idx + 1}
              </td>
              <td className="border border-black px-1 py-1">
                {item.product_name}
              </td>
              <td className="border border-black px-1 py-1 text-center">
                {"4258"}
              </td>
              <td className="border border-black px-1 py-1 text-center">
                {item.total_weight?.toFixed
                  ? item.total_weight.toFixed(3)
                  : item.total_weight}{" "}
                {item.unit}
              </td>
              <td className="border border-black px-1 py-1 text-right">
                {item.rate?.toFixed ? item.rate.toFixed(2) : item.rate}
              </td>
              <td className="border border-black px-1 py-1 text-center">
                {item.unit}
              </td>
              <td className="border border-black px-1 py-1 text-right">
                {item.total_cost}
              </td>
            </tr>
          ))}

          {/* Sub-total row */}
          <tr>
            <td
              colSpan={6}
              className="border border-black px-1 py-1 text-right font-semibold"
            >
              Sub Total
            </td>
            <td className="border border-black px-1 py-1 text-right font-semibold">
              {roundedGrandTotal.toFixed(2)}
            </td>
          </tr>

          {/* Round off */}
          <tr>
            <td
              colSpan={6}
              className="border border-black px-1 py-1 text-right"
            >
              Round Off
            </td>
            <td className="border border-black px-1 py-1 text-right">
              {roundOff >= 0
                ? roundOff.toFixed(2)
                : `(${Math.abs(roundOff).toFixed(2)})`}
            </td>
          </tr>

          {/* Final total */}
          <tr>
            <td
              colSpan={6}
              className="border border-black px-1 py-1 text-right font-semibold text-[11px]"
            >
              Total
            </td>
            <td className="border border-black px-1 py-1 text-right font-semibold text-[11px]">
              {finalTotal.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Amount in words + bank + declaration */}
      <div className="flex mt-3 gap-3 text-[9px]">
        <div className="flex-[1.3]">
          <p className="font-semibold mb-1">Amount Chargeable (in words)</p>
          <p className="border border-black p-1 h-10">
            INR Twenty One Thousand Five Hundred Ten Only
          </p>
          <p className="mt-2 font-semibold">Declaration</p>
          <ol className="list-decimal list-inside">
            <li>
              We declare that this invoice shows the actual price of the goods
              described and that all particulars are true and correct.
            </li>
            <li>Full payment is due upon receipt of this invoice.</li>
            <li>
              All above products/services delivery confirmation with seal and
              signature as below.
            </li>
          </ol>
        </div>

        <div className="flex-1">
          <p className="font-semibold mb-1">Company&apos;s Bank Details</p>
          <div className="border border-black p-1 mb-2">
            <p>AC Holder&apos;s Name : M/s Veena Masala Udyog</p>
            <p>Bank Name : Indian Bank</p>
            <p>A/C No. : 50504852577</p>
            <p>Branch & IFSC Code : Bettiah & IDIB000B740</p>
          </div>
          <div className="mt-4 text-right">
            <p>for Veena Masala Udyog</p>
            <p className="mt-8">Authorised Signatory</p>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-[8px]">
        <p>SUBJECT TO BETTIAH JURISDICTION</p>
        <p>This is a Computer Generated Invoice</p>
      </div>
    </div>
  );
};

export default Invoice;
