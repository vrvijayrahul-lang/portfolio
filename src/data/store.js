import { projects as initialProjects } from './projects';
import { profile as initialProfile } from './profile';
import { services as initialServices } from './services';

const STORAGE_KEYS = {
  PROJECTS: 'metia_projects_data',
  PROFILE: 'metia_profile_data',
  INQUIRIES: 'metia_inquiries_data',
  ANALYTICS: 'metia_analytics_data',
  AUTH: 'metia_admin_auth',
};

// Realistic initial client inquiries for Metia Digital
const initialInquiries = [
  {
    id: 'inq-101',
    name: 'Julian Henderson',
    email: 'julian@arcadiagroup.co',
    service: 'Custom Website Design',
    budget: '$5,000 - $10,000',
    message: 'We are looking to completely redesign our corporate consulting website with a fast, modern technical aesthetic similar to Linear and Stripe. Need launch within 6 weeks.',
    date: '2026-10-25T14:32:00Z',
    status: 'unread',
    notes: 'High priority corporate lead. Prepared discovery schedule.',
  },
  {
    id: 'inq-102',
    name: 'Sophia Laurent',
    email: 'sophia@maisonlaurent.com',
    service: 'E-Commerce Development',
    budget: '$10,000+',
    message: 'We require a bespoke luxury storefront with custom checkout and international shipping. Looking for exceptional speed and editorial brand presentation.',
    date: '2026-10-24T09:15:00Z',
    status: 'read',
    notes: 'Sent initial capability deck. Awaiting product SKU count.',
  },
  {
    id: 'inq-103',
    name: 'Marcus Thorne',
    email: 'm.thorne@cloudscale.io',
    service: 'Web Applications',
    budget: '$5,000 - $10,000',
    message: 'Need a custom telemetry and client usage dashboard built in React with real-time analytics integrations and team permission management.',
    date: '2026-10-22T18:40:00Z',
    status: 'archived',
    notes: 'Discovery call held on Tuesday. Proposal accepted.',
  },
];

const initialAnalytics = {
  totalViews: 28420,
  uniqueVisitors: 11840,
  projectClicks: 3410,
  conversionRate: '5.2%',
  weeklyTraffic: [
    { day: 'Mon', views: 1820, inquiries: 3 },
    { day: 'Tue', views: 2340, inquiries: 6 },
    { day: 'Wed', views: 2180, inquiries: 5 },
    { day: 'Thu', views: 2820, inquiries: 9 },
    { day: 'Fri', views: 3150, inquiries: 8 },
    { day: 'Sat', views: 1640, inquiries: 2 },
    { day: 'Sun', views: 1890, inquiries: 4 },
  ],
};

function dispatchStoreUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('metia_storage_update'));
    window.dispatchEvent(new Event('srahul_storage_update')); // backward compatibility
  }
}

export function getStoredProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return raw ? JSON.parse(raw) : initialProfile;
  } catch (e) {
    console.error('Failed reading stored profile', e);
    return initialProfile;
  }
}

export function saveStoredProfile(newProfile) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(newProfile));
    dispatchStoreUpdate();
  } catch (e) {
    console.error('Failed saving profile', e);
  }
}

export function getStoredProjects() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return raw ? JSON.parse(raw) : initialProjects;
  } catch (e) {
    console.error('Failed reading stored projects', e);
    return initialProjects;
  }
}

export function saveStoredProjects(projectsList) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projectsList));
    dispatchStoreUpdate();
  } catch (e) {
    console.error('Failed saving projects', e);
  }
}

export function getStoredInquiries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    return raw ? JSON.parse(raw) : initialInquiries;
  } catch (e) {
    console.error('Failed reading stored inquiries', e);
    return initialInquiries;
  }
}

export function saveStoredInquiries(inquiriesList) {
  try {
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiriesList));
    dispatchStoreUpdate();
  } catch (e) {
    console.error('Failed saving inquiries', e);
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

export function markInquiryStatus(id, newStatus) {
  try {
    const existing = getStoredInquiries();
    const updated = existing.map((inq) =>
      inq.id === id ? { ...inq, status: newStatus } : inq
    );
    saveStoredInquiries(updated);
  } catch (e) {
    console.error('Failed to update inquiry status', e);
  }
}

export function deleteInquiry(id) {
  try {
    const existing = getStoredInquiries();
    const updated = existing.filter((inq) => inq.id !== id);
    saveStoredInquiries(updated);
  } catch (e) {
    console.error('Failed to delete inquiry', e);
  }
}

export function getStoredAnalytics() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ANALYTICS);
    return raw ? JSON.parse(raw) : initialAnalytics;
  } catch (e) {
    console.error('Failed reading analytics', e);
    return initialAnalytics;
  }
}

export function checkAdminAuth() {
  try {
    return sessionStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
  } catch (e) {
    return false;
  }
}

export function setAdminAuth(isAuthed) {
  try {
    if (isAuthed) {
      sessionStorage.setItem(STORAGE_KEYS.AUTH, 'true');
    } else {
      sessionStorage.removeItem(STORAGE_KEYS.AUTH);
    }
    dispatchStoreUpdate();
  } catch (e) {
    console.error('Failed setting admin auth', e);
  }
}

export function resetStoreToDefaults() {
  try {
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.INQUIRIES);
    localStorage.removeItem(STORAGE_KEYS.ANALYTICS);
    sessionStorage.removeItem(STORAGE_KEYS.AUTH);
    dispatchStoreUpdate();
  } catch (e) {
    console.error('Failed resetting store', e);
  }
}
