import type { GardenRepository } from '../ports/garden-repository.port';
import type { GardenSnapshot } from '../core/models';
import { sampleSnapshot } from '../core/garden-engine';
const KEY = 'c2c-002-emotion-garden';
const BACKUP_KEY = 'c2c-002-emotion-garden-backup';
export class LocalGardenRepository implements GardenRepository {
  load(): GardenSnapshot { try { const value = localStorage.getItem(KEY); if (value) return JSON.parse(value) as GardenSnapshot; } catch { /* use seed */ } return sampleSnapshot(); }
  save(snapshot: GardenSnapshot) { localStorage.setItem(KEY, JSON.stringify(snapshot)); }
  backup(snapshot: GardenSnapshot) { localStorage.setItem(BACKUP_KEY, JSON.stringify(snapshot)); }
  restoreBackup(): GardenSnapshot | null {
    try { const value = localStorage.getItem(BACKUP_KEY); return value ? JSON.parse(value) as GardenSnapshot : null; }
    catch { return null; }
  }
  discardBackup() { localStorage.removeItem(BACKUP_KEY); }
}
