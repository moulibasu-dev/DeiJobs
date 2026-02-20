import { useState, useMemo } from 'react';
import { Target, Users, MessageSquare, BarChart2, Linkedin, Building2, Download, Search, ChevronUp, ChevronDown } from 'lucide-react';

const ICP_DATA = [
  { name: 'TCS', ind: 'IT Services', loc: 'Mumbai', contact: 'Shaji Mathew', role: 'CHRO', link: 'https://www.linkedin.com/in/shaji-mathew/' },
  { name: 'Cognizant', ind: 'IT Services', loc: 'Bangalore', contact: 'Harsha Nair', role: 'VP, Talent Acquisition', link: 'https://www.linkedin.com/in/harsha-nair/' },
  { name: 'Accenture', ind: 'Consulting', loc: 'Delhi NCR', contact: 'Pooja Sharma', role: 'Head, D&I', link: 'https://www.linkedin.com/in/pooja-sharma/' },
  { name: 'Capgemini', ind: 'IT Services', loc: 'Pune', contact: 'Amit Deshmukh', role: 'HR Lead', link: 'https://www.linkedin.com/in/amit-deshmukh/' },
  { name: 'Deloitte India', ind: 'Consulting', loc: 'Mumbai', contact: 'Neha Kapoor', role: 'Senior HR Manager', link: 'https://www.linkedin.com/in/nehakapoor/' },
  { name: 'Infosys', ind: 'IT Services', loc: 'Hyderabad', contact: 'Ravi Kumar', role: 'Talent Acquisition Head', link: 'https://www.linkedin.com/in/ravi-kumar/' },
  { name: 'PwC India', ind: 'Consulting', loc: 'Delhi NCR', contact: 'Ruchi Sood', role: 'Director, D&I', link: 'https://www.linkedin.com/in/ruchi-sood/' },
  { name: 'HCL Technologies', ind: 'IT Services', loc: 'Noida', contact: 'Priya Rathi', role: 'HR Head', link: 'https://www.linkedin.com/in/priya-rathi/' },
  { name: 'Mindtree', ind: 'IT Services', loc: 'Bangalore', contact: 'Sanjay Agarwal', role: 'Head, Recruitment', link: 'https://www.linkedin.com/in/sanjay-agarwal/' },
  { name: 'Wipro', ind: 'IT Services', loc: 'Pune', contact: 'Shweta Yadav', role: 'Talent Acquisition Lead', link: 'https://www.linkedin.com/in/shweta-yadav/' },
  { name: 'Birlasoft', ind: 'IT Services', loc: 'Chennai', contact: 'Vineet Kumar', role: 'VP, Human Resources', link: 'https://www.linkedin.com/in/vineet-kumar/' },
  { name: 'TATA Steel', ind: 'Manufacturing', loc: 'Jamshedpur', contact: 'Rina Sethi', role: 'D&I Lead', link: 'https://www.linkedin.com/in/rina-sethi/' },
  { name: 'GE India', ind: 'Manufacturing', loc: 'Bangalore', contact: 'Sushma Naik', role: 'HR Partner, Diversity & Inclusion', link: 'https://www.linkedin.com/in/sushma-naik/' },
  { name: 'Hindustan Unilever', ind: 'FMCG', loc: 'Mumbai', contact: 'Sunil Jadhav', role: 'CHRO', link: 'https://www.linkedin.com/in/sunil-jadhav/' },
  { name: 'Cisco', ind: 'IT Services', loc: 'Bangalore', contact: 'Aarav Patel', role: 'Diversity and Inclusion Leader', link: 'https://www.linkedin.com/in/aarav-patel/' },
  { name: 'SAP India', ind: 'IT Services', loc: 'Delhi NCR', contact: 'Shalini Roy', role: 'Recruitment Manager', link: 'https://www.linkedin.com/in/shalini-roy/' },
  { name: 'Adobe', ind: 'IT Services', loc: 'Bangalore', contact: 'Shuchi Jain', role: 'Head of HR and D&I', link: 'https://www.linkedin.com/in/shuchi-jain/' },
  { name: 'Amazon India', ind: 'E-commerce', loc: 'Hyderabad', contact: 'Amit Verma', role: 'Senior Talent Acquisition Partner', link: 'https://www.linkedin.com/in/amit-verma/' },
  { name: 'Flipkart', ind: 'E-commerce', loc: 'Bangalore', contact: 'Kavita Sharma', role: 'D&I Specialist', link: 'https://www.linkedin.com/in/kavita-sharma/' },
  { name: 'ZS Associates', ind: 'Consulting', loc: 'Delhi NCR', contact: 'Priyanka Bhat', role: 'Talent Acquisition Manager', link: 'https://www.linkedin.com/in/priyanka-bhat/' },
  { name: 'Uber', ind: 'Technology', loc: 'Mumbai', contact: 'Akash Gupta', role: 'Head of People Operations', link: 'https://www.linkedin.com/in/akash-gupta/' },
  { name: 'JP Morgan Chase', ind: 'BFSI', loc: 'Mumbai', contact: 'Seema Desai', role: 'CHRO', link: 'https://www.linkedin.com/in/seema-desai/' },
  { name: 'Bank of America', ind: 'BFSI', loc: 'Delhi NCR', contact: 'Rakesh Verma', role: 'HR Business Partner', link: 'https://www.linkedin.com/in/rakesh-verma/' },
  { name: 'Standard Chartered', ind: 'BFSI', loc: 'Mumbai', contact: 'Maya Sharma', role: 'Diversity Lead', link: 'https://www.linkedin.com/in/maya-sharma/' },
  { name: 'ICICI Bank', ind: 'BFSI', loc: 'Mumbai', contact: 'Deepika Gupta', role: 'HR Head', link: 'https://www.linkedin.com/in/deepika-gupta/' },
  { name: 'Kotak Mahindra', ind: 'BFSI', loc: 'Mumbai', contact: 'Aman Patel', role: 'Head of People & Culture', link: 'https://www.linkedin.com/in/aman-patel/' },
  { name: 'Axis Bank', ind: 'BFSI', loc: 'Delhi NCR', contact: 'Priya Mehta', role: 'Talent Acquisition Lead', link: 'https://www.linkedin.com/in/priya-mehta/' },
  { name: 'Baroda Bank', ind: 'BFSI', loc: 'Mumbai', contact: 'Sneha Reddy', role: 'CHRO', link: 'https://www.linkedin.com/in/sneha-reddy/' },
  { name: 'Bank of India', ind: 'BFSI', loc: 'Pune', contact: 'Meena Kumari', role: 'HR Business Partner', link: 'https://www.linkedin.com/in/meena-kumari/' },
  { name: 'Tata Consultancy', ind: 'IT Services', loc: 'Chennai', contact: 'Ruchi Gupta', role: 'Diversity and Inclusion Partner', link: 'https://www.linkedin.com/in/ruchi-gupta/' },
  { name: 'Mindspace', ind: 'Real Estate', loc: 'Mumbai', contact: 'Prashant Singh', role: 'D&I Lead', link: 'https://www.linkedin.com/in/prashant-singh/' },
  { name: 'Shapoorji Pallonji', ind: 'Construction', loc: 'Pune', contact: 'Deepak Sharma', role: 'Talent Acquisition Lead', link: 'https://www.linkedin.com/in/deepak-sharma/' },
  { name: 'Larsen & Toubro', ind: 'Engineering', loc: 'Chennai', contact: 'Radhika Bhagat', role: 'HR Head', link: 'https://www.linkedin.com/in/radhika-bhagat/' },
  { name: 'Godrej Industries', ind: 'Manufacturing', loc: 'Mumbai', contact: 'Neelam Agarwal', role: 'Senior Talent Acquisition Manager', link: 'https://www.linkedin.com/in/neelam-agarwal/' },
];

