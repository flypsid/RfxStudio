"use client";

import React from "react";
import { Code2, Cpu, Cloud, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Expertise() {
  return (
    <section id="expertise" className="py-12 md:py-24 bg-white">
      <div className="mx-auto max-w-[1180px] px-4 md:px-0">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            Notre Expertise Technique
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Une maîtrise technologique <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
              de pointe
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Nous déployons les technologies les plus avancées pour bâtir des
            solutions robustes, scalables et sécurisées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {item.category}
                </div>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mb-6 text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2">
                {item.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-500"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const expertiseItems = [
  {
    icon: Code2,
    category: "Développement",
    title: "Ingénierie Logicielle & Mobile",
    description:
      "Conception d'applications web et mobiles natives haute performance, offrant une expérience utilisateur fluide et intuitive.",
    features: ["React / Next.js", "React Native", "TypeScript", "Python"],
  },
  {
    icon: Cpu,
    category: "Intelligence Artificielle",
    title: "IA & Data Analytics",
    description:
      "Intégration de modèles d'IA avancés et analyse de données pour automatiser vos processus et éclairer vos décisions.",
    features: [
      "LLM & Chatbots",
      "Machine Learning",
      "Analyse Prédictive",
      "Automatisation",
    ],
  },
  {
    icon: Cloud,
    category: "Infrastructure",
    title: "Cloud & DevOps",
    description:
      "Architecture cloud résiliente et chaînes de déploiement automatisées pour garantir la disponibilité et la scalabilité de vos services.",
    features: [
      "AWS / Azure",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Serverless",
    ],
  },
  {
    icon: ShieldCheck,
    category: "Sécurité",
    title: "Cybersécurité & Conformité",
    description:
      "Protection de vos actifs numériques avec des standards de sécurité bancaire et une conformité rigoureuse aux réglementations.",
    features: [
      "Audits de Sécurité",
      "Conformité RGPD/PCI",
      "Chiffrement de bout en bout",
      "Gestion des identités",
    ],
  },
];
