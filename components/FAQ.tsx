"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-[800px] px-4 md:px-0">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            Support & Aide
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos
            solutions et services.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                activeIndex === index
                  ? "border-emerald-200 shadow-lg ring-1 ring-emerald-100"
                  : "border-slate-200 hover:border-emerald-100"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {item.question}
                </span>
                <span
                  className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    activeIndex === index
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {activeIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                      <div className="pt-4">{item.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "Comment intégrer Ma'a Suh Pay à mon site e-commerce ?",
    answer:
      "L'intégration est simple et rapide grâce à nos API robustes et bien documentées. Nous proposons également des plugins prêts à l'emploi pour les CMS majeurs (WooCommerce, Shopify, Magento). Notre équipe technique est disponible pour vous assister durant toute la phase d'intégration.",
  },
  {
    question:
      "Quels standards de sécurité appliquez-vous pour la protection des données ?",
    answer:
      "Nous appliquons une approche 'Security by Design'. Nos infrastructures sont certifiées ISO 27001 et nos solutions de paiement respectent strictement la norme PCI-DSS niveau 1. Toutes les données sensibles sont chiffrées de bout en bout (AES-256) et nous effectuons des tests d'intrusion (pentests) réguliers.",
  },
  {
    question: "Proposez-vous un support technique local ?",
    answer:
      "Oui, nous disposons d'une équipe de support dédiée et locale, disponible 24/7 pour nos clients Enterprise. Nous croyons en la proximité pour résoudre rapidement vos problématiques et garantir la continuité de vos opérations.",
  },
  {
    question: "Quels sont les avantages de la suite Ma'a Suh CRM & ERP ?",
    answer:
      "Notre suite est conçue spécifiquement pour le contexte africain. Elle unifie la gestion de vos clients, de vos stocks, de votre comptabilité et de vos RH dans une interface unique. Cela vous permet d'avoir une vision 360° de votre activité, de réduire les erreurs manuelles et d'accélérer votre prise de décision.",
  },
  {
    question: "Puis-je personnaliser les fonctionnalités selon mes besoins ?",
    answer:
      "Tout à fait. Bien que nos solutions SaaS soient prêtes à l'emploi, notre pôle 'Développement Sur Mesure' peut adapter chaque module aux processus spécifiques de votre entreprise ou développer des fonctionnalités exclusives pour vous donner un avantage concurrentiel.",
  },
];
