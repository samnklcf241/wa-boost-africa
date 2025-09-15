import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Users, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="text-primary text-sm font-semibold">
              🚀 Solution #1 en Afrique Centrale
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
            Automatisez vos conversations{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              WhatsApp
            </span>{" "}
            en toute simplicité !
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Gagnez du temps et améliorez l'expérience de vos clients avec un
            chatbot WhatsApp intelligent, hébergé et géré par Alissa IA.
            Répondez instantanément, programmez des rendez-vous et optimisez
            votre service client sans effort !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up animation-delay-300">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Créer mon Chatbot WhatsApp
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
            >
              Voir une démo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-up animation-delay-400">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-primary" size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground">250M+</div>
              <div className="text-sm text-muted-foreground">
                Utilisateurs WhatsApp en Afrique
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">
                Disponibilité garantie
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground">90%</div>
              <div className="text-sm text-muted-foreground">
                E-commerce via WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;