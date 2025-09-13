import { CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Choisissez votre formule",
      description: "Sélectionnez le plan qui correspond à vos besoins",
    },
    {
      number: "02", 
      title: "Commandez en simplicité",
      description: "Processus de commande rapide et sécurisé",
    },
    {
      number: "03",
      title: "Validation express",
      description: "Confirmation immédiate par email",
    },
    {
      number: "04",
      title: "Configuration rapide",
      description: "Nos experts configurent votre chatbot",
    },
    {
      number: "05",
      title: "Personnalisez votre assistant",
      description: "Définissez nom, mission et style de communication",
    },
    {
      number: "06",
      title: "Dominez WhatsApp",
      description: "Votre vendeur automatique travaille 24/7",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Processus en{" "}
            <span className="text-primary">6 étapes simples</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De la commande à la mise en ligne, nous vous accompagnons à chaque étape
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:shadow-glow transition-all">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="lg:hidden absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-primary to-transparent" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Success checkmark on hover */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;