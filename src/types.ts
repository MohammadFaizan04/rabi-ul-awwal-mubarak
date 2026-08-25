export interface DuaItem {
  id: string;
  category: string;
  arabic?: string;
  title: string;
  text: string;
  translation: string;
  amenCount: number;
}

export interface BlessingItem {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  iconName: 'Heart' | 'Sun' | 'Shield' | 'Sparkles' | 'BookOpen' | 'Compass';
}

export interface CustomGreetingData {
  senderName: string;
  recipientName: string;
  customMessage?: string;
}