export default function ICP_ABM() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof typeof ICP_DATA[0] | null, direction: 'asc' | 'desc' }>({
    key: null,
    direction: 'asc'
  });

  const handleSort = (key: keyof typeof ICP_DATA[0]) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedData = useMemo(() => {
    let data = [...ICP_DATA];

    // Filtering
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      data = data.filter(item => 
        item.name.toLowerCase().includes(lowerSearch) ||
        item.ind.toLowerCase().includes(lowerSearch) ||
        item.loc.toLowerCase().includes(lowerSearch) ||
        item.contact.toLowerCase().includes(lowerSearch) ||
        item.role.toLowerCase().includes(lowerSearch)
      );
    }

    // Sorting
    if (sortConfig.key) {
      data.sort((a, b) => {
        const aValue = a[sortConfig.key!].toString().toLowerCase();
        const bValue = b[sortConfig.key!].toString().toLowerCase();
        
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return data;
  }, [searchTerm, sortConfig]);

  const handleExportCSV = () => {
    const headers = ['Company', 'Industry', 'Location', 'Name', 'Designation', 'LinkedIn'];
    const csvContent = [
      headers.join(','),
      ...filteredAndSortedData.map(row => [
        `"${row.name}"`,
        `"${row.ind}"`,
        `"${row.loc}"`,
        `"${row.contact}"`,
        `"${row.role}"`,
        `"${row.link}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'DeiJobs_ICP_List.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="icp-abm" className="animate-in fade-in duration-300 space-y-8">
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-2xl font-semibold mb-4 text-blue-900">Account-Based Marketing (ABM) Using LinkedIn</h3>
        <p className="mb-6 text-gray-700">
          Account-Based Marketing (ABM) is a highly targeted approach where DeiJobs can identify and engage with specific high-value accounts (companies and professionals) that are most likely to benefit from the platform’s diversity hiring solutions. LinkedIn, being the premier professional networking platform, is an ideal channel for ABM because of its precision targeting capabilities.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">1. Identify and Target Ideal Accounts</h4>
                <p className="text-sm text-gray-600 mt-1">Focus on companies in IT, BFSI, Consulting, and E-commerce with dedicated HR/D&I departments.</p>
                <ul className="list-disc list-inside pl-2 text-xs text-gray-500 mt-2">
                  <li>Use LinkedIn filters for industry, location, size.</li>
                  <li>Target HR heads, diversity leads, recruitment managers.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">2. Create Personalized Content</h4>
                <p className="text-sm text-gray-600 mt-1">Craft custom outreach content speaking directly to pain points.</p>
                <ul className="list-disc list-inside pl-2 text-xs text-gray-500 mt-2">
                  <li><strong>Sponsored Content:</strong> Case studies & success stories.</li>
                  <li><strong>InMail Campaigns:</strong> Personalized messages to decision-makers.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">3. Advanced Targeting</h4>
                <p className="text-sm text-gray-600 mt-1">Use LinkedIn's precision tools to reach the right eyes.</p>
                <ul className="list-disc list-inside pl-2 text-xs text-gray-500 mt-2">
                  <li>Dynamic Ads & Message Ads.</li>
                  <li>Custom Audiences for retargeting.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">4. Build Relationships</h4>
                <p className="text-sm text-gray-600 mt-1">Nurture leads over time, not just one-off contact.</p>
                <ul className="list-disc list-inside pl-2 text-xs text-gray-500 mt-2">
                  <li>Share relevant DEI content regularly.</li>
                  <li>Engage in HR & Diversity LinkedIn groups.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                <BarChart2 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">5. Measure & Optimize</h4>
                <p className="text-sm text-gray-600 mt-1">Track metrics to ensure ROI.</p>
                <ul className="list-disc list-inside pl-2 text-xs text-gray-500 mt-2">
                  <li>Track Engagement, CTR, Lead Gen.</li>
                  <li>Use Conversion Tracking & A/B Testing.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-900">Sample 30-Member ICP List</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search accounts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              Export to CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-50 text-blue-900 font-semibold">
              <tr>
                {[
                  { label: 'Company', key: 'name' },
                  { label: 'Industry', key: 'ind' },
                  { label: 'Location', key: 'loc' },
                  { label: 'Name', key: 'contact' },
                  { label: 'Designation', key: 'role' },
                ].map((col, idx) => (
                  <th 
                    key={col.key}
                    onClick={() => handleSort(col.key as keyof typeof ICP_DATA[0])}
                    className={`px-4 py-3 cursor-pointer hover:bg-blue-100 transition-colors group ${idx === 0 ? 'rounded-tl-lg' : ''}`}
                  >
                    <div className="flex items-center gap-2">
                      {col.label}
                      <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronUp className={`w-3 h-3 -mb-1 ${sortConfig.key === col.key && sortConfig.direction === 'asc' ? 'text-blue-600 opacity-100' : 'text-gray-400'}`} />
                        <ChevronDown className={`w-3 h-3 ${sortConfig.key === col.key && sortConfig.direction === 'desc' ? 'text-blue-600 opacity-100' : 'text-gray-400'}`} />
                      </div>
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 rounded-tr-lg">LinkedIn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {filteredAndSortedData.length > 0 ? (
                filteredAndSortedData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-4 py-2 font-medium">{row.name}</td>
                    <td className="px-4 py-2">{row.ind}</td>
                    <td className="px-4 py-2">{row.loc}</td>
                    <td className="px-4 py-2">{row.contact}</td>
                    <td className="px-4 py-2 text-gray-500">{row.role}</td>
                    <td className="px-4 py-2">
                      <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                        <Linkedin className="w-3 h-3" />
                        Profile
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500 italic">
                    No matching accounts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Sample Hook Messages for Outreach</h3>
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-semibold text-blue-800 mb-2">1. Hook for TCS (Mumbai)</h4>
            <p className="text-sm text-gray-700 italic">
              "Hi Shaji,<br/><br/>
              I noticed that TCS has been making significant strides in diversity and inclusion, especially with initiatives aimed at gender diversity and inclusive talent acquisition. At DeiJobs, we’ve helped organizations like yours access verified diverse talent and meet diversity hiring goals with a curated talent pool.<br/><br/>
              Are you open to exploring how we can help TCS continue its journey of driving diversity in leadership and throughout the company?"
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-semibold text-blue-800 mb-2">2. Hook for Cognizant (Bangalore)</h4>
            <p className="text-sm text-gray-700 italic">
              "Hello Harsha,<br/><br/>
              Cognizant has been a frontrunner in embracing inclusive hiring practices in the IT sector. We at DeiJobs specialize in offering verified diverse talent pools that can help you fast-track your recruitment goals while ensuring inclusivity in your workforce.<br/><br/>
              Could we connect to discuss how DeiJobs can support Cognizant’s continued success in meeting diversity and inclusion objectives?"
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-semibold text-blue-800 mb-2">3. Hook for Accenture (Delhi NCR)</h4>
            <p className="text-sm text-gray-700 italic">
              "Hi Pooja,<br/><br/>
              I see that Accenture is deeply committed to empowering women in leadership and workplace inclusivity. At DeiJobs, we provide specialized solutions for inclusive hiring, connecting companies with a verified diverse talent pool.<br/><br/>
              Are you open to learning how DeiJobs can enhance your diversity recruitment strategy while meeting your ESG targets?"
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">General Hook Structure</h4>
            <ul className="list-disc list-inside pl-2 text-sm text-gray-700 space-y-1">
              <li><strong>Introduction:</strong> Personal greeting + reference to company's recent DEI initiative.</li>
              <li><strong>Value Proposition:</strong> Highlight verified diverse talent pools & D&I solutions.</li>
              <li><strong>Call-to-Action:</strong> Invite to connect or schedule a call.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
