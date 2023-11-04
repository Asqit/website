/** KV connector, please use `--unstable` flag, because currently, it's in the beta state */
const kv = await Deno.openKv();

/** A wrapper class around KV, that works similarly as regular localStorage */
export class LocalStorage {
  /**
   * A method for retrieving individual items from the kV
   * @param key unique key
   */
  static async getItem(key: string): Promise<string> {
    const { value } = await kv.get([key]);

    return value as string;
  }

  /**
   * a method for creating a record
   * @param key unique key under which will the value be stored
   * @param value the value you wanna store
   */
  static async setItem(key: string, value: string) {
    await kv.set([key], value);
  }

  /**
   * a method for removing record by key
   * @param key
   */
  static async removeItem(key: string) {
    await kv.delete([key]);
  }

  /**
   * a method that removes all elements from the database
   */
  static async clear() {
    for await (const { key } of kv.list({ prefix: [] })) await kv.delete(key);
  }
}
