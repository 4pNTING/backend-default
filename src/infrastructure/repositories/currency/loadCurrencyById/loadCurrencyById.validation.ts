export class LoadCurrencyByIdValidation {
  public async execute(_id: string): Promise<void> {
    try {
      if (!_id) {
        throw new Error('Currency ID is required');
      }
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }
}
