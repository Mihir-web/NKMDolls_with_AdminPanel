import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const faqs: FAQItem[] = [
  {
    question: "Who we are?",
    answer: (
      <div className="space-y-4">
        <p>
          NKM Dolls is not just a doll company; it's a mission-driven brand that
          combines cultural representation, education, and play to make a
          positive impact on the lives of children and youth with Afro/curly
          textured hair. NKM Dolls is an educational tool that teaches children
          with Afro/curly textured hair to love & embrace their natural curl
          pattern. NKM Dolls is a line of dolls for Black girls. Our dolls are
          18-inch Black dolls with Afro/curly hair texture with deep hair roots,
          African facial features with full lips and a wide nose. Our doll hair
          can handle washing, high temperature heat, combing/brushing etc. The
          dolls will act like a mannequin head for Black girls to practice and
          develop a love for taking care of their hair. The hair is able to make
          a part to style into different hairstyles, deep hair roots, imitation
          hairline, soft and full hair texture, can braid, curl and twist, 100%
          human hair, multiple styling, easy to care for. Some other additional
          features the hair has: free hair part, no oxymethylene & no smell, can
          be restyled, thick & full hair, no shedding & tangle free, free part
          as you like, can be used for long time without harm, practice
          braiding, washing, blow drying & curling hair, clear hair line, curl
          hold well, 100% pure top quality human hair, deep hair roots, not easy
          to shed hair, silky & full head material, mimics hair from people with
          African ancestry.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            NKM Dolls is a culturally sensitive and innovative doll company
            committed to providing empowering and educational products for Black
            and racialized children and youth.
          </li>
          <li>
            Our dolls celebrate diversity, featuring Afro/curly textured hair
            and authentic representations of various cultural backgrounds.
          </li>
          <li>
            With mission to foster cultural identity and self-esteem, NKM Dolls
            combines play with learning, offering a unique blend of
            companionship and educational tools.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can my doll's hair get wet?",
    answer:
      "Yes! You can wash your doll's hair or even bring it along for bathtime.",
  },
  {
    question: "Can I use my own shampoo and conditioner on my doll's hair?",
    answer:
      "Yes, you can use gentle shampoos and conditioners on your doll's hair.",
  },
  {
    question: "Can I use other hair products on my doll's hair?",
    answer:
      "We recommend using gentle, child-safe hair products that are suitable for the doll's hair texture.",
  },
  {
    question: "Can I part and style my doll's hair like my own?",
    answer:
      "Yes, the doll's hair is designed to be styled in various ways, similar to natural hair.",
  },
  {
    question: "Can I use heating tools on my doll's hair?",
    answer:
      "We recommend avoiding heating tools to maintain the doll's hair quality and prevent damage.",
  },
  {
    question: "What curl type or pattern do NKM Dolls have?",
    answer:
      "NKM Dolls feature authentic Afro/curly textured hair patterns designed to represent natural hair textures.",
  },
  {
    question: "What materials are used to make NKM Dolls?",
    answer:
      "Our dolls are made with high-quality, safe materials including special hair fibers that mimic natural hair texture.",
  },
  {
    question: "How big are the NKM Dolls?",
    answer:
      "Our dolls are 18-inch dolls, perfect for children to play with and style.",
  },
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );
  };

  return (
    <div id="faq" className="w-[86%] mx-auto p-4 md:p-8">
      <div className="space-y-6">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Got questions? We've got answers! Check out our FAQ section to find
            solutions to common queries, tips for using our software, and
            helpful resources to enhance your experience. If you don't see what
            you're looking for, feel free to reach out to our support team!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-teal-500">
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>

              {openItems.includes(index) && (
                <div
                  id={`faq-answer-${index}`}
                  className="p-4 pt-0 text-gray-600"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-teal-500 text-white px-8 py-3 rounded-tl-xl rounded-tr rounded-bl rounded-br-xl hover:bg-teal-600 transition-colors">
          Get In Touch
        </button>
      </div>
      <br />
    </div>
  );
}
