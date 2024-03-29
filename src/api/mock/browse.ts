import { generateBrowseCategories, generateSectionItems } from './generator';

export const BROWSE_CATEGORIES = generateBrowseCategories();
export const BROWSE_RECENT_SEARCHES = generateSectionItems('mix');
