import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const B2BObjectivesData = [
  { name: 'Acquire Companies', value: 250, goal: '150-250' },
  { name: 'Convert to Paid', value: 60, goal: '20-30%' },
];

const B2CObjectivesData = [
  { name: 'Grow Candidate Pool', value: 30000, goal: '20k-40k' },
  { name: 'Profile Completion > 70%', value: 75, goal: '>70%' },
];

export default function Objectives() {
  return (
    <div className="space-y-12 text-blue-900">
      <section id="core-positioning">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">1.1 Core Business Positioning</h2>
        <p className="mb-2">DeiJobs is a focused diversity hiring marketplace in India connecting:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><span className="font-semibold">B2B:</span> Inclusive employers with structured diversity mandates</li>
          <li><span className="font-semibold">B2C:</span> Underrepresented professionals seeking equitable opportunities</li>
        </ul>
        <p className="mt-2 font-semibold">Unlike generic job portals, DeiJobs operates as a structured DEI hiring ecosystem, not just a listing board.</p>
      </section>

      <section id="business-objectives">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">1.2 Business Objectives (First 6 Months)</h2>
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">🎯 Primary Objective</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Drive high-quality company acquisition in Tier 1 corporate hubs while maintaining marketplace liquidity balance (demand-supply ratio).</p>
          </CardContent>
        </Card>
      </section>

      <section id="b2b-objectives">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">1.3 B2B Objectives</h2>
        <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
            <li>Acquire 150–250 qualified company accounts in: Mumbai, Bangalore, Delhi NCR, Hyderabad, Pune, Chennai</li>
            <li>Convert 20–30% of acquired companies to paid subscription plans</li>
            <li>Improve Free → Paid conversion, Trial → Subscription conversion, and Cost per Qualified Company Lead</li>
            <li>Position DeiJobs as a structured DEI hiring platform, a cost-efficient alternative, and a compliance-support partner.</li>
        </ul>
      </section>

      <section id="b2c-objectives">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">1.4 B2C Objectives</h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Grow candidate pool by 20,000–40,000 relevant profiles</li>
            <li>Improve profile completion rate &gt; 70%</li>
            <li>Increase opt-in to resume distribution service</li>
            <li>Improve repeat login rate and job application rate</li>
        </ul>
      </section>

      <section id="funnel-objectives">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">1.5 Conversion & Funnel Objectives</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-blue-50">
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Funnel Stage</th>
                        <th className="py-2 px-4 border-b text-left">Objective</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="py-2 px-4 border-b">Traffic</td><td className="py-2 px-4 border-b">Drive high-intent DEI & hiring traffic</td></tr>
                    <tr><td className="py-2 px-4 border-b">Lead</td><td className="py-2 px-4 border-b">Capture structured B2B leads</td></tr>
                    <tr><td className="py-2 px-4 border-b">Nurture</td><td className="py-2 px-4 border-b">Implement automation for conversion</td></tr>
                    <tr><td className="py-2 px-4 border-b">Monetisation</td><td className="py-2 px-4 border-b">Subscription conversion optimisation</td></tr>
                    <tr><td className="py-2 px-4 border-b">Retention</td><td className="py-2 px-4 border-b">Employer re-subscription & candidate engagement</td></tr>
                </tbody>
            </table>
        </div>
      </section>

      <section id="primary-challenges">
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">1.6 Primary Challenges (As Identified)</h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Competing against established players like LinkedIn, Naukri.com, and Foundit</li>
            <li>Differentiating from “just another job board”</li>
            <li>Educating Indian market about structured DEI hiring</li>
            <li>Balancing employer demand & candidate supply</li>
        </ul>
      </section>
    </div>
  );
}