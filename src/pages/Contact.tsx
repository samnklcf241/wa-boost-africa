import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contactez-nous
              </h1>
              <p className="text-xl text-muted-foreground">
                Une question ? Un projet ? Notre équipe est là pour vous accompagner
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Restons en contact
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Notre équipe d'experts est disponible pour répondre à toutes vos questions 
                    et vous accompagner dans la transformation digitale de votre entreprise.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                        <p className="text-muted-foreground">+241 74 57 00 40</p>
                        <p className="text-sm text-muted-foreground mt-1">Lun-Ven: 8h-18h</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">contact@alissa-ia.ga</p>
                        <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          SING SA<br />
                          Rue Pecqueur, Centre ville<br />
                          Gabon
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                        <p className="text-muted-foreground">
                          Lundi - Vendredi: 8h00 - 18h00<br />
                          Samedi: 9h00 - 14h00<br />
                          Dimanche: Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="bg-gradient-glass rounded-xl p-6 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Une solution de</p>
                  <h3 className="text-xl font-bold text-primary mb-2">Alissa IA</h3>
                  <p className="text-muted-foreground">
                    Leader de l'intelligence artificielle conversationnelle en Afrique Centrale
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Envoyez-nous un message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                      placeholder="jean.dupont@exemple.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                      placeholder="+241 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="mt-2"
                      placeholder="Demande d'information sur WAxion AI"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-[120px]"
                      placeholder="Décrivez votre projet ou votre question..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-pulse-subtle"
                  >
                    <Send className="mr-2" size={20} />
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Optional placeholder) */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nous trouver
              </h3>
              <div className="bg-card rounded-xl h-96 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-4" size={48} />
                  <p className="text-muted-foreground">
                    SING SA - Rue Pecqueur, Centre ville, Gabon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;