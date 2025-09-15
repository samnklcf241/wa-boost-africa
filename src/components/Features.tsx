import { Bot, ShoppingCart, Calendar, BarChart3, Zap, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Réponses instantanées",
      description: "Captez l'attention de vos clients avec des réponses immédiates 24/7",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Commandes simplifiées",
      description: "Prise de commandes et paiements directement sur WhatsApp",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Rendez-vous automatisés",
      description: "Réservation et gestion des rendez-vous en quelques clics",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Insights précieux",
      description: "Statistiques détaillées pour optimiser vos ventes",
    },
  ];

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Chatbot Sur-Mesure",
      description: "Un assistant qui parle comme vous, répond comme vous, et vend pour vous",
      highlight: true,
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Commandes Directes",
      description: "Achat simplifié sans quitter WhatsApp, avec paiement intégré",
      highlight: false,
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Rendez-Vous Automatisés",
      description: "Réservation intelligente en 3 clics, synchronisée avec votre agenda",
      highlight: false,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analyse Puissante",
      description: "Tableau de bord complet avec statistiques pour booster vos ventes",
      highlight: false,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-langues",
      description: "Communiquez avec vos clients dans leur langue préférée",
      highlight: false,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intégration API",
      description: "Connectez vos outils existants pour une expérience fluide",
      highlight: true,
    },
  ];

  return (
    <>
      {/* Why WAxion AI Section */}
      <section 
        ref={sectionRef as React.RefObject<HTMLElement>}
        id="features" 
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Pourquoi{" "}
              <span className="text-primary">WAxion AI</span>{" "}
              va changer votre business ?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <span className="text-primary font-semibold">WhatsApp</span> est l'application n°1 en Afrique avec{" "}
                <span className="text-foreground font-semibold">250 millions d'utilisateurs</span>.
              </p>
              <p>Vos clients y passent déjà leur temps.</p>
              <p className="text-destructive font-semibold">
                Répondre manuellement = perte de temps et d'opportunités.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div 
            ref={benefitsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative bg-card hover:bg-card/80 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow ${
                  benefitsVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fonctionnalités différenciantes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce dont vous avez besoin pour dominer WhatsApp
            </p>
          </div>

          <div 
            ref={featuresRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                  feature.highlight
                    ? "bg-gradient-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-lg"
                } ${featuresVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                    feature.highlight
                      ? "bg-primary-foreground/10"
                      : "bg-primary/10"
                  }`}
                >
                  <div
                    className={
                      feature.highlight ? "text-primary-foreground" : "text-primary"
                    }
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    feature.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={
                    feature.highlight
                      ? "text-primary-foreground/90"
                      : "text-muted-foreground"
                  }
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;