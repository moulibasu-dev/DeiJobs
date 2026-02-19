import { Briefcase, UserCheck } from 'lucide-react';

export default function Pillar2_Communication() {
  return (
    <section id="pillar2-communication">
      <h3 className="text-2xl font-semibold mb-4">Pillar 2: Communication Strategy (Persona-Based Messaging)</h3>
      <p className="mb-4">The Communication Pillar focuses on crafting personalized communication that resonates with both job seekers and employers. It ensures that DeiJobs’ messaging is aligned with each persona’s pain points and journey stage, moving them closer to conversion.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">For Employers (B2B)</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Persona:</p>
          <p className="text-sm mb-2">HR Managers, CHROs, D&I Leads</p>
          <p className="font-semibold text-sm mb-2">Pain Points:</p>
          <ul className="list-disc list-inside pl-4 text-sm mb-2">
            <li>Difficulty sourcing diverse talent</li>
            <li>Struggling to meet ESG goals</li>
          </ul>
          <p className="font-semibold text-sm mb-2">Key Message:</p>
          <p className="text-sm mb-2">“DeiJobs connects you with verified diverse talent. Start building a more inclusive workforce today.”</p>
          <p className="font-semibold text-sm mb-2">CTA:</p>
          <p className="text-sm">“Post a Job” or “Access DEI Candidates”</p>
        </div>

        <div className="p-6 rounded-lg bg-gray-50 border">
          <div className="flex items-center gap-4 mb-4">
            <UserCheck className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">For Job Seekers (B2C)</h4>
          </div>
          <p className="font-semibold text-sm mb-2">Persona:</p>
          <p className="text-sm mb-2">Women, LGBTQ+, PwD professionals</p>
          <p className="font-semibold text-sm mb-2">Pain Points:</p>
          <ul className="list-disc list-inside pl-4 text-sm mb-2">
            <li>Lack of access to inclusive jobs</li>
            <li>Need for career growth & flexibility</li>
          </ul>
          <p className="font-semibold text-sm mb-2">Key Message:</p>
          <p className="text-sm mb-2">“Join a community of inclusive employers who value your unique background.”</p>
          <p className="font-semibold text-sm mb-2">CTA:</p>
          <p className="text-sm">“Create Your Profile” or “Apply for Inclusive Jobs”</p>
        </div>
      </div>
    </section>
  );
}
