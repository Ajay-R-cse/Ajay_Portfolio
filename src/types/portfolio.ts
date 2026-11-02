export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'interests';
  icon: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & ML' | 'Web Systems';
  overview: string;
  problemStatement: string;
  keyFeatures: string[];
  technologies: string[];
  architecture?: string[];
  githubUrl: string;
  liveDemoUrl: string;
  demoType: 'mental-health' | 'hotel-billing' | 'custom';
}

export interface InternshipItem {
  id: string;
  organization: string;
  position: string;
  status: string;
  duration: string;
  domain: string;
  technologies: string[];
  responsibilities: string[];
  tasksCompleted: string[];
  projectsDeveloped: string[];
  skillsGained: string[];
  keyLearningOutcomes: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  technology: string;
  category: string;
  issuingOrganization: string;
  completionDate: string;
  status: string;
  credentialId?: string;
  verificationUrl?: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  department: string;
  institution: string;
  location: string;
  academicYear: string;
  expectedGraduation: string;
  cgpaOrGrade?: string;
  relevantCoursework: string[];
  academicAchievements: string[];
}

export interface AchievementItem {
  id: string;
  category: string;
  title: string;
  organizationOrEvent: string;
  dateOrYear: string;
  description: string;
  tags: string[];
}

export interface DeveloperProfile {
  id: string;
  platform: 'GitHub' | 'LinkedIn' | 'LeetCode' | 'HackerRank';
  username: string;
  profileUrl: string;
  description: string;
  metricLabel: string;
  metricValue: string;
}
