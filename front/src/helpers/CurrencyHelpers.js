/**
 * Class for currency helpers functions.
 */
class CurrencyHelpers {
  /**
   * Format a number into USD.
   * @param   {Number}  number  The number you want to format.
   * @return  {String}          The formatted data.
   */
  static usd(number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(number);
  }
}

export default CurrencyHelpers;
