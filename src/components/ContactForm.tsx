import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "sonner";

const ContactForm = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    plan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande a été envoyée avec succès !");
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Commencez votre{" "}
              <span className="text-primary">transformation digitale</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Remplissez le formulaire et lancez votre chatbot en quelques minutes
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="mt-2"
                  placeholder="Jean"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="mt-2"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-2"
                placeholder="jean.dupont@exemple.com"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="whatsapp">Numéro WhatsApp *</Label>
              <Input
                id="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className="mt-2"
                placeholder="+237 6XX XXX XXX"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="plan">Choisir votre formule *</Label>
              <Select
                value={formData.plan}
                onValueChange={(value) =>
                  setFormData({ ...formData, plan: value })
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Sélectionnez une formule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="essentiel">
                    Essentiel - 15.000 FCFA/mois
                  </SelectItem>
                  <SelectItem value="starter">
                    Starter - 45.000 FCFA/mois
                  </SelectItem>
                  <SelectItem value="pro">Pro - 65.000 FCFA/mois</SelectItem>
                  <SelectItem value="business">
                    Business - 95.000 FCFA/mois
                  </SelectItem>
                  <SelectItem value="elite">Elite - Sur mesure</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-8">
              <Label>Date de démarrage souhaitée</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal mt-2"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP", { locale: fr })
                    ) : (
                      <span>Choisir une date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Lancer mon Chatbot
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;