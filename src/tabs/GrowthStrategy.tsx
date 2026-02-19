import Pillar1_Reach from './components/Pillar1_Reach';
import Pillar2_Communication from './components/Pillar2_Communication';
import Pillar3_Infrastructure from './components/Pillar3_Infrastructure';
import Pillar4_KPIs from './components/Pillar4_KPIs';

export default function GrowthStrategy() {
  return (
    <div className="space-y-12 text-blue-900">
      <section>
        <h2 className="text-3xl font-bold tracking-tight font-serif mb-4">The 4-Pillar Growth Strategy</h2>
        <p className="mb-4">The 4-Pillar Strategy serves as the foundation for DeiJobs' growth and success in India's diversity hiring ecosystem. This strategy is designed to address the key needs of B2B employers looking for diverse talent and B2C job seekers looking for inclusive job opportunities. Let's break it down into four strategic pillars—Reach, Communication, Infrastructure, and KPIs—each focusing on key tactics to ensure growth and sustainability for DeiJobs.</p>
        
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-blue-100 mb-8">
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vS7_GFgNTv6dGCjh9Fb4wCEuqF9tlh2l5S0kIbdxxZogI8sO61-gsNmDgsu7bJAh1dprDGj1s5iJesh/pubembed?start=true&loop=true&delayms=10000" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            allowFullScreen={true} 
          ></iframe>
        </div>
      </section>

      <Pillar1_Reach />
      <Pillar2_Communication />
      <Pillar3_Infrastructure />
      <Pillar4_KPIs />

      <section id="conclusion">
        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p>This comprehensive, detailed proposal for DeiJobs outlines a data-driven strategy across four pillars to ensure brand growth, lead generation, effective communication, and conversion optimization. The recommendations aim to establish DeiJobs as the leading diversity hiring platform in India, focusing on targeting HR professionals, recruiters, and job seekers looking for inclusive opportunities.</p>
      </section>
    </div>
  );
}