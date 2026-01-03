export interface CycleEntry {
    startDate: string;
    endDate?: string;
    flowLevel?: 'light' | 'medium' | 'heavy';
    symptoms: string[];
    moods: string[];
}

export interface BMIMeasurement {
    date: string;
    weight: number;
    height: number;
    bmi: number;
}

export interface UserProfile {
    id: string;
    name: string;
    age: number;
    cycleLength: number;
    periodLength: number;
    targetWeight?: number;
    waterGoal?: number; // Glasses per day
    sleepGoal?: number; // Hours per night
    lastPeriodDate?: string; // YYYY-MM-DD
    pin?: string;
    isSecurityEnabled: boolean;
    language?: 'fr' | 'en';
    lastSynced?: string; // ISO Date string
}

export interface Meal {
    type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
    description: string;
}

export interface DailyLog {
    date: string;
    flow?: 'none' | 'light' | 'medium' | 'heavy';
    symptoms: string[];
    moods: string[];
    notes?: string;
    waterIntake?: number;
    sleepHours?: number;
    sleepQuality?: 'good' | 'average' | 'bad';
    meals?: Meal[];
}

export interface Tip {
    title: string;
    content: string;
    category: 'nutrition' | 'sport' | 'wellbeing';
    phase: 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';
}
