export type ExperienceType = {
  experience_id: number;
  job_title: string;
  company: string;
  location?: string | null;
  start_date: string;
  end_date?: string | null;
  description?: string | null;
  tasks?: string[] | null;
  tech_stacks?: string[] | null;
  work_model?: string;
  work_hours?: string;
};

export type EducationType = {
  education_id: number;
  person_id: number;
  institution: string;
  degree?: string | null;   
  field?: string | null;    
  start_date: string;       
  end_date?: string | null;
  description?: string | null;
  grade?: string | null;
};

export type SocialMediaType = {
  social_id: number;
  person_id: number;
  platform: string;   
  url: string;
};
export type ProjectType = {
  project_id: string;
  person_id: string;
  status: string;
  name: string;
  description?: string
  repo_url: string
  url?: string
  tech_stacks?: string[] | null;
}