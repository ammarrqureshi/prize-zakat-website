import Image from 'next/image';
import inflationIcon from 'assets/images/inflation.png';
import interestRatesIcon from 'assets/images/interest-rate.png';
import fiscalSpaceIcon from 'assets/images/wallet.png';
import vaccinationIcon from 'assets/images/loan.png';

export default function ProblemsWeSolve() {
  const problems = [
    {
      icon: inflationIcon,
      title: 'Record Inflation',
      description: 'The rising cost of goods is impacting households worldwide.',
    },
    {
      icon: interestRatesIcon,
      title: 'Rising Interest Rates',
      description: 'Higher borrowing costs are slowing down economic growth.',
    },
    {
      icon: fiscalSpaceIcon,
      title: 'Limited Fiscal Space',
      description: 'Governments are struggling with budget constraints and debt.',
    },
    {
      icon: vaccinationIcon,
      title: 'Increasing Debt Burden',
      description: 'Severe debt burdens to the economic class',
    },
  ];

  return (
    <section className="relative mb-28 grid gap-4  bg-accent-8 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-8 text-4xl text-white">Traditional Economy got Problems!</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex transform flex-col items-center rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:scale-105"
            >
              <Image src={problem.icon} alt={problem.title} width={60} height={60} />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{problem.title}</h3>
              <p className="mt-2 text-center text-sm text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-5xl font-bold text-white">Waiting for the Perfect Solution?</h2>
      </div>
    </section>
  );
}
