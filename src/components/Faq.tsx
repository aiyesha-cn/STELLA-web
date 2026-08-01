import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const faqs = [
  {
    q: 'Do I need a bank account to use STELLA Vault?',
    a: 'No. STELLA Vault is built for people without easy access to traditional banking. All you need is a phone number to get started.',
  },
  {
    q: 'What happens to my money — is it safe?',
    a: 'Deposits are held in USDC on the Stellar network. Every contribution and payout is recorded on-chain, so your vault\'s history is verifiable by anyone in your circle — not just STELLA.',
  },
  {
    q: 'How is this different from a traditional paluwagan?',
    a: 'Same idea, less risk. There\'s no single organizer holding everyone\'s cash, no notebook to lose, and no argument about who paid when — the schedule and history are automatic.',
  },
  {
    q: 'Can I withdraw to GCash or my bank?',
    a: 'Yes. When your payout lands, you can cash out to GCash, a bank transfer, or a padala partner near you.',
  },
  {
    q: 'What is "progressive verification"?',
    a: 'Instead of requiring full KYC documents upfront, STELLA raises your limits as you build a track record — on-time deposits, vault history, and community standing.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/10 border-y border-white/10">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-base font-medium text-white sm:text-lg">
                {item.q}
              </span>
              <span
                className="shrink-0 text-xl text-ember-500 transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 text-sm leading-relaxed text-mist-300">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
