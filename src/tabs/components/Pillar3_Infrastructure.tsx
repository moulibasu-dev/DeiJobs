import { Rocket, Smartphone, LayoutTemplate } from 'lucide-react';

export default function Pillar3_Infrastructure() {
  return (
    <section id="pillar3-infra">
      <h3 className="text-2xl font-semibold mb-4">Pillar 3: Infrastructure Strategy (Website & UX/UI Enhancements)</h3>
      <p className="mb-4">The Infrastructure Pillar ensures that the DeiJobs website is optimized for both job seekers and employers, improving usability, conversion rates, and SEO performance.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Rocket className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">Technical Audit</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Key Findings:</p>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Slow site speed on mobile</li>
            <li>Missing meta descriptions</li>
            <li>Poor tablet responsiveness</li>
            <li>Need for schema markup</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Smartphone className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">UX/UI Enhancements</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Recommendations:</p>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Simplify user navigation</li>
            <li>Make CTAs more prominent</li>
            <li>Ensure fast mobile load times</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <LayoutTemplate className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">Landing Page Mock-up</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Key Elements:</p>
          <ul className="list-disc list-inside pl-4 text-sm">
            <li>Hero section with dual CTAs</li>
            <li>Filtered job listings</li>
            <li>Employer testimonials</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
