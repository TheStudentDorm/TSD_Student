export type Job = {
  id: string;
  title: string;
  keywords? : string[];
  department?: string;
  workType?: string;
  employmentType?: string;
  applyUrl?: String;
  comingSoon?: boolean; 
};
