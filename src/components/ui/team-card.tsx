"use client";

import { User, Award, Briefcase } from "lucide-react";
import type { TeamMember } from "@/lib/data/team";

export interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all duration-300 hover:shadow-2xl border border-slate-100 dark:border-slate-700 h-full flex flex-col">
      {/* Header con gradiente */}
      <div className="relative h-32 bg-linear-to-br from-blue-600 via-blue-500 to-blue-400 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 overflow-hidden shrink-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      {/* Avatar Centrado */}
      <div className="relative -mt-16 flex justify-center">
        <div className="w-32 h-32 rounded-full bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-800 group-hover:scale-105 transition-transform duration-300 relative z-10 overflow-hidden">
          {/* Placeholder Icon if no image, or logic to show image would go here. keeping user icon for now as per previous code */}
          <User
            className="w-16 h-16 text-blue-400 dark:text-yellow-400"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="pt-6 pb-6 px-6 flex flex-col grow text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            {member.name}
          </h3>
          <p className="text-blue-600 dark:text-yellow-400 font-medium text-sm flex items-center justify-center gap-1.5">
            <Briefcase className="w-4 h-4" aria-hidden="true" />
            {member.role}
          </p>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 grow">
          {member.description}
        </p>

        {/* Especialidades */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Especialidades
          </h4>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {member.specialties.map((specialty, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        {member.certifications && member.certifications.length > 0 && (
          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
            <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-500 dark:text-yellow-400" aria-hidden="true" />
              Certificaciones
            </h4>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {member.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 dark:bg-yellow-400/10 dark:text-yellow-400 dark:border-yellow-400/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default TeamCard;
