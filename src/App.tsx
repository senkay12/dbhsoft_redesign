import { useEffect, useState, useRef } from 'react';
import { 
  Menu, X, ChevronRight, BarChart3, Truck, Smartphone, 
  Globe, Users, Zap, Shield, Clock, MapPin, Phone, 
  Mail, Facebook, Twitter, Instagram, Linkedin, 
  Package, CreditCard, QrCode, Settings,
  CheckCircle2, ArrowRight, Play, Database, Brain,
  Camera, MessageSquare, FileText, WifiOff, Cloud,
  Bell, LayoutDashboard, Sparkles, Bot,
  Mic, Receipt, RouteIcon, Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Anasayfa', href: '#hero' },
    { name: 'Özellikler', href: '#features' },
    { name: 'AI Asistan', href: '#ai' },
    { name: 'Modüller', href: '#modules' },
    { name: 'Entegrasyonlar', href: '#integrations' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-white">SGO-MatriX</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white border-0">
              Demo Talep Et
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-slate-300 hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white border-0 mt-4">
              Demo Talep Et
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">Yapay Zeka Destekli Yeni Nesil SFA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Sahadaki Gücünüzü{' '}
            <span className="gradient-text">Yeniden Tanımlayın</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            SGO-MatriX ile akıllı, hızlı ve entegre satış yönetimi. Yapay zeka destekli öngörüler, 
            gerçek zamanlı veri ve offline-first mimari ile satış ekibinizi güçlendirin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white border-0 px-8 py-6 text-lg group">
              Demo Talep Et
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg group">
              <Play className="mr-2 w-5 h-5" />
              Tanıtım Filmi
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '%8', label: 'Ciro Artışı' },
              { value: '%15', label: 'Yakıt Tasarrufu' },
              { value: '45dk', label: 'Günlük Zaman Kazancı' },
              { value: '%90', label: 'Manuel İş Azalması' },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-slate-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 20, suffix: '+', label: 'Yıllık Deneyim', icon: Clock },
    { value: 18, suffix: '', label: 'Ülke', icon: Globe },
    { value: 2750, suffix: '+', label: 'Distribütör', icon: Users },
    { value: 15000, suffix: '+', label: 'Aktif Kullanıcı', icon: Smartphone },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 glass-card rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {isVisible ? <Counter end={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Counter Component
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

// Features Section
function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: 'Raporlama ve Analizler',
      description: 'Alış, satış, stok, tahsilat ve ziyaret analizleri ile doğru zamanda doğru kararlar alın.',
    },
    {
      icon: QrCode,
      title: 'Barkod Verifikasyonu',
      description: 'Ekipman hareketlerinin doğruluğunu merkez ile müşteri arasında koordine edin.',
    },
    {
      icon: CreditCard,
      title: 'Sipariş / Tahsilat',
      description: 'Ofisten veya mobilden satış noktasında anında tahsilat ve sipariş alma.',
    },
    {
      icon: Truck,
      title: 'Soğuk/Sıcak Satış',
      description: 'Araçta muhasebe ile anlık fatura kesme ve dağıtım operasyonları.',
    },
    {
      icon: Package,
      title: 'Stok Takibi',
      description: 'Araç ve merkez depo stok hareketlerini canlı olarak izleyin.',
    },
    {
      icon: MapPin,
      title: 'GPS Takip',
      description: 'Saha ekibinizin konumunu gerçek zamanlı olarak takip edin.',
    },
    {
      icon: Zap,
      title: 'Rut Optimizasyonu',
      description: 'Akıllı rota planlama ile %25 yakıt tasarrufu sağlayın.',
    },
    {
      icon: Shield,
      title: 'Gerçek Zamanlı Çalışma',
      description: 'Anlık veri senkronizasyonu ile her zaman güncel kalın.',
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="relative py-20 md:py-32 bg-slate-950">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
            Özellikler
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            SGO-MatriX <span className="gradient-text">Özellikleri</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Satış noktaları ile satış teşkilatını tek merkezden yönetmenizi sağlayan 
            kapsamlı yazılım çözümü.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// AI Features Section
function AIFeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Sıradaki En İyi Teklif',
      description: 'Müşterinin alım geçmişini analiz ederek satılma olasılığı en yüksek ürünleri önerir.',
      example: '"Bu müşteri X Marka alıyor. Bu ürünü alan müşterilerin %65\'i Y Marka da alıyor."'
    },
    {
      icon: Target,
      title: 'Müşteri Kayıp Riski Tahmini',
      description: 'Sipariş sıklığındaki negatif değişimleri tespit ederek önceden uyarır.',
      example: '"ABC Market\'in sipariş sıklığı %40 azaldı. Kayıp Riski: Yüksek."'
    },
    {
      icon: Camera,
      title: 'Görüntü Tanıma',
      description: 'Raf fotoğrafını çekin, stok durumu, raf payı ve planogram uyumunu anında analiz edin.',
      example: 'Raf payı: %35, Rakip A: %25, Stok dışı: 2 ürün'
    },
    {
      icon: Mic,
      title: 'Sesli Raporlama',
      description: 'Karmaşık filtrelerle uğraşmayın. Aklınızdaki soruyu sorun, SGO-MatriX cevaplasın.',
      example: '"Geçen haftanın toplam tahsilatını göster"'
    },
  ];

  return (
    <section ref={sectionRef} id="ai" className="relative py-20 md:py-32 bg-slate-900/50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
            <Bot className="w-4 h-4 mr-1" />
            Yapay Zeka
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Akıllı Satış <span className="gradient-text">Asistanınız</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            SGO-MatriX, sadece ne olduğunu değil, ne olabileceğini de söyler. 
            Reaktif satıştan proaktif satışa geçin.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{feature.description}</p>
                  <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-slate-300 text-sm italic">{feature.example}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Offline First Section
function OfflineFirstSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const offlineFeatures = [
    {
      icon: WifiOff,
      title: 'Tam Fonksiyonellik',
      description: 'Depoda, bodrum katında veya sinyalin zayıf olduğu yerlerde de işinize devam edin.',
    },
    {
      icon: Database,
      title: 'Güvenli Yerel Kayıt',
      description: 'Tüm işlemler cihazın kendi hafızasına güvenli bir şekilde kaydedilir.',
    },
    {
      icon: Cloud,
      title: 'Akıllı Senkronizasyon',
      description: 'İnternet bağlantısı kurulduğunda sadece değişiklikler gönderilir (Delta Sync).',
    },
    {
      icon: Clock,
      title: '15+ Günlük Kapasite',
      description: 'En az 15 günlük veriyi cihazda tutma ve akıllı senkronizasyon desteği.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-slate-950">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              <WifiOff className="w-4 h-4 mr-1" />
              Offline-First
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              İnternet Olmadan da <span className="gradient-text">Kesintisiz Çalışma</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              SGO-MatriX, internet bağlantısı olmadan da tüm kritik işlemleri gerçekleştirebilen 
              offline-first mimari ile tasarlandı. Sinyalin zayıf olduğu yerlerde bile 
              işinize devam edin.
            </p>
            <div className="space-y-4">
              {offlineFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <WifiOff className="w-4 h-4" />
                    <span>Çevrimdışı Mod</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white">Müşteri listesi görüntüleme</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white">Yeni sipariş oluşturma</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white">Tahsilat yapma</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white">Anket doldurma</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800/50 rounded-xl p-4">
                    <span className="text-slate-400">Bekleyen Senkronizasyon</span>
                    <span className="text-cyan-400 font-semibold">12 işlem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Modules Section
function ModulesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const modules = [
    {
      title: 'Müşteri Yönetimi',
      description: '360° müşteri görünümü, finansal durum, geçmiş siparişler ve ziyaret notları.',
      icon: Users,
    },
    {
      title: 'Rota ve Ziyaret',
      description: 'Akıllı rota optimizasyonu, GPS takibi ve geofencing ile otomatik check-in.',
      icon: RouteIcon,
    },
    {
      title: 'Sipariş Yönetimi',
      description: 'Barkod okutma, görsel ürün kataloğu ve geçmişten tekrar sipariş.',
      icon: Package,
    },
    {
      title: 'Tahsilat',
      description: 'Çoklu ödeme türü, mobil POS entegrasyonu ve anında makbuz.',
      icon: CreditCard,
    },
    {
      title: 'Yönetici Paneli',
      description: 'Anlık raporlama, performans takibi ve bölgesel satış haritası.',
      icon: LayoutDashboard,
    },
    {
      title: 'Anket ve Görev',
      description: 'Dinamik anketler, fotoğraf yükleme ve potansiyel müşteri kaydı.',
      icon: FileText,
    },
  ];

  return (
    <section ref={sectionRef} id="modules" className="relative py-20 md:py-32 bg-slate-900/50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
            Modüller
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            SGO-MatriX <span className="gradient-text">Modülleri</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            İş süreçleriniz boyunca değişen ve yenilenen ihtiyaçlarınıza 
            paralel olarak geliştirilen modüller.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <module.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{module.description}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Detayları İncele</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// E-Invoice Section
function EInvoiceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Teslim Tamamla',
      description: 'Temsilci araçtan ürün teslimi sırasında siparişi "Teslim Edildi" olarak işaretler.',
    },
    {
      number: '02',
      title: 'e-İrsaliye Oluştur',
      description: 'Anında "e-İrsaliye Oluştur" butonu belirir ve GİB\'e otomatik gönderilir.',
    },
    {
      number: '03',
      title: 'Müşteriye Sun',
      description: 'QR Kod, E-posta veya Yazdır seçenekleriyle müşteriye anında teslim.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-slate-950">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
            <Receipt className="w-4 h-4 mr-1" />
            e-İrsaliye
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Kağıda Son: <span className="gradient-text">Tam Dijital Belge Akışı</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sıcak satış ve sevkiyat süreçlerini yasal mevzuatlarla tam uyumlu hale getiriyor, 
            operasyonel yükü ortadan kaldırıyoruz.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="text-5xl font-bold text-slate-700 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '500ms' }}>
          {[
            'Kağıt, baskı, taşıma maliyetlerini ortadan kaldırır',
            'Yasal uyumluluğu garanti altına alır',
            'Anında dijital arşivleme ve erişim',
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// WhatsApp Integration Section
function WhatsAppSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Müşteri Mesaj Gönderir',
      description: '"10 koli X ürününden istiyorum" şeklinde WhatsApp mesajı',
    },
    {
      icon: Bot,
      title: 'Chatbot Yanıtlar',
      description: '"Siparişiniz alınmıştır. Temsilciniz onay için iletişime geçecek"',
    },
    {
      icon: Bell,
      title: 'Temsilci Bildirimi',
      description: 'SGO-MatriX uygulamasında "WhatsApp\'tan Yeni Sipariş Taslağı" bildirimi',
    },
    {
      icon: CheckCircle2,
      title: 'Onay ve Oluşturma',
      description: 'Otomatik doldurulan sipariş taslağını kontrol edip tek tuşla onaylama',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-slate-900/50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              <MessageSquare className="w-4 h-4 mr-1" />
              WhatsApp Entegrasyonu
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Müşteriniz Neredeyse, <span className="gradient-text">Siz Oradasınız</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Müşterilerinizin en çok kullandığı kanaldan sipariş alarak satışları kolaylaştırın 
              ve hiçbir fırsatı kaçırmayın.
            </p>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Phone Mockup */}
          <div className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-[2.5rem] p-4">
                <div className="bg-slate-900 rounded-[2rem] p-4">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">ABC Market</span>
                    </div>
                    <span className="text-slate-500 text-xs">10:30</span>
                  </div>
                  {/* Chat Messages */}
                  <div className="space-y-3">
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                      <p className="text-white text-sm">Merhaba, 10 koli X ürününden istiyorum</p>
                      <span className="text-slate-500 text-xs">10:25</span>
                    </div>
                    <div className="bg-green-600 rounded-2xl rounded-tr-none p-3 max-w-[80%] ml-auto">
                      <p className="text-white text-sm">Siparişiniz alınmıştır. Temsilciniz onay için iletişime geçecek.</p>
                      <span className="text-green-200 text-xs">10:26</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-800/50 rounded-xl p-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <Package className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm">Yeni Sipariş Taslağı</p>
                        <p className="text-slate-400 text-xs">10 koli X Ürünü</p>
                      </div>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs px-3">
                        Onayla
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Integrations Section
function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const integrations = [
    { name: 'Netsis', description: 'Alış irsaliyesi ve fatura aktarımı' },
    { name: 'SAP', description: 'Verifikasyon ve bildirim entegrasyonu' },
    { name: 'SMS Web Servis', description: 'Cep telefonundan sipariş aktarımı' },
    { name: 'Web Sipariş', description: 'Otel ve anlaşmalı kullanıcı siparişi' },
    { name: 'Mobil POS', description: 'Bluetooth ile güvenli ödeme alma' },
    { name: 'GİB', description: 'e-İrsaliye ve e-Fatura entegrasyonu' },
  ];

  return (
    <section ref={sectionRef} id="integrations" className="relative py-20 md:py-32 bg-slate-950">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
            Entegrasyonlar
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mevcut Sistemlerinizle <span className="gradient-text">Entegre</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            SGO-MatriX, kullanmakta olduğunuz ERP ve muhasebe sistemleriyle 
            sorunsuz entegrasyon sağlar.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 text-center group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
              <p className="text-slate-400 text-sm">{integration.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-slate-400 mb-6">
            Özel entegrasyon ihtiyaçlarınız için bizimle iletişime geçin.
          </p>
          <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
            Entegrasyonları İncele
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-cyan-900/50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            KOBİ'lere Özel <span className="gradient-text">Paketler!</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Tanıtım filmini izlediniz mi? İzlediyseniz, KOBİ'lere özel paketlerimizi 
            inceleyebilir, hemen bir demo talebinde bulunabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg group">
              Paketi İncele
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Tanıtım Filmi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 md:py-32 bg-slate-900/50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
            İletişim
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Bizimle <span className="gradient-text">İletişime Geçin</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            SGO-MatriX hakkında daha fazla bilgi almak ve demo talep etmek için 
            formu doldurun, size en kısa sürede dönüş yapalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Adres</h3>
                  <p className="text-slate-400">
                    Armutalan Mah. Taşlıcalılar Cad. No: 12 Kat: 1 No: 3<br />
                    Marmaris / MUĞLA
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Telefon</h3>
                  <p className="text-slate-400">+90 252 417 55 58</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">E-posta</h3>
                  <p className="text-slate-400">info@dbhsoft.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-indigo-500/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`glass rounded-2xl p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Adınız</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Soyadınız</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Soyadınız"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">E-posta</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="ornek@firma.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Mesajınız</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Mesajınızı yazın..."
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white py-6 text-lg">
                Gönder
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">SGO-MatriX</span>
            </a>
            <p className="text-slate-400 max-w-md">
              20 yılı aşkın süredir satış gücü otomasyonu alanında öncü çözümler sunuyoruz. 
              Yapay zeka destekli SGO-MatriX ile iş süreçlerinizi dijitalleştirin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              {['Anasayfa', 'Özellikler', 'AI Asistan', 'Modüller', 'İletişim'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ürünler</h4>
            <ul className="space-y-2">
              {['SGO-MatriX', 'B2B E-Ticaret', 'Web Raporlama', 'Mobil Uygulama', 'AI Asistan'].map((product) => (
                <li key={product}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DBHSOFT. Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
              Kullanım Koşulları
            </a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <AIFeaturesSection />
        <OfflineFirstSection />
        <ModulesSection />
        <EInvoiceSection />
        <WhatsAppSection />
        <IntegrationsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
