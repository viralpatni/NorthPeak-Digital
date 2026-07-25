import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import img1 from '../assets/images (1).jpg'
import img2 from '../assets/images (2).jpg'
import img3 from '../assets/images.jpg'
import img4 from '../assets/images (4).jpg'
import img5 from '../assets/images (5).jpg'

const TEAM_MEMBERS = [
  {
    name: "Alex Sterling",
    role: "Founder & CEO",
    experience: "14+ Years",
    intro: "Former Director of Engineering at a Fortune 500.",
    quote: "We build products that people enjoy using.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=800",
    position: "object-top"
  },
  {
    name: "James Wilson",
    role: "Lead Product Designer",
    experience: "10+ Years",
    intro: "Specializes in design systems and editorial layouts.",
    quote: "Design is how it works, not just how it looks.",
    photo: img1,
    position: "object-[center_20%]"
  },
  {
    name: "Marcus Johnson",
    role: "Senior Frontend Engineer",
    experience: "8+ Years",
    intro: "Obsessed with React performance and animations.",
    quote: "Every frame matters in digital interactions.",
    photo: img2,
    position: "object-[center_15%]"
  },
  {
    name: "David Kim",
    role: "Backend Engineer",
    experience: "9+ Years",
    intro: "Architects scalable microservices and APIs.",
    quote: "True scale happens silently in the background.",
    photo: img3,
    position: "object-top"
  },
  {
    name: "Elena Rodriguez",
    role: "SEO Strategist",
    experience: "7+ Years",
    intro: "Drives organic growth through technical excellence.",
    quote: "Visibility requires a flawless technical foundation.",
    photo: img4,
    position: "object-[center_10%]"
  },
  {
    name: "Sarah Chen",
    role: "Project Manager",
    experience: "12+ Years",
    intro: "Ensures seamless delivery and stakeholder alignment.",
    quote: "Predictability is the ultimate luxury in software.",
    photo: img5,
    position: "object-[center_25%]"
  }
]

export default function Team() {
  return (
    <section className="py-section-y bg-background border-t border-border/40">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-[600px]">
            <h2 className="font-manrope font-extrabold text-[36px] sm:text-[44px] text-text-primary tracking-tight leading-tight">
              Meet the engineering team.
            </h2>
          </div>
          <a href="#careers" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all shrink-0 pb-2">
            Join the Team <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-border/60 rounded-3xl p-6 shadow-soft-sm flex flex-col"
            >
              {/* Realistic Avatar */}
              <div className="w-full h-48 rounded-2xl mb-6 bg-secondary overflow-hidden relative border border-border/40 flex justify-center items-end">
                <img 
                  src={member.photo}
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.position || 'object-center'}`}
                  loading="lazy"
                />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-manrope font-extrabold text-xl text-text-primary">
                    {member.name}
                  </h3>
                  <span className="text-sm font-bold text-primary block mt-1">
                    {member.role}
                  </span>
                </div>
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-text-muted hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors">
                  <ArrowUpRight size={14} />
                </a>
              </div>

              
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-4">
                {member.experience}
              </span>
              
              <p className="text-text-secondary font-manrope text-sm leading-relaxed mb-6">
                {member.intro}
              </p>

              <div className="mt-auto pt-5 border-t border-border/30">
                <p className="text-sm font-manrope font-medium text-text-muted italic">
                  "{member.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
