"use client";

import React from "react";
import {
  CreditCard,
  Landmark,
  Users,
  ShoppingBag,
  MessageSquare,
  Key,
  FileText,
  Bot,
  Box,
  Store,
  ArrowRight,
} from "lucide-react";

export default function Solutions() {
  return (
    <section id="solutions" className="py-12 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-[1180px] px-4 md:px-0">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            Nos Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Un écosystème complet pour <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
              propulser votre activité
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Des outils spécialisés pour chaque aspect de votre business,
            connectés et sécurisés.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-200"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <solution.icon className="h-24 w-24 text-emerald-600" />
              </div>

              <div>
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-50 p-3 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {solution.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {solution.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer">
                Découvrir <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const solutions = [
  {
    icon: CreditCard,
    title: "Ma’a Suh Pay",
    description:
      "Solution de paiement tout-en-un pour vos transactions sécurisées.",
  },
  {
    icon: Landmark,
    title: "Ma’a Suh Microfinance",
    description: "Solution phygitale pour la gestion financière et bancaire.",
  },
  {
    icon: Users,
    title: "Ma’a Suh CRM & ERP",
    description: "Gestion complète de vos clients et ressources d'entreprise.",
  },
  {
    icon: ShoppingBag,
    title: "Ma’a Suh Shop & Retail",
    description: "Solution clé en main pour le commerce digital et retail.",
  },
  {
    icon: MessageSquare, // Using MessageSquare for Com's
    title: "Bantu Com’s",
    description: "Bulk SMS, emailing et WhatsApp Bulk pour votre marketing.",
  },
  {
    icon: Key, // Using Key for 'Location' (Rentals)
    title: "ALOGA",
    description: "SaaS complet pour la location et la gestion locative.",
  },
  {
    icon: FileText,
    title: "Facturis",
    description: "Logiciel de facturation intelligente et automatisée.",
  },
  {
    icon: Bot,
    title: "Mathie",
    description: "Automatisation de vos réseaux sociaux propulsée par l'IA.",
  },
  {
    icon: Box, // Using Box for Stock/POS
    title: "AKO",
    description: "Gestion de stock, point de vente (POS) et hôtellerie.",
  },
  {
    icon: Store, // Using Store for Merchant-Supplier connection
    title: "KONSO",
    description: "Le système qui connecte les commerçants aux fournisseurs.",
  },
];
