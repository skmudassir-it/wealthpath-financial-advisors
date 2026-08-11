"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@/components/icon";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        toast.success("Message sent!", {
          description: "We'll get back to you within one business day.",
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
          <Label htmlFor="contact-name">Full name</Label>
          <Input
            id="contact-name"
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
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
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

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Subject</Label>
        <Input
          id="contact-subject"
          placeholder="What's this about?"
          className="h-12 rounded-xl bg-white/70"
          {...register("subject")}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p className="text-xs font-medium text-[#c2410c]">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us what's on your mind — goals, questions, or a quick hello."
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
            Send message
            <Icon name="ArrowRight" className="size-4" />
          </span>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We reply within one business day. Your details are never shared.
      </p>
    </form>
  );
}
