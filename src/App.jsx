import React, { useState, useEffect, useRef } from 'react';
import { 
  Home,
  Smartphone, 
  Video, 
  Thermometer, 
  Lock, 
  Wrench, 
  MapPin, 
  UserPlus,
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Globe,
  Loader2,
  Check, 
  Mail,
  X,
  MessageSquare,
  Send,
  Minimize2,
  Clock,
  Phone,
  Monitor,
  Eye,
  Settings,
  Shield,
  Activity,
  Search,
  Menu,
  ChevronDown,
  Plane,
  Star,
  Award,
  Palmtree,
  Ticket,
  Cpu,
  ChevronLeft,
  Info,
  User
} from 'lucide-react';

// --- Configuration ---
const CONTACT_EMAIL = "rahj@techrahj.com";
const PHONE_NUMBER = "317-300-4750"; 
const PRIMARY_AREA = "Serving Indiana & Nationwide";

// --- Marketing Imagery (High-Res Lifestyle Assets) ---
const IMG_CAMERAS_SUITE = "https://images.travelprox.com/techrahj/camerasuite.png";
const IMG_DOORBELL_DETAIL = "https://images.travelprox.com/techrahj/doorbellframe.png";
const IMG_PRO_INSTALL = "https://images.travelprox.com/techrahj/installwoman.png";
const IMG_HUB_SOLO = "https://images.travelprox.com/techrahj/smarthub.png";

// --- Product Data ---
const PRODUCTS = [
  { 
    name: "Outdoor Camera Pro", 
    desc: "AI-Driven Proactive Defense", 
    img: "https://images.travelprox.com/techrahj/odc.png",
    longDesc: "The Outdoor Camera Pro proactively prevents crime using advanced computer vision AI to identify threats. Its Smart Deter technology triggers a 140dB siren and LED ring to ward off intruders before they can strike.",
    features: ["4K HDR Sensor", "AI Person Detection", "140dB Warning Siren", "Two-Way Talk"]
  },
  { 
    name: "Doorbell Camera Pro", 
    desc: "Smart Package Protection", 
    img: "https://images.travelprox.com/techrahj/dbc.png",
    longDesc: "Protects your front porch with a 180° x 180° field of view—the widest in the industry. Its AI deterrent identifies package thieves and uses light and sound to ward them off.",
    features: ["180° x 180° Ultra-Wide View", "Package Detection AI", "Smart Deter Technology", "Night Vision"]
  },
  { 
    name: "Smart Lock", 
    desc: "Keyless Home Security", 
    img: "https://images.travelprox.com/techrahj/doorlock.png",
    longDesc: "Control access to your home from anywhere. Create unique codes for family and receive instant alerts whenever the door is accessed, ensuring you never have to hide a key again.",
    features: ["Remote Lock/Unlock", "Unique Guest Access Codes", "Tamper-Proof Design", "Automatic Arming"]
  },
  { 
    name: "Smart Hub", 
    desc: "Smart Home Command Center", 
    img: "https://images.travelprox.com/techrahj/smarthubwhite.png",
    longDesc: "The brain of your home. A 7-inch touchscreen that connects all your devices into one ecosystem with a dedicated cellular connection for 24/7 reliability even without Wi-Fi.",
    features: ["7-inch Touchscreen", "Cellular Connection", "One-Touch Dispatch", "Two-Way Voice"]
  },
  { 
    name: "Indoor Camera Pro", 
    desc: "Advanced Interior Vision", 
    img: "https://images.travelprox.com/techrahj/indoorcam.png",
    longDesc: "Monitor your home's interior with 1080p HD. Features a unique 'One-Touch Call Out' button that allows family members to contact your mobile app with a single tap.",
    features: ["One-Touch Call to App", "AI Person Detection", "Privacy Mode Control", "HD Night Vision"]
  },
  { 
    name: "Smart Sensor", 
    desc: "Invisible Entry Protection", 
    img: "https://images.travelprox.com/techrahj/dws.png",
    longDesc: "Ultra-slim sensors that blend into your home's architecture while detecting unauthorized entry at doors or windows. Encrypted to prevent signal interference.",
    features: ["Encrypted Signal", "Slim Profile Design", "5-Year Battery Life", "Tamper-Switch Protection"]
  },
  { 
    name: "Garage Control", 
    desc: "Remote Access and Alerts", 
    img: "https://images.travelprox.com/techrahj/garagecontrol.png",
    longDesc: "Never worry about a forgotten garage door. Open or close your door remotely and set your system to automatically close it when you arm the home at night.",
    features: ["Remote App Control", "Left-Open Alerts", "State Integration", "Secure Connection"]
  },
  { 
    name: "Smart Thermostat", 
    desc: "Energy Efficient Climate", 
    img: "https://images.travelprox.com/techrahj/thermostat.png",
    longDesc: "Learns your preferences and understands when you're home or away to optimize energy savings. Integrates with safety sensors to shut down HVAC during fire emergencies.",
    features: ["In-App Temp Control", "Auto Energy Savings", "Safety Shut-off", "Voice Control Ready"]
  },
  { 
    name: "Smoke & CO Detector", 
    desc: "24/7 Professional Safety", 
    img: "https://images.travelprox.com/techrahj/smokeco.png",
    longDesc: "Professionally monitored safety that does more. In a fire, it alerts the hub, shuts down airflow to prevent smoke spread, and unlocks doors for your escape.",
    features: ["24/7 Pro Monitoring", "HVAC Emergency Stop", "Interconnected Alarms", "Electrochemical Sensing"]
  },
  { 
    name: "Water Sensor", 
    desc: "Flood Protection", 
    img: "https://images.travelprox.com/techrahj/watersensor.png",
    longDesc: "Detects leaks near appliances or basements immediately. Alerts your Smart Hub and phone, allowing you to act before a minor leak becomes major damage.",
    features: ["Instant Detection", "Freeze Alerts", "Encrypted Signal", "10-Year Battery"]
  }
];

