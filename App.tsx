import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Download,
  Star,
  AlertCircle,
  Puzzle,
  XCircle,
  X,
  FileText,
  Layers,
  Gift,
  Zap,
  Users,
  Award,
  BookOpen,
  Image as ImageIcon
} from 'lucide-react';
import Button from './components/Button';
import Accordion from './components/Accordion';
import SocialProof from './components/SocialProof'; // Importando o novo componente
import CountdownTimer from './components/CountdownTimer'; // Importando o Timer
import { TESTIMONIALS, FAQ_ITEMS, BONUSES } from './constants';

const App: React.FC = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data atual formatada (DD/MM/AAAA)
  const today = new Date().toLocaleDateString('pt-BR');

  // Configuração visual dos bônus (Mockups simulados)
  const bonusConfig = [
    { icon: <Award className="w-16 h-16 text-white" />, color: "bg-amber-400" }, // Certificado (Ajustado para Amber mais vibrante)
    { icon: <BookOpen className="w-16 h-16 text-white" />, color: "bg-indigo-400" }, // Guia
    { icon: <ImageIcon className="w-16 h-16 text-white" />, color: "bg-pink-400" } // Flashcards
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white relative">
      
      {/* Adicionando o componente de Prova Social */}
      <SocialProof />

      {/* URGENCY RIBBON */}
      <div className="bg-[#ff3333] text-white text-sm font-bold py-2.5 px-4 text-center tracking-wide uppercase shadow-sm z-50 flex items-center justify-center gap-2 relative">
        <AlertCircle className="w-4 h-4" />
        <span>Oferta VALIDA SOMENTE HOJE: {today}</span>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-600 uppercase bg-brand-50 rounded-full border border-brand-100">
            Para crianças de 3 a 10 anos
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
            Transforme a Brincadeira em <br/>
            <span className="text-brand-500">Aprendizado de Inglês.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tenha acesso imediato a <strong>500 dinâmicas e jogos infantis</strong> para seu filho ou aluno aprender inglês <strong>se divertindo</strong>, longe das telas e sem aulas chatas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button text="Quero Acessar Agora" onClick={scrollToOffer} />
            <span className="text-sm text-slate-500 mt-2 sm:mt-0 flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1" /> Acesso imediato
            </span>
          </div>
        </div>
        
        {/* Background blobs - softer colors for kids theme */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40 pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-yellow-100 rounded-full blur-3xl"></div>
           <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-brand-100 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* 2. WHAT YOU GET & BENEFITS GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* O QUE VEM NO PACOTE */}
          <div className="mb-24">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Que Você Vai Receber</h2>
               <div className="w-24 h-1.5 bg-gradient-to-r from-brand-400 to-accent-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Material em PDF",
                  desc: "500 dinâmicas de inglês prontas para baixar, imprimir e aplicar hoje mesmo.",
                  color: "bg-purple-100 text-purple-600",
                  borderColor: "border-purple-200",
                  hoverBorder: "hover:border-purple-400"
                },
                {
                  icon: <Layers className="w-8 h-8" />,
                  title: "Práticas Estruturadas",
                  desc: "Atividades organizadas por nível, objetivo pedagógico e faixa etária.",
                  color: "bg-blue-100 text-brand-600",
                  borderColor: "border-brand-200",
                  hoverBorder: "hover:border-brand-400"
                },
                {
                  icon: <Puzzle className="w-8 h-8" />,
                  title: "Aprendizado Lúdico",
                  desc: "Jogos que ensinam vocabulário e gramática de forma natural e divertida.",
                  color: "bg-amber-100 text-amber-600",
                  borderColor: "border-amber-200",
                  hoverBorder: "hover:border-amber-400"
                },
                {
                  icon: <Gift className="w-8 h-8" />,
                  title: "Bônus Exclusivos",
                  desc: "Flashcards, certificados e mini-livros para enriquecer a experiência.",
                  color: "bg-emerald-100 text-emerald-600",
                  borderColor: "border-emerald-200",
                  hoverBorder: "hover:border-emerald-400"
                }
              ].map((card, idx) => (
                <div key={idx} className={`bg-white p-8 rounded-[2rem] shadow-sm border-[3px] ${card.borderColor} ${card.hoverBorder} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group h-full relative overflow-hidden`}>
                    {/* Background decorativo sutil */}
                    <div className={`absolute top-0 left-0 w-full h-2 ${card.color.split(' ')[0]} opacity-50`}></div>
                    
                    <div className={`w-20 h-20 ${card.color} rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center mb-6 shadow-sm`}>
                        {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        {card.desc}
                    </p>
                </div>
              ))}
            </div>
          </div>

          {/* BENEFÍCIOS EXCLUSIVOS */}
          <div className="mb-16">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Benefícios Exclusivos</h2>
               <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-emerald-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Puzzle className="w-10 h-10" />,
                  title: "100% Lúdico",
                  desc: "Dinâmicas adaptadas que capturam a atenção natural da criança, sem pressão, apenas diversão guiada.",
                  color: "bg-pink-100 text-pink-600",
                  borderColor: "border-pink-200",
                  hoverBorder: "hover:border-pink-400"
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Conexão Real",
                  desc: "Atividades focadas em tirar a criança das telas e promover a interação social em família ou na escola.",
                  color: "bg-indigo-100 text-indigo-600",
                  borderColor: "border-indigo-200",
                  hoverBorder: "hover:border-indigo-400"
                },
                {
                  icon: <Zap className="w-10 h-10" />,
                  title: "Pronto para Usar",
                  desc: "Não precisa preparar aulas complexas. O material é intuitivo: basta ler a instrução e começar a brincar.",
                  color: "bg-orange-100 text-orange-600",
                  borderColor: "border-orange-200",
                  hoverBorder: "hover:border-orange-400"
                }
              ].map((card, idx) => (
                <div key={idx} className={`bg-white p-10 rounded-[2.5rem] shadow-sm border-[3px] ${card.borderColor} ${card.hoverBorder} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group h-full relative overflow-hidden`}>
                   {/* Decorative strip */}
                   <div className={`absolute top-0 left-0 w-full h-3 ${card.color.split(' ')[0]} opacity-50`}></div>
                   
                   <div className={`w-24 h-24 ${card.color} rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                     {card.icon}
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed px-2">
                     {card.desc}
                   </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. BONUSES (DESIGN IGUAL À IMAGEM) */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Presentes para você</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Bônus Exclusivos – Valor R$147 (Hoje Grátis!)</h2>
            <p className="text-slate-500 text-sm mt-2">(Inclusos apenas no pacote completo)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BONUSES.map((bonus, index) => (
              <div key={index} className="bg-white rounded-3xl border-2 border-brand-200 p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300 h-full">
                {/* Mockup da "Capa" do Produto Digital */}
                <div className={`w-full aspect-[4/3] ${bonusConfig[index]?.color || 'bg-slate-200'} rounded-2xl mb-6 flex items-center justify-center shadow-inner relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                       {bonusConfig[index]?.icon}
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight px-2">{bonus.title}</h3>
                
                <p className="text-[#ff4444] font-bold text-xl line-through decoration-[#ff4444] decoration-2 mb-4">
                    {bonus.value}
                </p>
                
                <p className="text-slate-500 text-sm px-2 leading-relaxed">
                    {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OFFER SECTION */}
      <section id="offer" className="py-24 bg-white relative overflow-hidden">
        {/* Playful background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          
          {/* Adicionado o Countdown Timer aqui */}
          <CountdownTimer />

          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900">Escolha seu pacote</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            
            {/* PLANO BÁSICO - R$ 10,00 */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 order-2 md:order-1 relative">
               <div className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">Pacote Simples</div>
               
               <div className="flex justify-center items-baseline mb-6">
                <span className="text-xl font-bold text-slate-700 mr-1">R$</span>
                <span className="text-5xl font-bold text-slate-800">10,00</span>
              </div>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" /> 100 Dinâmicas de Inglês PDF</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" /> Organizadas por nível e objetivo</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" /> Acesso digital</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" /> Garantia de 7 dias</li>
                <li className="flex items-center text-red-400"><X className="w-4 h-4 mr-2 flex-shrink-0" /> Sem benefícios do plano premium</li>
              </ul>

              <Button 
                text="Quero o Básico" 
                variant="secondary"
                fullWidth 
                onClick={() => alert('Redirecionar para Checkout R$ 10')} 
                className="text-base py-3"
              />
            </div>

            {/* PLANO COMPLETO - R$ 19,90 (DESTAQUE) */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-brand-500 transform scale-105 z-10 order-1 md:order-2 relative">
              <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                <span className="bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Mais Popular
                </span>
              </div>

              <div className="text-sm font-bold text-brand-600 uppercase tracking-wide mb-1 mt-2">Pacote Completo</div>
              
              <div className="flex justify-center items-center gap-4 mb-2 opacity-60">
                <span className="text-sm line-through text-slate-400 font-medium">De R$ 97,00</span>
              </div>
              
              <div className="flex justify-center items-baseline mb-6">
                <span className="text-2xl font-bold text-slate-700 mr-1">R$</span>
                <span className="text-6xl font-extrabold text-brand-600 tracking-tighter">19,90</span>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm font-medium text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>1000 ATIVIDADES PARA FAZER COM SUAS CRIANÇAS</span>
                </li>
                
                <li className="flex items-start text-amber-600 font-semibold">
                  <Gift className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>BÔNUS: Certificado Infantil de Participação</span>
                </li>
                
                <li className="flex items-start text-amber-600 font-semibold">
                  <Gift className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>BÔNUS: Dinâmicas para Crianças Tímidas e Agitadas</span>
                </li>
                
                <li className="flex items-start text-amber-600 font-semibold">
                  <Gift className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>BÔNUS: Livros Infantis em Inglês</span>
                </li>

                <li className="flex items-start text-amber-600 font-semibold">
                  <Gift className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>BÔNUS: Alfabeto em Inglês</span>
                </li>

                <li className="flex items-start text-amber-600 font-semibold">
                  <Gift className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>BÔNUS: Números em Inglês</span>
                </li>

                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>Atualizações Gratuitas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>Acesso Vitalício</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" /> 
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
              
              <Button 
                text="Quero Tudo + Bônus" 
                fullWidth 
                onClick={() => alert('Redirecionar para Checkout R$ 19,90')} 
                className="mb-4 text-lg py-4 shadow-brand-500/20"
              />
              
              <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400">
                <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1"/> Compra Segura</span>
                <span className="flex items-center"><Download className="w-3 h-3 mr-1"/> Entrega Imediata</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Pais e Professores Aprovam</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-200 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-brand-600 font-medium">{t.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="space-y-3">
                  <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl italic">
                    "Antes: {t.before}"
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    "{t.after}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Dúvidas Frequentes</h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* 7. GUARANTEE */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ShieldCheck className="w-16 h-16 text-brand-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Teste por 7 dias sem riscos</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Nós confiamos tanto na qualidade do material que, se você achar que não serviu para seu filho ou seus alunos, devolvemos todo o seu dinheiro. Basta enviar um e-mail.
          </p>
          <button onClick={scrollToOffer} className="text-brand-600 font-bold hover:underline">
            Quero garantir com segurança &rarr;
          </button>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-white text-slate-500 py-12 text-sm border-t border-slate-100">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="font-semibold text-slate-900">500 Dinâmicas Infantis em Inglês &copy; {new Date().getFullYear()}</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-brand-600 transition-colors">Termos</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Contato</a>
          </div>
          <p className="text-xs max-w-xl mx-auto text-slate-400 pt-4">
            Este produto não garante fluência imediata. O aprendizado depende da aplicação consistente das atividades. Material de apoio educacional.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;