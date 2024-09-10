import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { WifiIcon, BriefcaseIcon, UsersIcon, PencilIcon } from 'lucide-react';
import { Youtube, Linkedin, Twitter, Instagram } from 'lucide-react';
import placeholder from '../assets/placeholder.png'

const buttonStyles = "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-2 rounded-full"
const gradientTextClasses = `bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text`;

function TestimonialCard() {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gradient-to-bl from-teal-800/80 to-teal-900/30 rounded-xl p-6 shadow-lg">
        <div className="flex items-center mb-4">
          <Image
            src={placeholder}
            alt="Profile picture"
            width={60}
            height={60}
            className="rounded-full border-2 border-blue-400"
          />
          <div className="ml-4 w-full">
            <h2 className="text-xl font-bold text-white">Sandeep Tiwari</h2>
            <Divider styles="bg-gradient-to-r from-transparent via-white/50 to-transparent my-1" />
            <p className="text-cyan-500">Full Stack Developer</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm">
          Hello Guys, I Am Sandeep Tiwari And I Must Say That Enrolling In The TechNest Full Stack Development Course Was The Best Decision I Took Throughout My Life. It Worked As A Game-Changer For Me. The Course Content Was Too Comprehensive Easily Digestible The Minds Of The Candidates And Was Up-To-Date. Tk Development.
          Hello Guys, I Am Sandeep Ti
        </p>
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black text-white py-4 px-10">
      <div className="flex items-center">
        <Image
          src={placeholder}
          alt="Technest Learning Logo"
          width={50}
          height={50}
        />
      </div>
      <Link href="/register">
        <Button className={buttonStyles}>
          REGISTER NOW <span className="ml-1">→</span>
        </Button>
      </Link>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-900/70 to-indigo-900/50 bg-black/30 bg-blend-overlay text-white py-12 px-8 border-t-[1px] border-gray-400">
      <div className="container mx-auto max-w-6xl">
        <div className="flex gap-8 mb-8 justify-between px-5">
          <div className="">
            <Image src={placeholder} alt="Technest Learning" width={50} height={50} className="mb-8" />
            <p className="text-sm mb-4 max-w-sm">Educational Experiences That Transform Lives In A Community-Led Learning Environment</p>
            <p className="text-sm mb-4 max-w-sm">Be The First In Line To Know About Our Latest Courses</p>
            <Button variant="outline" className="text-white rounded-full border-white hover:bg-white/20">
              REGISTER NOW
            </Button>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-4">Courses</h3>
            <ul className="space-y-2 opacity-70">
              <li>DATA SCIENCE</li>
              <li>CYBER SECURITY</li>
              <li>BUSINESS ANALYTICS</li>
              <li>FULL STACK DEVELOPMENT</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-4">Let's Get Connects</h3>
            <ul className="space-y-2 opacity-70">
              <li><Linkedin className="inline-block mr-2 w-5 h-5" /> LINKEDIN</li>
              <li><Twitter className="inline-block mr-2 w-5 h-5" /> TWITTER</li>
              <li><Youtube className="inline-block mr-2 w-5 h-5" /> YOUTUBE</li>
              <li><Instagram className="inline-block mr-2 w-5 h-5" /> INSTAGRAM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 px-5 flex justify-between items-center text-sm">
          <p>COPYRIGHT © 2023 TECHNEST. ALL RIGHTS RESERVED.</p>
          <p>DESIGN AND DEVELOPED BY <a href="#" className="text-blue-400">OPEN GIG</a></p>
        </div>
      </div>
    </footer>
  );
}

const Divider = ({ styles }: { styles?: string }) => {
  return (
    <div className="w-full bg-transparent flex justify-center items-center">
      <span className={styles + " w-[80%] h-[1px] backdrop-blur-md"}></span>
    </div>
  );
};

function HeroSection() {
  return (
    <div className="relative bg-black text-white overflow-hidden py-8">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <Image
          src={placeholder}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <div className="relative z-10 py-16 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            EMPOWER YOUR
            <br />
            <span className={gradientTextClasses}>
              IT JOURNEY
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Elevate your career with Technest's IT courses, regardless of your background.
          </p>

          <div className="mb-12">
            <p className={gradientTextClasses + ' mb-4'}>TRUSTED BY</p>
            <div className="flex justify-center items-center space-x-12">
              <div>
                <p className="text-4xl font-bold">1000+</p>
                <p className="text-sm">LEARNER</p>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div>
                <p className="text-4xl font-bold">04</p>
                <p className="text-sm">EXPERTS</p>
              </div>
            </div>
          </div>
        </div>
        {/* Background text */}
        <div className="overflow-hidden text-gray-400 text-[4vw] font-bold leading-none px-12 relative z-10">
          <div className="flex flex-col animate-marquee gap-4">
            <p className="whitespace-nowrap text-left">GROW YOUR NETWORK</p>
            <p className="whitespace-nowrap text-right">HANDS ON LEARNING</p>
            <p className="whitespace-nowrap text-left">LIVE SESSION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface GradientTypographyProps {
  topLine: string;
  bottomLine: string;
}

const GradientTypography: React.FC<GradientTypographyProps> = ({
  topLine,
  bottomLine,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-5xl font-bold">
        <span className={gradientTextClasses}>
          {topLine}
        </span>
      </h2>
      <h3 className="text-3xl md:text-5xl font-bold mt-2">
        <span className={gradientTextClasses}>
          {bottomLine}
        </span>
      </h3>
    </div>
  );
};

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: any;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-transparent text-white p-6 max-w-sm">
      <div className="mb-4">
        <Image
          src={placeholder}
          alt={title}
          className="rounded-lg object-cover w-full h-40"
        />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-sm mb-6">{description}</p>
        <div className="flex space-x-4">
          <Button variant="outline" className="bg-transparent rounded-full text-white border-white hover:bg-white hover:text-black">
            LEARN MORE
          </Button>
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
            INQUIRY
          </Button>
        </div>
      </div>
    </div>
  );
};

