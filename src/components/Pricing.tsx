import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const plans = [
    {
      name: "Essentiel",
      price: "15.000",
      initial: "50.000",
      features: [
        "Chatbot WhatsApp personnalisé",
        "Prise de rendez-vous automatique",
        "Tableau de bord de gestion",
        "Jusqu'à 1.000 messages/mois",
        "Support par email",
      ],
      popular: false,
    },
    {
      name: "Starter",
      price: "45.000",
      initial: "80.000",
      features: [
        "Chatbot WhatsApp personnalisé",
        "Historique des conversations",
        "Jusqu'à 5.000 messages/mois",
        "Prise de rendez-vous automatique",
        "Prise de commandes (sans paiement)",
        "Tableau de bord de gestion",
        "Support email + WhatsApp",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "65.000",
      initial: "250.000",
      features: [
        "Chatbot WhatsApp personnalisé",
        "Historique des conversations",
        "Jusqu'à 7.000 messages/mois",
        "Paiement intégré",
        "Prise de rendez-vous automatique",
        "Tableau de bord de gestion",
        "Support prioritaire",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "95.000",
      initial: "300.000",
      features: [
        "Chatbot WhatsApp personnalisé",
        "Historique des conversations",
        "Jusqu'à 25.000 messages/mois",
        "Paiement intégré",
        "Connexion à une base de données",
        "Intégration API avancée",
        "Multi-langues",
        "Tableau de bord avancé",
        "Gestion multi-utilisateurs",
        "Formation initiale",
        "Support VIP",
      ],
      popular: false,
    },
  ];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="pricing" 
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Offres &{" "}
            <span className="text-primary">Tarifs transparents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins.
            <span className="block text-primary font-semibold mt-2">
              🎁 1 mois gratuit inclus sur tous les plans !
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-primary text-primary-foreground shadow-glow border-2 border-primary"
                  : "bg-card border border-border hover:border-primary/50"
              } ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    Plus populaire
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-3xl font-bold ${
                      plan.popular ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    FCFA/mois
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.popular
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  Paiement initial: {plan.initial} FCFA
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToForm}
                className={`w-full animate-pulse-gentle ${
                  plan.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-gradient-primary hover:shadow-glow"
                }`}
                size="lg"
              >
                Choisir ce plan
              </Button>
            </div>
          ))}
        </div>

        {/* Elite Plan */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-dark rounded-2xl p-8 text-center border border-primary/30">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Plan Elite - Sur mesure
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Solution personnalisée pour les grandes entreprises avec des besoins spécifiques.
              Messages illimités, API personnalisée, support premium avec SLA garanti.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover animate-pulse-gentle"
            >
              Demander un devis personnalisé
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;