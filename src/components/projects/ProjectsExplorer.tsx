"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { projects, sectors, services } from "@/data/projects";
import { ProjectTile } from "./ProjectTile";

const ALL = "all";

/** Service/sector filters above the full project grid. */
export function ProjectsExplorer() {
  const [service, setService] = useState(ALL);
  const [sector, setSector] = useState(ALL);

  const visible = projects.filter(
    (p) =>
      (service === ALL || p.services.some((s) => s === service)) &&
      (sector === ALL || p.sectors.some((s) => s === sector)),
  );

  return (
    <div className="flex flex-col gap-9 md:gap-10">
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
        <p className="text-lg leading-[27px] text-body">See work from</p>
        <FilterSelect
          label="Filter by service"
          value={service}
          onChange={setService}
          allLabel="All services"
          options={services}
        />
        <FilterSelect
          label="Filter by sector"
          value={sector}
          onChange={setSector}
          allLabel="All sectors"
          options={sectors}
        />
      </div>
      <div className="grid items-start gap-2.5 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectTile
            key={project.slug}
            project={project}
            sizes="(min-width: 1200px) 595px, (min-width: 810px) 50vw, 100vw"
          />
        ))}
      </div>
    </div>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  allLabel: string;
  options: readonly string[];
};

function FilterSelect({ label, value, onChange, allLabel, options }: FilterSelectProps) {
  return (
    <div className="relative w-full md:w-auto">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full cursor-pointer appearance-none rounded-lg bg-[#f0f0f0] py-2.5 pr-[38px] pl-4 text-sm leading-[19.6px] text-black"
      >
        <option value={ALL}>{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-[13px] right-4 text-black" />
    </div>
  );
}
