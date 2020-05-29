/**
 * Internationalization service contract.
 */
export interface LocaleServiceInterface {

  /**
   * Translate one phrase referenced by a key.
   * @param _key reference for the phrase that will be translated.
   */
  translate(_key: string): string;


  /**
   * Translate one phrase that has a singular or plural word on it.
   * @param _key reference for the phrase that will be translated.
   * @param _count number of items to specify if the translation will use singular from plural.
   */
  translatePlural(_key: string, _count: number): string;

  /**
   * Set the idiom of the translation.
   * @param _locale the locale that should be used on the translation.
   */
  setLocale(_locale: string): void;
}
