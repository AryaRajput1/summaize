import {
  ArrowRight,
  BrainCircuit,
  FileUp,
  TextIcon,
  TextSearch,
} from "lucide-react";
import { MotionDiv, MotionSpan } from "../ui/common/motion-wrapper";

function HowItWorksSection() {
  const steps = [
    {
      icon: <FileUp className="w-16 h-16 text-rose-500" />,
      title: "Upload PDF",
      description: "Simply drag and drop your PDF document or click to Upload",
    },
    {
      icon: <BrainCircuit className="w-16 h-16 text-rose-500" />,
      title: "Upload PDF",
      description: "Simply drag and drop your PDF document or click to Upload",
    },
    {
      icon: <TextSearch className="w-16 h-16 text-rose-500" />,
      title: "Upload PDF",
      description: "Simply drag and drop your PDF document or click to Upload",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center my-4 bg-gradient-to-r from-transparent via-gray-100 to-transparent py-8">
      <MotionSpan
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
        className="font-bold uppercase text-rose-500"
      >
        How It works
      </MotionSpan>
      <MotionDiv
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
        className="text-2xl text-center md:text-3xl font-bold"
      >
        Transform any PDF into an easy-to-digest summary in three simple steps
      </MotionDiv>
      <div className="py-12 flex flex-col lg:flex-row gap-6">
        {steps.map((step, index) => {
          return (
            <MotionDiv
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.2, delay: index * 0.5}}
              className="relative flex flex-col items-center justify-center gap-2 hover:border border-rose-500/50 rounded-xl p-4"
            >
              {index !== steps.length - 1 && (
                <ArrowRight
                  className="absolute left-[100%] text-rose-400 hidden lg:block"
                  aria-hidden
                />
              )}
              <div className="inline-block rounded-xl p-2 bg-gradient-to-r from-rose-100 to-white">
                {step.icon}
              </div>
              <p className="font-bold text-lg">{step.title}</p>
              <p className="text-xs text-gray-700">{step.description}</p>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
}
export default HowItWorksSection;
