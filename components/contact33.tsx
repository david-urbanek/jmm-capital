"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(1, "Jméno je povinné"),
  email: z
    .string()
    .min(1, "E-mail je povinný")
    .email("Zadejte platnou e-mailovou adresu"),
  subject: z.string().optional(),
  message: z.string().min(1, "Zpráva je povinná"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface Contact33Props {
  title?: string;
  description?: string;
  image?: string;
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const Contact33 = ({
  title = "Start a Conversation",
  description = "We're here to help bring your ideas to life. Tell us about your project.",
  image = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modern%20Architectural%20Elegance%20at%20Twilight.png",
  className,
  onSubmit,
}: Contact33Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setIsSubmitted(true);
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 4500);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-10">
                <h1 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl">
                  {title}
                </h1>
                <p className="text-lg text-muted-foreground">{description}</p>
              </div>

              {isSubmitted && (
                <div
                  className={cn(
                    "mb-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center transition-opacity duration-500",
                    showSuccess ? "opacity-100" : "opacity-0",
                  )}
                >
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    Děkujeme! Brzy se vám ozveme.
                  </p>
                </div>
              )}

              <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <FieldGroup>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Controller
                      control={form.control}
                      name="name"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            Jméno <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Vaše jméno"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            E-mail <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            type="email"
                            aria-invalid={fieldState.invalid}
                            placeholder="vas@email.cz"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </div>

                  <Controller
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Předmět</FieldLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger id={field.name}>
                            <SelectValue placeholder="Jak vám můžeme pomoci?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              Obecný dotaz
                            </SelectItem>
                            <SelectItem value="investment">Investiční příležitost</SelectItem>
                            <SelectItem value="partnership">
                              Partnerství
                            </SelectItem>
                            <SelectItem value="press">Média & PR</SelectItem>
                            <SelectItem value="other">Ostatní</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="message"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Zpráva <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Textarea
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Napište nám o vašem projektu nebo dotazu..."
                          rows={6}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {form.formState.errors.root && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.root.message}
                    </p>
                  )}

                  <Button
                    variant="outline"
                    className="w-full sm:w-auto rounded-full border-border/60 text-xs tracking-widest uppercase hover:border-foreground"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                        Odesílám...
                      </>
                    ) : (
                      "Odeslat zprávu"
                    )}
                  </Button>
                </FieldGroup>
              </form>
            </div>

            <div className="hidden lg:block">
              <div className="h-full overflow-hidden rounded-2xl">
                <img src={image} alt="" className="size-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact33 };
