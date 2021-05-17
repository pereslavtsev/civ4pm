import { getExecVersion } from '../helpers';

export class Civ4Executable {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  get fullPath(): string {
    return this.path.replace(/\//g, '\\');
  }

  detectVersion(): Promise<string> {
    const execPath = String(this.path)
      .replace(/\\/g, '\\\\')
      .replace(/\//g, '\\\\')
      .replace(/'/g, "\\'");
    return getExecVersion(execPath);
  }
}
