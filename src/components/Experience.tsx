import { motion } from "framer-motion";

const experiences = [
{
  role: "Senior Vice President",
  company: "AI Work",
  period: "01/2025 – Present",
  location: "Gurugram",
  highlights: [
  "Achieved $2M annual revenue target with a team of 10 in the first year",
  "Signed clients like StockTwits (USA), Zerodha, IndMoney, Wonderful Sky (China)",
  "Led GTM for AI products: Freddie, Luca, Yumi, Orion, Hermes, Olympus, Saras",
  "Attracted $400K pipeline for AI engineering services (Multi-Agent RAG)"]

},
{
  role: "Outbound Sales Team Lead",
  company: "Maestra",
  period: "09/2020 – 12/2024",
  location: "Kolkata",
  highlights: [
  "Exceeded annual target — USD 490K in last fiscal year",
  "Acquired Netflix India, Koo, and Facebook as clients",
  "Built data-driven sales culture, enhancing operational metrics"]

},
{
  role: "CEO & Founder",
  company: "Capacloud",
  period: "07/2014 – 08/2020",
  location: "Bangalore",
  highlights: [
  "Secured USD 150K venture capital for IoT vertical farming",
  "Partnered with Indian Oil, Godrej, Tata Steel",
  "Designed vertical garden products for mass-market"]

},
{
  role: "Profit Center Head",
  company: "Hellmann Worldwide Logistics",
  period: "03/2012 – 02/2014",
  location: "Dubai",
  highlights: [
  "Developed OCR-based automated customs clearance software",
  "Led team of 12 to achieve USD 600K annual revenue"]

},
{
  role: "Research Scientist",
  company: "Tata Steel",
  period: "03/2008 – 02/2011",
  location: "Jamshedpur",
  highlights: [
  "Managed INR 1 Crore budget for nanofluid & neural network projects",
  "Implemented Capex projects worth INR 60 Crores",
  "Collaborated with 40+ global vendors for cost optimization"]

}];


const Experience = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        
        <div className="line-accent mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16">
          Professional <span className="text-gradient-gold">Experience</span>
        </h2>
      </motion.div>

      <div className="relative max-w-4xl">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8 md:pl-14">
            
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-4 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {exp.role}
                </h3>
                <span className="text-primary font-display text-sm font-medium">
                  {exp.company}
                </span>
              </div>
              <p className="text-muted-foreground text-xs tracking-wide uppercase mb-4">
                {exp.period} · {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) =>
              <li
                key={j}
                className="text-secondary-foreground text-sm leading-relaxed flex items-center gap-3">
                
                    <span className="text-primary mt-1.5 shrink-0 rounded-lg text-center">▸</span>
                    {h}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default Experience;