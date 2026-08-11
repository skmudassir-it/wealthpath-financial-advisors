import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqList({ faqs }: { faqs: readonly { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`item-${i}`}
          className="glass-card mb-3 rounded-2xl px-6 [&[data-state=open]]:border-[#c9a227]/50"
        >
          <AccordionTrigger className="py-5 text-left font-medium text-[#15233c] hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
