import { ArrowRight, BrainCircuit, FileUp, TextIcon, TextSearch } from "lucide-react";

function HowItWorksSection() {
  const steps = [
    {
      icon: <FileUp className="w-16 h-16 text-rose-500"/>,
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
      <span className="font-bold uppercase text-rose-500">How It works</span>
      <h1 className="text-3xl font-bold">
        Transform any PDFinto an easy-to-digest summary in three simple steps
      </h1>
      <div className="py-12 flex flex-col lg:flex-row gap-6">
        {steps.map((step, index) => {
          return (
            <div className="relative flex flex-col items-center justify-center gap-2 hover:border border-rose-500/50 rounded-xl p-4">
             { index !== steps.length -1 && <ArrowRight className="absolute left-[100%] text-rose-400 hidden lg:block" aria-hidden/>}
              <div className="inline-block rounded-xl p-2 bg-gradient-to-r from-rose-100 to-white">{step.icon}</div>
              <p className="font-bold text-lg">{step.title}</p>
              <p className="text-xs text-gray-700">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HowItWorksSection;
