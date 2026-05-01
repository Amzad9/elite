"use client";

export default function SolutionsTabs() {
  return (
    <section id="solutions" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Payment Solutions
        </h2>

        <div role="tablist" className="tabs tabs-bordered justify-center">
          <input type="radio" name="solutions" role="tab" className="tab" aria-label="Card Payments" defaultChecked />
          <div role="tabpanel" className="tab-content p-6">
            <ul className="space-y-2">
              <li>✔ Visa, Mastercard, Amex</li>
              <li>✔ Fast funding</li>
              <li>✔ PCI compliant</li>
            </ul>
          </div>

          <input type="radio" name="solutions" role="tab" className="tab" aria-label="ACH & E-Check" />
          <div role="tabpanel" className="tab-content p-6">
            <ul className="space-y-2">
              <li>✔ Low processing cost</li>
              <li>✔ Ideal for B2B</li>
              <li>✔ Recurring billing</li>
            </ul>
          </div>

          <input type="radio" name="solutions" role="tab" className="tab" aria-label="POS Systems" />
          <div role="tabpanel" className="tab-content p-6">
            <ul className="space-y-2">
              <li>✔ Retail & restaurant POS</li>
              <li>✔ Inventory tracking</li>
              <li>✔ Cloud reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