const IndustryPrograms = () => {
  const industryPrograms = [
    {
      title: "Data Science",
      description: "Analyze complex datasets to extract valuable insights for business decision-making.",
      imageUrl: placeholder,
    },
    {
      title: "Machine Learning",
      description: "Develop algorithms that enable computers to learn and improve from experience without explicit programming.",
      imageUrl: placeholder,
    },
    {
      title: "Big Data Analytics",
      description: "Process and analyze large volumes of structured and unstructured data to uncover hidden patterns and trends.",
      imageUrl: placeholder,
    },
    {
      title: "Artificial Intelligence",
      description: "Create intelligent systems that can perform tasks requiring human-like intelligence and decision-making capabilities.",
      imageUrl: placeholder,
    },
    {
      title: "Cyber Security",
      description: "Protect computer systems, kjjgkj, networks, and data from digital attacks and unauthorized access.",
      imageUrl: placeholder,
    },
    {
      title: "Cloud Computing",
      description: "Deliver computing services over the internet, including servers, storage, databases, networking, and software.",
      imageUrl: placeholder,
    }
  ]
  return (
    <div className="bg-black flex flex-col items-center justify-center my-5 py-5">
      <GradientTypography topLine="Industry-relevant programs" bottomLine="to set you apart" />
      <div className="grid grid-cols-3 gap-4 my-4">
        {industryPrograms.map((program, index) => (
          <IndustryCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-4 px-4">
      <GradientTypography
        topLine="Don't listen to us,"
        bottomLine='listen to them!'
      />
      <div className='grid grid-cols-3 gap-4 p-4 m-4'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex items-start space-x-4 mb-8">
    <div className="flex-shrink-0">
      <Icon className="w-6 h-6 text-cyan-400" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-950 to-teal-950 bg-black/30 py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                PRESENTING THE
              </span>
              <br />
              <span className="text-white">TECHNEST WAY</span>
            </h2>
          </div>
          <div>
            <FeatureItem
              icon={WifiIcon}
              title="ENGAGE IN LIVE PROJECTS AND INTERNSHIPS"
              description="Participate In 1 To 2 Month Live Projects Or Internships To Gain Practical Experience, Apply Your Knowledge In Real-World Scenarios And Collaborate With Organizations Like HCL, TCS, HDFC, ICICI, Reliance, And Others."
            />
            <FeatureItem
              icon={BriefcaseIcon}
              title="SECURE JOB INTERVIEWS"
              description="Leverage Our Network Of More Than 30 Hiring Partners To Ensure Promising Employment Opportunities Upon Course Completion."
            />
            <FeatureItem
              icon={UsersIcon}
              title="DEDICATED SESSIONS TO SOLVE YOUR QUERIES-(PEER TO PEER)"
              description="We Offer Doubt-Solving Sessions With Mentors To Help You Stay On Track With The Course."
            />
            <FeatureItem
              icon={PencilIcon}
              title="HANDS-ON PROJECTS TO APPLY YOUR LEARNINGS-"
              description="Our Programs Prioritize Hands-On Learning With Projects At The End Of Each Module To Reinforce Each Topic."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface GradientBannerProps {
  title: string;
  description: string;
  imageSrc: any;
  styles?: string;
}

const GradientBanner: React.FC<GradientBannerProps> = ({
  title,
  description,
  imageSrc,
  styles
}) => {
  return (
    <div className={styles + ` rounded-xl p-8 w-[90%] flex items-center justify-between`}>
      <div className="flex items-center space-x-4 gap-4">
        <div className=" rounded-md p-2">
          <Image src={imageSrc} alt="Icon" width={40} height={40} />
        </div>
        <div>
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <p className="text-white text-sm mt-1 max-w-[90%]">{description}</p>
        </div>
      </div>
      <Button className={buttonStyles + ' ml-5'}>
        GET IN TOUCH <span className="ml-1">→</span>
      </Button>
    </div>
  );
};

const HiringCTA = () => {
  return (
    <div className="bg-gradient-to-l from-teal-900/35 to-teal-800/10 flex flex-col items-center justify-center py-16 px-4">
      <GradientBanner
        title="Hire Talent That Stands Out"
        description="We provide a pool of talented candidates with the right skills and experience to meet your specific needs."
        imageSrc={placeholder}
        styles='bg-gradient-to-r from-teal-900/80 via-indigo-900/30 to-indigo-900/50'
      />
    </div>
  );
}

const JoinCTA = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-8 my-8 px-4">
      <GradientBanner
        title="Eager To Empower Others?"
        description="We provide a pool of talented candidates with the right skills and experience to meet your specific needs."
        imageSrc={placeholder}
        styles='bg-gradient-to-r from-gray-900 to-black border-[1px] border-cyan-500'
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen no-scrollbar bg-black" >
      <Navbar />
      <Divider styles='bg-gradient-to-r from-transparent via-cyan-600/70 to-transparent' />
      <HeroSection />
      <IndustryPrograms />
      <JoinCTA />
      <TestimonialSection />
      <FeaturesSection />
      <HiringCTA />
      <Footer />
    </div>
  );
}
