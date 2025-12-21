import {
  CheckCircle2,
  XCircle,
} from "./../../../../../node_modules/lucide-react";

import { idealFor, notFor } from "../data/idealClients";

export function IdealClientsSection() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-[#0a1128] to-[#1a1f3c]  border border-primary/20 font-montserrat">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            ¿Para quién es{" "}
            <span className="text-turqueza-letter-light">Kedevs</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background border border-turqueza-letter-light rounded-xl p-8 bg-blue-found/60">
              <h3 className="text-xl font-bold mb-6 text-turqueza-letter-light">
                ✓ Ideal para
              </h3>
              <ul className="space-y-4">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-turqueza-letter-light flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background border border-gray-500 rounded-xl p-8 bg-blue-found/60">
              <h3 className="text-xl font-bold mb-6 text-gray-500">
                ✗ No es para
              </h3>
              <ul className="space-y-4">
                {notFor.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <XCircle className="w-6 h-6 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
