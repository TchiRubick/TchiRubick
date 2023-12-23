export type Project = {
  title: string;
  preview: string;
  description: string;
  github: string | null;
  url: string | null;
  technologies: string[];
  states: ProjectState[];
};

export type ProjectState =
  | "collaborator"
  | "contractor"
  | "lead"
  | "ongoing"
  | "maintenance"
  | "lowcost"
  | "mercenary"
  | "partenariat"
  | "droped"
  | "personal"
  | "best";
