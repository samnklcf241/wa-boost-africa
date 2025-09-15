import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MessageCircle className="text-primary" size={20} />
            <span className="text-primary font-semibold">
              250 millions d'utilisateurs WhatsApp en Afrique
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Vos clients vous attendent sur WhatsApp
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Transformez vos conversations en ventes dès aujourd'hui avec{" "}
            <span className="text-primary font-bold">WAxion AI</span> !
            Ne laissez plus aucune opportunité vous échapper.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 animate-pulse-subtle"
            >
              Rejoindre la Révolution WhatsApp
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToForm}
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              Parler à un expert
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Configuration en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200" />
              <span>Support 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-500" />
              <span>Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;