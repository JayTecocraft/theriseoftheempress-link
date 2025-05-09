import Image from "next/image";
import ellle_taylor from "../images/photos/ellle_taylor_img.jpeg";
import { FaInstagram, FaFacebook, FaReadme } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LinkCard from "@/components/LinkCard";
import { FaLink } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";
import { RiExchange2Line } from "react-icons/ri";
import { GrAssistListening } from "react-icons/gr";
import { FreeTrialBanner } from "@/components/FreeTrial";
export default function Home() {
  const contactLinks = [
    {
      title: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/ellletaylor/",
      description: "Follow me on Instagram for updates and insights.",
    },
    {
      title: "Email",
      icon: MdEmail,
      link: "mailto:info@bethechangecoaching.world",
      description: "Connect with me on LinkedIn for professional networking.",
    },
    {
      title: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/people/Be-the-Change-Coaching/61552008187303/",
      description: "Follow me on Twitter for the latest news and updates.",
    },
    {
      title: "Soultribereunion",
      icon: FaLink,
      link: "https://soultribereunion.com/",
      description: "Check out my GitHub for projects and collaborations.",
    },
    {
      title: "JOIN THE COMMUNITY: RETURN TO THE SACRED CORE",
      icon: MdAdsClick,
      link: "https://www.withme.so/theriseoftheempress",
      description:
        "👑Weekly Live Calls|Like-minded Friends|Chat|Networking|Meet-ups|Collaboration|Content Library",
    },
    {
      title: "SEND ME A GIFT 💝",
      icon: RiExchange2Line,
      link: "https://revolut.me/eleano69wl",
      description:
        "Has my content touched or helped you? Please help me to be a present Mother and knowledge sharer 📚",
    },
    {
      title: "MY EXCLUSIVE INTERVIEW BRAINZ MAGAZINE",
      icon: FaReadme,
      link: "https://www.brainzmagazine.com/post/from-prison-to-purpose-a-story-of-becoming-exclusive-interview-with-elle-taylor",
      description: "MY STORY - 'FROM PRISON TO PURPOSE'",
    },
    {
      title: "THE LOKYĀ CLUB PODCAST (Apple)",
      icon: GrAssistListening,
      link: "https://podcasts.apple.com/gb/podcast/the-loky%C4%81-club-podcast/id1756317311",
      description: "",
    },
    {
      title: "THE LOKYĀ CLUB PODCAST (Spotify)",
      icon: GrAssistListening,
      link: "https://open.spotify.com/show/3D5JxT9Ql8u767zzxdDxie?si=0A2I52fYSt-R5rxU4EKHpA&nd=1&dlsi=e097731bb9ee4a3c",
      description:
        "Everything you need to know for your personal evolution and uprising!",
    },
    {
      title: "FREE MINI POADCAST",
      icon: GrAssistListening,
      link: "https://open.spotify.com/show/40blLnmG5cRvlj8MlsCnCv",
      description: "",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="relative flex flex-col h-full w-full max-w-2xl mx-auto items-center justify-start px-4 pt-8 pb-16 mb-5">
        <div className="p-1 bg-[#81FFD3] rounded-full shadow-card">
          <Image
            src={ellle_taylor.src}
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-center mt-4">Elle Taylor</h1>
        <h2 className="text-xl font-semibold text-center mt-2">
          👑 OUR EVOLUTION IS THE REVOLUTION!⚡️
        </h2>
        <div className="mt-4 gap-4 w-full">
          {contactLinks.map((item, index) => (
            <LinkCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>
      </main>
      <FreeTrialBanner/>
    </div>
  );
}
