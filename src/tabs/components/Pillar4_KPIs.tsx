import { Target, DollarSign, Repeat } from 'lucide-react';

export default function Pillar4_KPIs() {
  return (
    <section id="pillar4-kpis">
      <h3 className="text-2xl font-semibold mb-4">Pillar 4: KPIs and CAC-LTV Calculation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Target className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">Success KPIs</h4>
          </div>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Impressions & CTR</li>
            <li>Conversion Rate</li>
            <li>Customer Acquisition Cost (CAC)</li>
            <li>Return on Investment (ROI)</li>
            <li>Lead Generation</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <DollarSign className="w-8 h-8 text-green-500" />
            <h4 className="text-xl font-semibold">CAC Estimates</h4>
          </div>
          <p className="font-semibold text-sm mb-2">For Employers:</p>
          <p className="text-sm mb-2">₹1,500 - ₹3,000 per acquisition</p>
          <p className="font-semibold text-sm mb-2">For Job Seekers:</p>
          <p className="text-sm">₹200 - ₹500 per profile</p>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Repeat className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">LTV Calculation</h4>
          </div>
          <p className="font-semibold text-sm mb-2">For Employers:</p>
          <p className="text-sm mb-2">Based on annual job postings</p>
          <p className="font-semibold text-sm mb-2">For Job Seekers:</p>
          <p className="text-sm">Based on successful placements</p>
        </div>
      </div>
    </section>
  );
}