// --- Inquiry Modal Component ---
const InquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 overflow-y-auto py-10">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors z-[210] bg-white/80 p-2 rounded-full shadow-sm">
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-4 md:p-8 pt-12 md:pt-16">
            <div className="mb-6 text-[11px] leading-relaxed text-slate-500 bg-blue-50/50 p-4 rounded-xl border border-blue-100 italic font-sans">
                <Info className="w-4 h-4 text-blue-500 mb-2 shrink-0" />
                <strong>Notice:</strong> This site is an independent platform for smart home design and consultation. 
             </div>
             <iframe 
               id="JotFormIFrame-019c9390367b78dd8b000792e4ee30e01bf4" 
               title="Avery: Smart Home Advisor"
               allowtransparency="true"
               allow="geolocation; microphone; camera; fullscreen"
               src="https://agent.jotform.com/019c9390367b78dd8b000792e4ee30e01bf4?embedMode=iframe&background=1&shadow=1"
               frameBorder="0" 
               style={{ maxWidth: '100%', height: '688px', border: 'none', width: '100%' }} 
               scrolling="no"
             />
        </div>
      </div>
    </div>
  );
};

// --- Product Focus Modal ---
const ProductFocusModal = ({ product, onClose, openInquiry }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-500" onClick={onClose} />
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        <button onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-400 hover:text-slate-900 z-[260] bg-slate-100 p-2 rounded-full shadow-sm">
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-auto bg-slate-50 flex items-center justify-center p-8 md:p-12 shrink-0">
          <img src={product.img} alt={product.name} className="w-full h-full object-contain drop-shadow-xl" />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-20 overflow-y-auto flex flex-col justify-center bg-white">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 md:mb-6">Component Specs</h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase text-slate-900 mb-4 md:mb-8 leading-none tracking-tighter">{product.name}</h3>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-10">{product.longDesc}</p>
          <div className="space-y-3 mb-8 md:mb-12">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-center space-x-3 text-slate-600">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#FF5900] shrink-0" />
                <span className="font-bold text-xs md:text-sm uppercase tracking-tight">{f}</span>
              </div>
            ))}
          </div>
          <button onClick={() => { onClose(); openInquiry(); }} className="w-full py-4 md:py-5 bg-[#FF5900] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-[#FF5900]/20 hover:scale-[1.02] transition-transform">Add to My Design</button>
        </div>
      </div>
    </div>
  );
};

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);
  return <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>{children}</div>;
};

