import { motion } from 'motion/react';
import { X } from 'lucide-react';
import noleQuestImg from '../../imports/NoleQuest.png';
import portfolioImg from '../../imports/Portfolio.png';
import caseStudyImg from '../../imports/CaseStudy.png';
import mauiImg from '../../imports/MauiMedicalPractice.png';
import gitSiteImg from '../../imports/GitSite.png';

interface WorkOverlayProps {
  onClose: () => void;
}

const projects = [
  {
    title: 'NoleQuest, AI Internship Marketplace',
    tag: 'AI · PRODUCT STRATEGY · AWS',
    description: 'Defined product strategy and led development of a serverless AI marketplace using Amazon Bedrock (Claude Sonnet), Textract, Lambda, and DynamoDB. Authored a full PR/FAQ using Amazon\'s Working Backwards methodology before a single screen was designed. Targeting a 15% application-to-interview conversion rate, 6x the industry average of 2 to 3%.',
    subDetail: 'AWS Design Sprint · Feb 2026 · View repo for prototype access',
    image: noleQuestImg,
    overlay: 'rgba(0, 0, 0, 0.35)',
    link: 'https://github.com/pedrode1ana/AWS-NoleQuest',
    featured: true
  },
  {
    title: 'Personal Portfolio, pedrodelana.com',
    tag: 'AI-ASSISTED · PRODUCT DESIGN',
    description: 'Designed and built through intentional AI collaboration, directing every design token, interaction, and content decision through structured prompting and creative direction. Spec\'d in natural language, prototyped in Figma, built in VS Code with Claude Code. This site is a demonstration of how I work: using AI as a creative partner, not a shortcut.',
    subDetail: null,
    image: portfolioImg,
    overlay: 'rgba(0, 0, 0, 0.35)',
    link: 'scroll-to-top',
    featured: false
  },
  {
    title: 'Small Business Growth Platform',
    tag: 'PRODUCT DESIGN · AGILE',
    description: 'Translated user research and stakeholder analysis into a prioritized MVP roadmap with measurable adoption metrics. Defined feature scope, user stories, and technical documentation across iterative agile sprint cycles. FSU Innovation by Design, Aug to Dec 2025.',
    subDetail: null,
    image: caseStudyImg,
    overlay: 'rgba(26, 46, 26, 0.5)',
    link: 'https://github.com/pedrode1ana/small-business-product-design-case-study',
    featured: false
  },
  {
    title: 'Medical Practice Management System',
    tag: 'FULL STACK · C#',
    description: 'Developed a cross-platform healthcare application in C# / .NET MAUI, translating real clinical workflows into scalable product features. Modular CRUD architecture designed for maintainability and iterative expansion. FSU Full Stack Development, Aug to Dec 2025.',
    subDetail: null,
    image: mauiImg,
    overlay: 'rgba(26, 46, 26, 0.5)',
    link: 'https://github.com/pedrode1ana/MedicalPractice',
    featured: false
  },
  {
    title: 'Breaking into Tech, where it started',
    tag: 'HTML · CSS · JAVASCRIPT · ORIGIN',
    description: 'My first self-built website. Raw HTML, CSS, and JavaScript, no frameworks, no tutorials, just figuring it out. Built as an online journal navigating who I wanted to become in tech. The gap between this and everything above it is the story.',
    subDetail: null,
    image: gitSiteImg,
    overlay: 'rgba(26, 46, 26, 0.5)',
    link: 'https://pedrode1ana.github.io',
    featured: false
  }
];

export default function WorkOverlay({ onClose }: WorkOverlayProps) {
  const handleCardClick = (link: string) => {
    if (link === 'scroll-to-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onClose();
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed inset-0 z-40 overflow-y-auto"
      style={{
        background: 'rgba(10, 26, 11, 0.96)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <button
        onClick={onClose}
        className="fixed top-8 right-8 text-4xl transition-colors z-50"
        style={{
          color: 'rgba(255, 255, 255, 0.4)',
          fontFamily: 'var(--font-sans)'
        }}
      >
        <X size={32} className="hover:text-[#4CAF50]" />
      </button>

      <div className="px-4 md:px-12 pt-20 pb-12 md:py-24 max-w-7xl mx-auto">
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 500,
          color: 'var(--green-pitch)',
          letterSpacing: '2px',
          marginBottom: '16px'
        }}>
          SELECTED WORK
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '48px',
          color: 'white',
          marginBottom: '16px'
        }}>
          What I've <span style={{ fontStyle: 'italic', color: 'var(--green-pitch)' }}>built.</span>
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          fontWeight: 300,
          color: 'rgba(255, 255, 255, 0.55)',
          maxWidth: '600px',
          marginBottom: '48px'
        }}>
          Products that started as problems worth solving. Each one defined, designed, and shipped with intention.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(project.link)}
              className={`${project.featured ? 'md:col-span-2' : ''} rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer`}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(76, 175, 80, 0.15)'
              }}
              whileHover={{
                boxShadow: '0 20px 60px rgba(76, 175, 80, 0.15)'
              }}
            >
              <div
                className={`${project.featured ? 'h-[260px]' : 'h-[200px]'} relative overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: project.overlay }}
                />
              </div>

              <div className="p-6">
                <div className="inline-block px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: 'rgba(76, 175, 80, 0.15)',
                    color: '#81C784',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '1.5px'
                  }}>
                  {project.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.55)',
                  lineHeight: 1.6,
                  marginBottom: project.subDetail ? '8px' : '0'
                }}>
                  {project.description}
                </p>

                {project.subDetail && (
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.4)',
                    lineHeight: 1.5
                  }}>
                    {project.subDetail}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
