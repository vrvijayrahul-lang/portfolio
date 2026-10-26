import { projects as initialProjects } from './projects';
import { profile as initialProfile } from './profile';
import { services as initialServices } from './services';

const STORAGE_KEYS = {
  PROJECTS: 'srahul_projects_data',
  PROFILE: 'srahul_profile_data',
  INQUIRIES: 'srahul_inquiries_data',
  ANALYTICS: 'srahul_analytics_data',
  AUTH: 'srahul_admin_auth',
};

// Initial realistic inquiries for demonstration and testing
const initialInquiries = [
  {
    id: 'inq-101',
    name: 'Marcus Vance',
    email: 'marcus@vancemedia.co',
    service: 'Web Development',
    budget: '$2,000 - $5,000',
    message: 'We are redesigning our SaaS marketing landing page and need high-speed React architecture with editorial aesthetics similar to Linear. Looking to kick off next month.',
    date: '2026-10-25T14:32:00Z',
    status: 'unread',
    notes: 'High priority lead from London.',
  },
  {
    id: 'inq-102',
    name: 'Elena Rostova',
    email: 'elena.design@studio-noir.io',
    service: 'UI/UX Design',
    budget: '$5,000+',
    message: 'Loved your brutalist editorial layout. We need a design system and high-fidelity Figma components for an underground electronic music streaming platform.',
    date: '2026-10-24T09:15:00Z',
    status: 'read',
    notes: 'Discussed timeline over email. Follow up on Monday.',
  },
  {
    id: 'inq-103',
    name: 'David Chen',
    email: 'david@growthengine.xyz',
    service: 'AI Tools & Automation',
    budget: '$500 - $2,000',
    message: 'Need help automating our weekly newsletter curation pipeline using custom LLM prompts and markdown exports.',
    date: '2026-10-22T18:40:00Z',
    status: 'archived',
    notes: 'Completed discovery call.',
  },
];

const initialAnalytics = {
  totalViews: 14280,
  uniqueVisitors: 6420,
  projectClicks: 1890,
  conversionRate: '4.8%',
  weeklyTraffic: [
    { day: 'Mon', views: 820, inquiries: 2 },
    { day: 'Tue', views: 1140, inquiries: 4 },
    { day: 'Wed', views: 980, inquiries: 3 },
    { day: 'Thu', views: 1420, inquiries: 7 },
    { day: 'Fri', views: 1650, inquiries: 5 },
    { day: 'Sat', views: 1210, inquiries: 2 },
    { day: 'Sun', views: 1390, inquiries: 3 },
  ],
};

// --- Profile Store ---
export function getStoredProfile() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return data ? JSON.parse(data) : initialProfile;
  } catch (e) {
    return initialProfile;
  }
}

export function saveStoredProfile(updatedProfile) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updatedProfile));
    window.dispatchEvent(new Event('srahul_storage_update'));
  } catch (e) {
    console.error('Failed to save profile to localStorage', e);
  }
}

// --- Projects Store ---
export function getStoredProjects() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return data ? JSON.parse(data) : initialProjects;
  } catch (e) {
    return initialProjects;
  }
}

export function saveStoredProjects(updatedProjects) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updatedProjects));
    window.dispatchEvent(new Event('srahul_storage_update'));
  } catch (e) {
    console.error('Failed to save projects to localStorage', e);
  }
}

// --- Inquiries Store ---
export function getStoredInquiries() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(initialInquiries));
      return initialInquiries;
    }
    return JSON.parse(data);
  } catch (e) {
    return initialInquiries;
  }
}

export function saveStoredInquiries(inquiries) {
  try {
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    window.dispatchEvent(new Event('srahul_storage_update'));
  } catch (e) {
    console.error('Failed to save inquiries to localStorage', e);
  }
}

export function addInquiry(inquiry) {
  try {
    const existing = getStoredInquiries();
    const newEntry = {
      id: `inq-${Date.now().toString(36)}`,
      ...inquiry,
      date: new Date().toISOString(),
      status: 'unread',
      notes: '',
    };
    const updated = [newEntry, ...existing];
    saveStoredInquiries(updated);
    return newEntry;
  } catch (e) {
    console.error('Failed to add inquiry', e);
  }
}

export function markInquiryStatus(id, status) {
  const existing = getStoredInquiries();
  const updated = existing.map((item) => (item.id === id ? { ...item, status } : item));
  saveStoredInquiries(updated);
}

export function deleteInquiry(id) {
  const existing = getStoredInquiries();
  const updated = existing.filter((item) => item.id !== id);
  saveStoredInquiries(updated);
}

// --- Analytics Store ---
export function getStoredAnalytics() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ANALYTICS);
    return data ? JSON.parse(data) : initialAnalytics;
  } catch (e) {
    return initialAnalytics;
  }
}

// --- Auth Store ---
export function checkAdminAuth() {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
  } catch (e) {
    return false;
  }
}

export function setAdminAuth(isAuthenticated) {
  try {
    if (isAuthenticated) {
      localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEYS.AUTH);
    }
    window.dispatchEvent(new Event('srahul_storage_update'));
  } catch (e) {
    console.error('Failed to update auth status', e);
  }
}

// Reset store to defaults
export function resetStoreToDefaults() {
  try {
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.INQUIRIES);
    localStorage.removeItem(STORAGE_KEYS.ANALYTICS);
    window.dispatchEvent(new Event('srahul_storage_update'));
  } catch (e) {
    console.error('Failed to reset store', e);
  }
}