const ProductCarousel = ({ title, subtitle, onSelectProduct }) => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">{title}</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase text-slate-900 leading-none tracking-tighter">{subtitle}</h3>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => scroll('left')} className="p-3 rounded-full bg-slate-100 hover:bg-[#FF5900] hover:text-white transition-all"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full bg-slate-100 hover:bg-[#FF5900] hover:text-white transition-all"><ChevronRight className="w-6 h-6" /></button>
        </div>
      </div>
      <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 md:px-0 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {PRODUCTS.map((product, i) => (
          <div key={i} onClick={() => onSelectProduct(product)} className="min-w-[280px] md:min-w-[320px] bg-white rounded-[32px] p-8 snap-start hover:shadow-xl transition-all border border-slate-200 group cursor-pointer flex flex-col items-center">
            <div className="w-full aspect-square mb-6 flex items-center justify-center">
              <img src={product.img} alt={product.name} className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="text-center">
              <h4 className="text-[10px] font-black uppercase text-[#FF5900] mb-2">{product.name}</h4>
              <p className="text-slate-900 text-xs font-bold leading-tight uppercase tracking-widest">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PageHeader = ({ title, subtitle, icon: Icon }) => (
  <section className="bg-black pt-40 pb-20 px-6 text-center text-white border-b border-white/5 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#FF5900]/10 to-transparent pointer-events-none" />
    <ScrollReveal>
      {Icon && <Icon className="w-12 h-12 text-[#FF5900] mx-auto mb-6" />}
      <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4 leading-none">{title}</h1>
      <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-tight">{subtitle}</p>
    </ScrollReveal>
  </section>
);

const App = () => {
  const [view, setView] = useState('home'); 
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scriptId = 'jotform-handler-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.jotfor.ms/s/umd/a06976b442d/for-form-embed-handler.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => { if (window.jotformEmbedHandler) { try { window.jotformEmbedHandler("iframe[id='JotFormIFrame-019c9390367b78dd8b000792e4ee30e01bf4']", "https://www.jotform.com"); } catch (e) {} } };
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  const openModal = () => { setModalOpen(true); setIsMobileMenuOpen(false); };

  const NavLinks = [
    { name: 'Packages', view: 'packages' },
    { name: 'Hardware', view: 'products' },
    { name: 'Lead Tech', view: 'services' },
    { name: 'About Rahj', view: 'about' }
  ];

  const Header = () => (
    <header className="fixed top-0 left-0 w-full z-[100] bg-black text-white px-4 md:px-8 py-4 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setView('home')}>
            <Home className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
            <span className="text-xl font-black uppercase text-white tracking-tighter">TechRahj</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <button key={link.name} onClick={() => setView(link.view)} className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${view === link.view ? 'text-[#FF5900]' : 'text-slate-400 hover:text-white'}`}>{link.name}</button>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <a href={`tel:${PHONE_NUMBER}`} className="hidden sm:flex items-center space-x-2 bg-[#00D2B4] hover:bg-[#00bda2] text-black px-6 py-2.5 rounded-full font-black text-sm transition-all shadow-lg"><span>{PHONE_NUMBER}</span></a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white"><Menu className="w-7 h-7" /></button>
        </div>
      </div>
      <div className={`fixed inset-0 top-[72px] bg-black transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-8 space-y-8">
          {NavLinks.map((link) => (
            <button key={link.name} onClick={() => { setView(link.view); setIsMobileMenuOpen(false); }} className={`text-3xl font-bold uppercase text-left ${view === link.view ? 'text-[#FF5900]' : 'text-white'}`}>{link.name}</button>
          ))}
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center space-x-3 w-full py-6 bg-[#00D2B4] text-black rounded-2xl font-black mt-4"><span>{PHONE_NUMBER}</span></a>
          <button onClick={() => openModal()} className="w-full py-6 bg-[#FF5900] text-white rounded-2xl font-black uppercase">Start Design</button>
        </div>
      </div>
    </header>
  );

  const HomeView = () => (
    <>
      <section className="bg-black text-white pt-24 md:pt-40 overflow-hidden flex flex-col">
        <div className="relative z-20 text-center max-w-5xl mx-auto px-6 mb-12 md:mb-20 flex flex-col items-center">
          <ScrollReveal>
            <h1 className="text-[2.75rem] md:text-[5.5rem] leading-[1.05] font-black tracking-tighter mb-8 uppercase text-white">The smartest <br/> security on <br/> <span className="text-white">The block.</span></h1>
            <p className="text-xl md:text-[1.5rem] text-white/90 mb-10 max-w-2xl mx-auto font-medium leading-tight">TechRahj gives you the best smart home security systems on the market customized for your home, your life, and your peace of mind.</p>
            <button onClick={() => openModal()} className="px-14 py-6 bg-[#FF5900] text-white rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">Start My Design</button>
          </ScrollReveal>
        </div>
        <div className="relative w-full aspect-video sm:h-[400px] md:h-[600px] lg:h-[700px] bg-slate-900 border-t border-white/5">
             <iframe src="https://player.mediadelivery.net/embed/587199/983efdb6-420d-4fbe-9b71-15f287edaa62?autoplay=true&loop=true&muted=true&controls=false&responsive=true" className="w-full h-full object-cover border-none" allow="autoplay;loop;" title="Hero" />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F5F5F7] to-transparent z-[2]" />
        </div>
      </section>

      {/* Proactivity Section */}
      <section className="py-32 px-6 bg-[#F5F5F7]">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[10px] font-black uppercase text-slate-400 mb-6 block tracking-[0.4em]">One Ecosystem</span>
              <h2 className="text-[3rem] md:text-6xl font-black uppercase text-slate-900 leading-none mb-8 tracking-tighter">The Power of <br/>Proactivity.</h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-10 max-w-xl">AI-driven cameras identify true threats and proactively deter intruders before they strike.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-8 bg-white rounded-[32px] border border-slate-200 shadow-sm">
                  <Cpu className="w-6 h-6 text-[#FF5900] mb-4" />
                  <p className="font-bold text-slate-900 uppercase text-xs mb-2 tracking-widest">AI Vision</p>
                  <p className="text-slate-500 text-sm">Intelligent threat detection.</p>
                </div>
                <div className="p-8 bg-white rounded-[32px] border border-slate-200 shadow-sm">
                  <Shield className="w-6 h-6 text-[#FF5900] mb-4" />
                  <p className="font-bold text-slate-900 uppercase text-xs mb-2 tracking-widest">Smart Deter</p>
                  <p className="text-slate-500 text-sm">140dB Active sirens.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={IMG_CAMERAS_SUITE} alt="Camera Suite" className="w-full drop-shadow-2xl rounded-[48px]" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Carousel */}
      <ProductCarousel title="The Equipment" subtitle="Professionally installed." onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* Unified Control Section (Refined) */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[10px] font-black uppercase text-slate-400 mb-6 block tracking-[0.4em]">Central Intelligence</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase text-slate-900 leading-none tracking-tighter mb-8">Unified <br/>Control.</h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-10 max-w-xl">
                The smart hub acts as the brain of your proactive infrastructure. A high-resolution touchscreen that anchors every sensor into one seamless, encrypted network.
              </p>
              <ul className="space-y-4">
                {["Encrypted Cellular Link", "One-Touch Dispatch", "Two-Way Voice"].map((f) => (
                   <li key={f} className="flex items-center space-x-3 text-slate-800 font-black uppercase text-xs tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-[#FF5900]" />
                      <span>{f}</span>
                   </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group w-full aspect-square bg-slate-50 rounded-[64px] border border-slate-100 overflow-hidden">
                <img src={IMG_HUB_SOLO} alt="Smart Hub Solo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Installation & Detail Section */}
      <section className="py-32 px-6 bg-slate-900 text-white overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-[48px] overflow-hidden shadow-2xl border border-white/5">
                <img src={IMG_PRO_INSTALL} alt="Install Process" className="w-full h-auto" />
              </div>
              {/* Overlaid Detail Image */}
              <div className="absolute -bottom-10 -right-10 md:-right-20 w-48 md:w-80 rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-900 hidden sm:block">
                 <img src={IMG_DOORBELL_DETAIL} alt="Detail View" className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-12 lg:pt-0">
              <span className="text-[10px] font-black uppercase text-[#FF5900] mb-6 block tracking-[0.4em]">Direct Installation</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-none mb-8 tracking-tighter">Precise <br/>Execution.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
                Rahj personally handles your smart home installation or coordinates a specialized non-local technician for your property. We ensure your perimeter defense is calibrated for maximum performance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#FF5900] font-black uppercase text-[10px] tracking-widest mb-2 leading-none">Local Installs</h4>
                  <p className="text-slate-500 text-xs">Direct professional setup by Rahj.</p>
                </div>
                <div>
                   <h4 className="text-[#FF5900] font-black uppercase text-[10px] tracking-widest mb-2 leading-none">Nationwide</h4>
                  <p className="text-slate-500 text-xs">Sourcing top-tier local experts.</p>
                </div>
              </div>
              <button onClick={() => openModal()} className="mt-12 px-10 py-5 bg-white text-slate-900 rounded-full font-black uppercase text-xs hover:bg-[#FF5900] hover:text-white transition-all">Start Design</button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );

  const PackagesView = () => (
    <>
      <PageHeader title="Smart Packages" subtitle="Industry-leading security tailored to your property." icon={Settings} />
      <section className="py-24 px-6 max-w-7xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-900">{[{ name: "Essentials", features: ["Smart Hub", "Entry Sensors", "Smart Lock", "Professional Design"], color: "bg-slate-50" }, { name: "Video Pro", features: ["DBC Pro", "Outdoor Pro", "AI Deterrence", "Direct Installation"], color: "bg-white border-slate-200 border-2 shadow-xl" }, { name: "Complete Defense", features: ["360 Security", "Thermostat", "Smoke Safety", "Full Technical Support"], color: "bg-slate-900 text-white" }].map((pkg, i) => (<div key={i} className={`p-10 rounded-[40px] flex flex-col justify-between ${pkg.color}`}><div><h4 className="text-2xl font-black uppercase mb-8 leading-none tracking-tighter">{pkg.name}</h4><div className="space-y-4 mb-10">{pkg.features.map(f => (<div key={f} className={`flex items-center space-x-3 text-sm`}>{<Check className="w-4 h-4 text-[#FF5900] shrink-0" />}<span>{f}</span></div>))}</div></div><button onClick={() => openModal()} className="w-full py-5 bg-[#FF5900] text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-transform hover:scale-105">Request Design</button></div>))}</div></section>
    </>
  );

  const ProductsView = () => (
    <>
      <PageHeader title="Hardware" subtitle="Engineering excellence for your home." icon={Cpu} />
      <section className="py-24 px-6 max-w-7xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">{PRODUCTS.map((item, i) => (<div key={i} onClick={() => setSelectedProduct(item)} className="group bg-white border border-slate-200 rounded-[24px] p-8 text-center hover:shadow-xl transition-all cursor-pointer flex flex-col items-center"><div className="w-32 h-32 mb-6 overflow-hidden flex items-center justify-center"><img src={item.img} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" /></div><h4 className="text-[10px] font-bold uppercase text-slate-900 mb-1 leading-tight tracking-widest">{item.name}</h4></div>))}</div></section>
    </>
  );

  const ServicesView = () => (
    <>
      <PageHeader title="Lead Tech" subtitle="Direct installation and professional technical sourcing." icon={Wrench} />
      <section className="py-24 px-6 max-w-5xl mx-auto text-slate-900">
        <div className="rounded-[48px] overflow-hidden mb-12 shadow-2xl border border-slate-200">
          <img src={IMG_PRO_INSTALL} alt="Install" className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-12 rounded-[48px] border border-slate-200 shadow-sm">
            <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Installation Mastery.</h3>
            <p className="text-slate-600 leading-relaxed mb-8 font-light">Rahj personally builds your design or finds the highest-rated technician in your area to execute the project to Lead-Tech benchmarks.</p>
            <div className="space-y-4">
              {["Custom Site Mapping", "Personal Installation", "Professional Sourcing"].map(s => (
                <div key={s} className="flex items-center space-x-3"><Home className="w-5 h-5 text-slate-900" /><span className="text-sm font-black text-slate-700 uppercase tracking-widest">{s}</span></div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-slate-900 rounded-[48px] flex flex-col items-center justify-center p-12 text-center text-white relative overflow-hidden">
            <Wrench className="w-16 h-16 text-[#FF5900] mb-6 animate-pulse" />
            <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter leading-none text-white">Rahj • Lead Tech</h4>
            <p className="text-slate-400 text-sm font-light italic leading-relaxed">"Directly installing your smart home or finding the best pro to do it."</p>
          </div>
        </div>
      </section>
    </>
  );

  const AboutView = () => (
    <>
      <PageHeader title="About Rahj" subtitle="Your Smart Home Installer and Technical Consultant." icon={User} />
      <section className="py-24 px-6 max-w-5xl mx-auto text-slate-900 text-center">
        <div className="bg-white border border-slate-200 p-10 md:p-20 rounded-[48px] shadow-xl text-left">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 leading-tight mb-8 tracking-tighter text-center">Practical <br/> Implementation.</h2>
            
            <div className="space-y-8 text-slate-600 leading-relaxed font-light text-lg">
              <p>
                Rahj is a dedicated technical specialist who believes in hands-on quality. Whether he is personally installing your smart home infrastructure or vetting a top-tier local technician for a nationwide project, his focus remains on seamless technical execution and proactive security. Over the course of his career, he has personally installed over <strong>3,000 Smart Home Security Systems</strong> across <strong>6 states</strong>.
              </p>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em] mb-4">Recognized Vigilance</h3>
                <p className="text-base">
                  In 2014, Rahj's commitment to protection was recognized by local news outlets including <strong>Fox 59, WTHR, and WISH TV</strong>. While at the Kings Kids Cultivating Center daycare in Muncie, Indiana, Rahj physically apprehended an armed criminal who had forced their way into the facility with a knife and threatened the lives of everyone inside. This same instinct to protect the most vulnerable drives every security design he creates today.
                </p>
              </div>

              <p>
                Beyond his professional life, Rahj is a man of God, a devoted husband, and a father. He is currently cheering on his son as he navigates his senior year at <strong>Fishers High School</strong>.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
              {["3,000+ Installs", "6 States Covered", "Technical Sourcing", "Nationwide Support"].map(badge => (
                <span key={badge} className="px-6 py-2 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">{badge}</span>
              ))}
            </div>
            
            <div className="flex justify-center">
              <button onClick={() => openModal()} className="px-12 py-6 bg-slate-900 text-white rounded-full font-black uppercase hover:bg-[#FF5900] transition-all shadow-xl">Connect with Rahj</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderView = () => {
    switch (view) {
      case 'packages': return <PackagesView />;
      case 'products': return <ProductsView />;
      case 'services': return <ServicesView />;
      case 'about': return <AboutView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="bg-[#F5F5F7] text-slate-900 min-h-screen font-sans selection:bg-[#FF5900]/30 overflow-x-hidden antialiased">
      <Header />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ProductFocusModal product={selectedProduct} onClose={() => setSelectedProduct(null)} openInquiry={() => openModal()} />
      <main className="min-h-screen">
        {renderView()}
      </main>
      <footer className="py-24 px-6 bg-white border-t border-slate-200 text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center space-x-6 mb-12">
            <button onClick={() => openModal()} className="p-4 rounded-full bg-slate-100 text-slate-500 hover:text-[#FF5900] transition-colors shadow-sm"><Mail className="w-6 h-6" /></button>
            <a href={`tel:${PHONE_NUMBER}`} className="p-4 rounded-full bg-slate-100 text-slate-500 hover:text-[#FF5900] transition-colors shadow-sm"><Phone className="w-6 h-6" /></a>
          </div>
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[11px] tracking-[0.3em] text-slate-400 font-black uppercase space-y-4">
            <div className="flex items-center space-x-3">
              <Home className="w-7 h-7 text-slate-900" />
              <span className="text-slate-900 font-black">TechRahj.com • Smart Home Tech</span>
            </div>
            <div className="text-[10px] text-slate-400 max-w-lg mx-auto block mt-4 leading-relaxed font-sans normal-case">
              <strong>NOTICE:</strong> TechRahj.com is an independent platform. This site provides technical consultation, professional installation, and expert sourcing for residential smart home infrastructure.
            </div>
            <span className="font-sans text-[10px]">© 2026 • NATIONWIDE SMART HOME INFRASTRUCTURE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
