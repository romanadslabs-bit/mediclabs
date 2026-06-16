import { useState, useEffect, useRef } from 'react';
import { 
  Sun, Moon, Instagram, CheckCircle2, 
  ShieldCheck, Layers, Activity, Zap, 
  ShoppingBag, ArrowRight, Smartphone,
  HeartPulse
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

// --- Assets ---
import picHero from '../pic/ingheo.jpg';
import picBento1 from '../pic/ingheo.jpg';
import picBento2 from '../pic/🫀Картки, що роблять складне простим..jpg';
import picCards from '../pic/Вчити ЕКГ — це просто, коли є чітка система. Використовуй ці кроки та закріплюй знання щодня..jpg';
import videoDemo from '../Video/Зрозумій ЕКГ, а не просто запам’ятай.Все, що потрібно — в одному наборі.849 грн.mp4';
import videoLifestyle from '../Video/Medicards - твій помічник на парах 💙.mp4';

const ECG_CARDS = [
  { title: 'Фундамент', desc: 'Провідна система, водії ритму, розрахунок ЧСС.', color: 'from-blue-500 to-cyan-500' },
  { title: 'Синусові порушення', desc: 'Брадикардія, СССВ, синоатріальні блокади.', color: 'from-indigo-500 to-blue-500' },
  { title: 'Аритмії', desc: 'AVNRT, WPW, фібриляція передсердь, VT, VF.', color: 'from-purple-500 to-indigo-500' },
  { title: 'Провідність', desc: 'AV-блокади I-III ст., блокади ніжок пучка Гіса.', color: 'from-teal-500 to-emerald-500' },
  { title: 'Гіпертрофії', desc: 'Критерії для шлуночків та передсердь.', color: 'from-emerald-500 to-green-500' },
  { title: 'Critical Zone', desc: 'STEMI, NSTEMI, синдром Велленса, ТЕЛА.', color: 'from-rose-500 to-red-500' },
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Handle Theme
  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0c] text-slate-900 dark:text-slate-50 transition-colors duration-500 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 dark:bg-[#0a0a0c]/70 backdrop-blur-xl shadow-sm dark:border-b dark:border-white/5 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Medicards<span className="text-indigo-500">.ua</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Переваги</a>
            <a href="#demo" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Продукт</a>
            <a href="#order" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Замовити</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>
            <a 
              href="https://www.instagram.com/medicards.ua/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-900/10 dark:shadow-white/10"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-500/20 dark:bg-indigo-600/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 dark:bg-purple-600/20 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-200 dark:border-indigo-500/20">
              <Zap className="w-3 h-3" />
              <span>Створено медиками</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              Розумій ЕКГ, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                а не запам'ятовуй.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-lg font-medium">
              Від норми до критичних станів за 30 секунд. Преміальні флеш-картки з клінічною базою у твоїй кишені.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="https://www.instagram.com/medicards.ua/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 dark:hover:bg-indigo-400 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2"
              >
                Замовити за 849 грн
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm">В наявності</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Hero Image */}
            <div className="relative z-10 w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-[2.5rem] blur-2xl transform translate-y-8" />
              <img 
                src={picHero} 
                alt="Medicards ECG Set" 
                className="relative rounded-[2.5rem] w-full h-auto object-cover shadow-2xl border border-slate-200/50 dark:border-white/10"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-[#1a1a24]/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Ламіновані</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Антисептик не страшний</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase (Продукт у дії) */}
      <section id="demo" className="py-24 relative bg-slate-900 dark:bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <video 
            src={videoDemo}
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900 dark:from-black dark:via-black/60 dark:to-black" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Вся діагностика в одному наборі.</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Ми відібрали лише робочі критерії. Ніякої «води». Відтепер тобі не потрібно гортати товсті підручники в пошуках ознак блокади чи інфаркту.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
                  <p className="text-4xl font-black text-white mb-2">25+</p>
                  <p className="text-slate-400 text-sm font-medium">Щільних карток</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
                  <p className="text-4xl font-black text-white mb-2">12</p>
                  <p className="text-slate-400 text-sm font-medium">Тем діагностики</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Box Features */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Створено для реальної роботи</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Кожна деталь продумана так, щоб картками було зручно користуватися як на парах, так і на чергуванні.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Box 1: Text Feature */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 bg-white dark:bg-[#15151a] p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                <Layers className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Кишеньковий розмір</h3>
                <p className="text-slate-600 dark:text-slate-400">Ідеально поміщаються в кишеню халата або медичного скрабу. Завжди під рукою.</p>
              </div>
            </motion.div>

            {/* Box 2: Image Focus */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-indigo-50 dark:bg-[#1a1a24] rounded-[2.5rem] overflow-hidden relative group"
            >
              <img 
                src={picBento1} 
                alt="Details of Medicards" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Наочні ілюстрації</h3>
                <p className="text-slate-300">Чіткі схеми патологій та кольорове кодування для миттєвого пошуку.</p>
              </div>
            </motion.div>

            {/* Box 3: Image Focus */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-slate-100 dark:bg-[#1a1a24] rounded-[2.5rem] overflow-hidden relative group"
            >
              <img 
                src={picBento2} 
                alt="Quality of Medicards" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Робить складне простим</h3>
                <p className="text-slate-300">Тільки робочі алгоритми, що рятують час.</p>
              </div>
            </motion.div>

            {/* Box 4: Text Feature */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 rounded-[2.5rem] shadow-sm text-white flex flex-col justify-between"
            >
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Структура</h3>
                <p className="text-indigo-100">Від базових розрахунків ЧСС та осі до складних порушень провідності.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards Fan (Повний спектр) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Що всередині?</h2>
              <div className="space-y-4">
                {ECG_CARDS.map((card, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white dark:bg-[#15151a] p-5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all flex items-center gap-5"
                  >
                    <div className={`w-3 h-12 rounded-full bg-gradient-to-b ${card.color}`} />
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{card.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
               <motion.img 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  src={picCards}
                  alt="Medicards Fan"
                  className="rounded-3xl shadow-2xl z-20 w-full max-w-sm object-cover border border-white/10"
               />
               <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Audience */}
      <section className="py-24 bg-white dark:bg-[#0a0a0c] border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl transform -translate-y-4" />
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 aspect-[9/16] max-w-sm mx-auto">
                <video 
                  src={videoLifestyle}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
             </div>
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-10 -right-4 md:-right-10 bg-white dark:bg-[#1a1a24] p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10 flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 border-2 border-white dark:border-[#1a1a24] flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold">Топ на парах</p>
             </motion.div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">Твій незамінний помічник</h2>
            <div className="space-y-8">
              {[
                { title: 'Студентам-медикам', desc: 'Екзамени, КРОК, практичні заняття — тепер ти впевнений у відповідях.' },
                { title: 'Інтернам', desc: 'Терапія, кардіологія, анестезіологія. База, яка завжди під рукою на обходах.' },
                { title: 'Лікарям ЕМД', desc: 'Швидкі та точні рішення біля ліжка пацієнта чи в кареті швидкої.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="order" className="py-32 relative overflow-hidden bg-slate-900 dark:bg-black text-white">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-white/20">
            <ShoppingBag className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">Час прокачати ЕКГ</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Замовляй преміальний набір Medicards зараз. Твої знання — твоя впевненіність.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://www.instagram.com/medicards.ua/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <Instagram className="w-6 h-6" />
              Замовити в Instagram
            </a>
          </div>
          
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-white">Швидка відправка</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-white">Замовлення в 2 кліки</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-[#0a0a0c] border-t border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-lg font-bold tracking-tight">Medicards<span className="text-indigo-500">.ua</span></span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">© 2026 Medicards.ua. Зроблено медиками для медиків 🇺🇦</p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/medicards.ua/" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
