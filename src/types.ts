export type Language = 'en' | 'es';

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'press' | 'social' | 'audio' | 'diagram' | 'instagram';
  titleEn: string;
  titleEs: string;
  subtitleEn?: string;
  subtitleEs?: string;
  src?: string;
  srcEn?: string; // English PDF rendered image if available
  embedUrl?: string; // YouTube or video embed
  instagramId?: string; // e.g. "C8kLmNp..." from /p/ or /reel/
  authorOrSource?: string;
  date?: string;
  url?: string;
  captionEn: string;
  captionEs: string;
  tags?: string[];
  metrics?: {
    labelEn: string;
    labelEs: string;
    value: string;
  }[];
  detailsEn?: string[];
  detailsEs?: string[];
  subLinks?: {
    titleEn: string;
    titleEs: string;
    url: string;
    tag?: string;
    src?: string;
  }[];
}

export interface SubSectionData {
  id: string;
  titleEn: string;
  titleEs: string;
  badgeEn?: string;
  badgeEs?: string;
  mediaItems: MediaItem[];
}

export interface SectionData {
  id: string;
  tabKey: string;
  tabTitleEn?: string;
  tabTitleEs?: string;
  badgeEn: string;
  badgeEs: string;
  roleEn: string;
  roleEs: string;
  titleEn: string;
  titleEs: string;
  headlineEn: string;
  headlineEs: string;
  narrativeEn: string;
  narrativeEs: string;
  keyOutcomesEn: string[];
  keyOutcomesEs: string[];
  stats: {
    value: string;
    labelEn: string;
    labelEs: string;
  }[];
  subSections?: SubSectionData[];
  mediaItems: MediaItem[];
}
