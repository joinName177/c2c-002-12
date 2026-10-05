import type { GardenSnapshot } from '../core/models';
export interface GardenRepository {
  load(): GardenSnapshot;
  save(snapshot: GardenSnapshot): void;
  /** 把当前快照存入唯一的备份槽（覆盖上一次备份） */
  backup(snapshot: GardenSnapshot): void;
  /** 取出最近一次备份；没有备份时返回 null */
  restoreBackup(): GardenSnapshot | null;
  /** 清除备份槽，撤销机会用过或被放弃后调用 */
  discardBackup(): void;
}
