import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function ICPMapping() {
  return (
    <div className="space-y-12 text-blue-900">
      <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">Detailed ICP Mapping & User Journey</h2>

      <section id="b2b-icp">
        <h3 className="text-2xl font-semibold mb-4">3.1 B2B ICP – Ideal Company Profile</h3>
        <Card>
          <CardHeader><CardTitle>🎯 Primary ICP</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-semibold">Industry:</span> IT / SaaS / BFSI / Consulting / E-commerce</li>
              <li><span className="font-semibold">Company Size:</span> 100–5000 employees</li>
              <li><span className="font-semibold">Location:</span> Tier 1 India</li>
              <li><span className="font-semibold">Revenue Stage:</span> Growth-stage or Enterprise</li>
              <li><span className="font-semibold">Digital Maturity:</span> LinkedIn active, ESG reporting</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="decision-makers">
        <h3 className="text-2xl font-semibold mb-4">3.2 Decision Makers</h3>
        <p>CHRO, Head – Talent Acquisition, Diversity & Inclusion Lead, Recruitment Manager, Startup Founder. Age: 30–50. Behaviour: LinkedIn content consumers, HR newsletters readers.</p>
      </section>

      <section id="b2b-pain-points">
        <h3 className="text-2xl font-semibold mb-4">3.3 B2B Pain Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Pressure to show DEI metrics</li>
          <li>Difficulty sourcing structured diverse candidates</li>
          <li>High LinkedIn/Naukri cost</li>
          <li>Employer branding gaps in inclusive ecosystem</li>
          <li>Compliance reporting difficulty</li>
        </ul>
      </section>

      <section id="b2c-icp">
        <h3 className="text-2xl font-semibold mb-4">3.4 B2C ICP</h3>
        <Card>
          <CardHeader><CardTitle>🎯 Segments</CardTitle></CardHeader>
          <CardContent>
            <p>Women professionals (career breaks), LGBTQ+ professionals, Persons with disabilities, Mid-career professionals. Age: 22–38. Income: ₹3–20 LPA. Device: Mobile-first. Behaviour: LinkedIn + Instagram career reels.</p>
          </CardContent>
        </Card>
      </section>

      <section id="b2c-pain-points">
        <h3 className="text-2xl font-semibold mb-4">3.5 B2C Pain Points</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Biased screening experiences</li>
          <li>Lack of inclusive companies</li>
          <li>Low visibility in traditional portals</li>
          <li>Resume not reaching right HR</li>
        </ul>
      </section>

      <section id="user-journeys">
        <h3 className="text-2xl font-semibold mb-4">User Journeys</h3>
        <div className="grid md:grid-cols-2 gap-6">
            <Card>
                <CardHeader><CardTitle>3.6 User Journey (B2B)</CardTitle></CardHeader>
                <CardContent><p>Awareness → DEI pressure → Searches “diversity hiring platform India” → Lands on DeiJobs → Reviews employers → Demo → Subscription</p></CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle>3.7 User Journey (B2C)</CardTitle></CardHeader>
                <CardContent><p>Feels excluded → Searches inclusive jobs → Finds DeiJobs → Creates profile → Applies → Opts resume distribution → Hired.</p></CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}