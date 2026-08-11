"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { quoteSchema, type QuoteInput } from "@/lib/schemas";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@/components/icon";

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: "" },
  });

  const onSubmit = async (data: QuoteInput) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        toast.success("Quote request received!", {
          description: "A senior advisor will reach out within one business day.",
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          description: json.error ?? "Please try again in a moment.",
        });
      }
    } catch {
      toast.error("Network error", {
        description: "Could not reach the server. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-name">Full name</Label>
          <Input
            id="quote-name"
            placeholder="Jordan Smith"
            className="h-12 rounded-xl bg-white/70"
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-xs font-medium text-[#c2410c]">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-email">Email</Label>
          <Input
            id="quote-email"
            type="email"
            placeholder="jordan@example.com"
            className="h-12 rounded-xl bg-white/70"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs font-medium text-[#c2410c]">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-phone">Phone (optional)</Label>
          <Input
            id="quote-phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="h-12 rounded-xl bg-white/70"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-xs font-medium text-[#c2410c]">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-service">Service of interest</Label>
          <Select
            onValueChange={(value: string | null) => {
              if (value) setValue("service", value, { shouldValidate: true });
            }}
          >
            <SelectTrigger id="quote-service" className="h-12 rounded-xl bg-white/70">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.title}
                </SelectItem>
              ))}
              <SelectItem value="general">General / Not sure yet</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-xs font-medium text-[#c2410c]">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="quote-message">How can we help?</Label>
        <Textarea
          id="quote-message"
          rows={4}
          placeholder="Tell us about your goals — retirement, investing, taxes, legacy…"
          className="resize-none rounded-xl bg-white/70"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-xs font-medium text-[#c2410c]">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-gradient h-12 w-full rounded-xl text-base font-semibold disabled:opacity-60"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Request my free quote
            <Icon name="ArrowRight" className="size-4" />
          </span>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No spam, no obligation. We reply within one business day.
      </p>
    </form>
  );
}
