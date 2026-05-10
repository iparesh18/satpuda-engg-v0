"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Settings, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Star, 
  Award, 
  GraduationCap, 
  Heart,
  ChevronRight
} from "lucide-react";

import SplitText from "../../bits/split-text.jsx";
import BlurText from "../../bits/blur-text.jsx";
import ShinyText from "../../bits/shiny-text.jsx";
import SpotlightCard from "../../bits/spotlight-card.jsx";

const features = [
  {
    icon: Settings,
    title: "Modern Infrastructure",
    description: "State-of-the-art computers and latest software for hands-on learning.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Industry Relevant",
    description: "Bridging the gap between academics and industry standards.",
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    icon: Users,
    title: "Skilled Professionals",
    description: "Highly qualified faculty and alumni working across sectors.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: BookOpen,
    title: "Holistic Learning",
    description: "Workshops, seminars and activities for overall development.",
    color: "bg-orange-500/10 text-orange-500"
  }
];

const listItems = [
  {
    icon: Monitor,
    content: "Computers have become an inherent part of our routine life. No department or business can be thought of being fully functional and automated without the use of computers. Proper use of computerized facilities results in cost cutting, proper resource utilization that includes machinery and manpower, increased efficiency and productivity in terms of quality and timeliness, better statistical analysis for critical decisions related to business growth and numerous other advantages.",
    color: "bg-blue-600"
  },
  {
    icon: Star,
    content: <>With the uncountable advantages, every organization is looking for computer engineering professionals. The professionals with mastered skills are offered very high pay scales and with several other benefits like world tours. With state of the art infrastructure and adequate facilities, <span className="font-bold text-primary">Satpuda College of Engineering & Polytechnic</span> is at the top of the list in Balaghat.</>,
    color: "bg-indigo-600"
  },
  {
    icon: Award,
    content: "The department has one of the best and finest computing facilities in the region. The department has produced quality computer professionals and feels proud of its alumni employed in public, private and educational sectors, bringing fame to their alma mater.",
    color: "bg-violet-600"
  },
  {
    icon: GraduationCap,
    content: "In addition to imparting conventional technical education and a rich learning environment, the emphasis is laid on technical activities such as workshops, debates, guest lecturers and quizzes to prepare students for the highly competitive job environment.",
    color: "bg-blue-700"
  },
  {
    icon: Heart,
    content: "The objective of department is to provide knowledge of modern computing systems as well as sound theoretical background. The department also aims at establishing a strong relationship with the industry so as to bridge the gap between the academic and corporate sector. The department strongly aims at cultivating qualities like leadership, teamwork, self-confidence and good communication skills among its students.",
    color: "bg-blue-800"
  }
];

export function ComputerLabSection() {
  return (
    <main className="bg-background pb-20">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden border-b border-border/70 bg-card/40 pt-32 pb-10 lg:pt-28 lg:pb-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-y-0 right-0 w-full sm:w-4/5 lg:w-[52%] opacity-20">
          <img
            src="/images/overview/campus overview.png"
            alt="Campus backdrop"
            className="h-full w-full object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/96 to-background/88" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-end lg:px-8">
          <div>
            <SplitText
              text="Computer Lab"
              className="text-5xl font-bold text-foreground sm:text-7xl pt-3 tracking-tighter"
              delay={0.08}
            />
            <div className="mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-primary via-primary/70 to-accent" />
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              <BlurText text="State-of-the-art computing facilities designed to foster innovation and technical excellence." />
            </p>
          </div>
          <div className="justify-self-start text-sm font-medium text-muted-foreground lg:justify-self-end">
            <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Our Campus</span>
            <span className="mx-2 text-muted-foreground/60">/</span>
            <span className="text-foreground">Computer Lab</span>
          </div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
                <Monitor className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Computer Lab at</p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
                  Satpuda College of <span className="text-primary">Engineering & Polytechnic</span>
                </h2>
                <div className="mt-2 h-1 w-20 rounded-full bg-primary/30" />
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <SpotlightCard 
                    className="h-full p-6 bg-card/50 border-border/50 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${feature.color} group-hover:bg-primary group-hover:text-white transition-colors duration-300`}
                    >
                      <feature.icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-card shadow-2xl shadow-primary/5">
              <img
                src="/images/overview/student in lab.png"
                alt="Students in Computer Lab"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 shadow-xl border border-border backdrop-blur-md hidden sm:block"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Settings className="h-6 w-6 animate-spin-slow" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">25+</p>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Modern Labs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom List Section */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[3rem] border border-border/50 bg-card/30 p-4 sm:p-8 lg:p-12 backdrop-blur-sm">
          <div className="space-y-6">
            {listItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: "rgba(var(--secondary), 0.5)" }}
                className="group flex gap-6 p-6 rounded-2xl hover:bg-secondary/50 transition-all duration-300 border border-transparent hover:border-border/50 cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color} text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-5 w-5" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item.content}
                  </p>
                  {index < listItems.length - 1 && (
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-border/50 via-border/20 to-transparent" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
