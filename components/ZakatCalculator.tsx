import Head from 'next/head';
import { useState } from 'react';

const ZakatCalculator = () => {
  const [formData, setFormData] = useState({
    gold: '',
    silver: '',
    cash: '',
    savings: '',
    debts: '',
  });

  const [zakatAmount, setZakatAmount] = useState<{ grams: number | null; currency: number | null }>({
    grams: null,
    currency: null,
  });

  const nisabGold = 87.48; // Nisab for gold in grams
  const nisabSilver = 612.36; // Nisab for silver in grams
  const zakatRate = 0.025; // 2.5%

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert inputs to numbers
    const goldValue = parseFloat(formData.gold || '0');
    const silverValue = parseFloat(formData.silver || '0');
    const cashValue = parseFloat(formData.cash || '0');
    const savingsValue = parseFloat(formData.savings || '0');
    const debtsValue = parseFloat(formData.debts || '0');

    const totalAssets = goldValue + silverValue + cashValue + savingsValue - debtsValue;

    // Calculate Zakat
    const zakatOnGold = goldValue * zakatRate;
    const zakatOnSilver = silverValue * zakatRate;
    const zakatOnCurrency = (cashValue + savingsValue - debtsValue) * zakatRate;

    const zakatGrams = zakatOnGold + zakatOnSilver;
    const zakatCurrency = zakatOnCurrency;

    if (totalAssets >= nisabGold || totalAssets >= nisabSilver) {
      setZakatAmount({ grams: zakatGrams, currency: zakatCurrency });
    } else {
      setZakatAmount({ grams: 0, currency: 0 });
    }
  };

  return (
    <>
      <Head>
        <title>Zakat Calculator</title>
        <meta name="description" content="Calculate your Zakat with ease using our Zakat Calculator." />
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-8">
        <h1 className="mb-6 text-center font-serif text-4xl text-gray-800">Zakat Calculator</h1>
        <p className="mb-8 text-center text-gray-600">Calculate your Zakat based on your assets and liabilities.</p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 rounded-lg bg-white p-6 shadow-lg">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="gold">
              Gold (in grams)
            </label>
            <input
              type="number"
              id="gold"
              name="gold"
              value={formData.gold}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter gold value in grams"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="silver">
              Silver (in grams)
            </label>
            <input
              type="number"
              id="silver"
              name="silver"
              value={formData.silver}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter silver value in grams"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="cash">
              Cash (in your currency)
            </label>
            <input
              type="number"
              id="cash"
              name="cash"
              value={formData.cash}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter cash value"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="savings">
              Savings (in your currency)
            </label>
            <input
              type="number"
              id="savings"
              name="savings"
              value={formData.savings}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter savings value"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="debts">
              Debts (in your currency)
            </label>
            <input
              type="number"
              id="debts"
              name="debts"
              value={formData.debts}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter debts value"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center  gap-2 rounded-lg bg-accent-2 py-3 px-4 text-white hover:bg-accent-1 lg:rounded-xl"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-white p-4  text-accent-2 shadow-accent-2/30 md:mr-3">
                <span className="material-icons">attach_money</span>
              </span>
              <span className="block ">Calculate</span>
            </button>{' '}
          </div>
        </form>

        {zakatAmount.grams !== null && zakatAmount.currency !== null && (
          <div className="mt-8 p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">
              Zakat on Gold & Silver: {zakatAmount.grams > 0 ? `${zakatAmount.grams.toFixed(2)} grams` : 'No Zakat due'}{' '}
              <br />
              Zakat on Other Assets:{' '}
              {zakatAmount.currency > 0 ? `${zakatAmount.currency.toFixed(2)} (your currency)` : 'No Zakat due'}
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ZakatCalculator;
